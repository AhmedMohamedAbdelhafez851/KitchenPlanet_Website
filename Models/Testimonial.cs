namespace PlanetKitchens.Models
{
    public class Testimonial
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public string TestimonialText { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
