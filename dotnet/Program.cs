var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));
var app = builder.Build();

app.UseCors("corsapp");

app.MapGet("/ping", () => new { Value = "Ping dotnet!" });

app.Run();
