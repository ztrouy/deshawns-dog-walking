namespace DeShawnsDogWalking.Models.DTOs;

public class DogDTO
{
    public int Id {get; set;}
    public string Name {get; set;} = string.Empty;
    public int WalkerId {get; set;}
    public int CityId {get; set;}
}