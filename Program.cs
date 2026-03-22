using PeterdinisSolutions.Components;
using PeterdinisSolutions.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents();
builder.Services.AddSingleton<VisitorCounterStore>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapGet("/api/visitors", (VisitorCounterStore store) => Results.Json(new { total = store.GetTotal() }));
app.MapGet("/api/visitors/tick", (VisitorCounterStore store) => Results.Json(new { total = store.IncrementAndGet() }));

app.MapStaticAssets();
app.MapRazorComponents<App>();

app.Run();
