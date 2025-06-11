namespace PlanetKitchens.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } // وصف التصنيف
        public DateTime CreatedAt { get; set; }
    }

}
