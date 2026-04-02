using Microsoft.JSInterop;

namespace PeterdinisSolutions.Services;

/// <summary>
/// Reads the visit counter from the browser (localStorage via JS). No server — suitable for static / CDN hosting.
/// </summary>
public sealed class VisitorCounterClient(IJSRuntime js)
{
    public ValueTask<double> GetTotalAsync() =>
        js.InvokeAsync<double>("pdsVisitors.getTotal");
}
