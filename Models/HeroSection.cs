namespace PlanetKitchens.Models
{
    public class HeroSection
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Subtitle { get; set; }
        public string ImageUrl { get; set; } // الرابط الخاص بالصورة
        public string Link { get; set; }
        public DateTime CreatedAt { get; set; }
    }

}
