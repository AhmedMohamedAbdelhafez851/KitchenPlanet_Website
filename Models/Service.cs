namespace PlanetKitchens.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string IconUrl { get; set; } // رابط الأيقونة (اختياري)
        public DateTime CreatedAt { get; set; }
    }

}
