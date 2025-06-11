using Microsoft.EntityFrameworkCore;
using PlanetKitchens.Models;

namespace PlanetKitchens.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Admin> Admins { get; set; }
        public DbSet<HeroSection> HeroSections { get; set; }
        public DbSet<AboutUs> AboutUs { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ContactMessage> ContactMessages { get; set; }
        public DbSet<Setting> Settings { get; set; }
        public DbSet<GalleryImage> GalleryImages { get; set; }
        public DbSet<Testimonial> Testimonials { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }

}
