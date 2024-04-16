using DeShawnsDogWalking.Models;
using DeShawnsDogWalking.Models.DTOs;

List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Baxter"
    },
    new Dog()
    {
        Id = 2,
        Name = "Luna"
    },
    new Dog()
    {
        Id = 3,
        Name = "Charlie"
    },
    new Dog()
    {
        Id = 4,
        Name = "Bella"
    },
    new Dog()
    {
        Id = 5,
        Name = "Max"
    },
    new Dog()
    {
        Id = 6,
        Name = "Daisy"
    },
    new Dog()
    {
        Id = 7,
        Name = "Oliver"
    },
    new Dog()
    {
        Id = 8,
        Name = "Lucy"
    },
    new Dog()
    {
        Id = 9,
        Name = "Cooper"
    },
    new Dog()
    {
        Id = 10,
        Name = "Molly"
    }
};

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("api/dogs", () =>
{
    List<DogDTO> dogDTOs = new List<DogDTO>();

    foreach (Dog dog in dogs)
    {
        dogDTOs.Add(new DogDTO
        {
            Id = dog.Id,
            Name = dog.Name,
            WalkerId = dog.WalkerId,
            CityId = dog.CityId
        });
    }

    return dogDTOs;
});

app.Run();
