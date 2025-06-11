namespace PlanetKitchens.Models
{
    public class Setting
    {
        public int Id { get; set; }
        public string Key { get; set; } // مفتاح الإعداد
        public string Value { get; set; } // قيمة الإعداد
        public DateTime CreatedAt { get; set; }
    }

}
