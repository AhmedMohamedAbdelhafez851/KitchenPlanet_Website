﻿namespace PlanetKitchens.Models
{
    public class Admin
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public string Role { get; set; } // Admin, Editor, etc.
        public DateTime CreatedAt { get; set; }
    }

}
