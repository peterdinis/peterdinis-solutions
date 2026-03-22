using System.Text.Json;
using System.Text.Json.Serialization;

namespace PeterdinisSolutions.Services;

/// <summary>
/// Thread-safe visit counter persisted under App_Data/visitor-count.json.
/// </summary>
public sealed class VisitorCounterStore
{
    private static readonly JsonSerializerOptions JsonOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    };

    private readonly string _filePath;
    private readonly object _gate = new();
    private long _memoryFallback;

    public VisitorCounterStore(IWebHostEnvironment env)
    {
        var dir = Path.Combine(env.ContentRootPath, "App_Data");
        _filePath = Path.Combine(dir, "visitor-count.json");
    }

    public long GetTotal()
    {
        lock (_gate)
        {
            try
            {
                if (!File.Exists(_filePath))
                    return _memoryFallback;

                var json = File.ReadAllText(_filePath);
                var doc = JsonSerializer.Deserialize<VisitorCountSnapshot>(json, JsonOptions);
                var n = doc?.Total ?? 0;
                return Math.Max(n, _memoryFallback);
            }
            catch
            {
                return _memoryFallback;
            }
        }
    }

    public long IncrementAndGet()
    {
        lock (_gate)
        {
            try
            {
                var dir = Path.GetDirectoryName(_filePath);
                if (!string.IsNullOrEmpty(dir))
                    Directory.CreateDirectory(dir);

                var current = 0L;
                if (File.Exists(_filePath))
                {
                    var json = File.ReadAllText(_filePath);
                    var doc = JsonSerializer.Deserialize<VisitorCountSnapshot>(json, JsonOptions);
                    if (doc != null)
                        current = doc.Total;
                }

                var next = current + 1;
                File.WriteAllText(
                    _filePath,
                    JsonSerializer.Serialize(new VisitorCountSnapshot { Total = next }, JsonOptions));
                _memoryFallback = next;
                return next;
            }
            catch
            {
                _memoryFallback++;
                return _memoryFallback;
            }
        }
    }

}

internal sealed class VisitorCountSnapshot
{
    public long Total { get; set; }
}
