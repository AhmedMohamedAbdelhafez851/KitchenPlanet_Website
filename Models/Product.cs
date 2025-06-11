namespace PlanetKitchens.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; } // مفتاح أجنبي للتصنيف
        public string ImageUrl { get; set; }
        public DateTime CreatedAt { get; set; }
        public Category Category { get; set; } // الربط مع التصنيف
    }
}
