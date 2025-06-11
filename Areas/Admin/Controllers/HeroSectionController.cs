using Microsoft.AspNetCore.Mvc;
using PlanetKitchens.Data;
using PlanetKitchens.Models;

namespace PlanetKitchens.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HeroSectionController : Controller
    {
        private readonly ApplicationDbContext _context;

        public HeroSectionController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Manage()
        {
            return View(_context.HeroSections.ToList());
        }

        [HttpPost]
        public IActionResult Create(HeroSection model)
        {
            if (ModelState.IsValid)
            {
                _context.HeroSections.Add(model);
                _context.SaveChanges();
                return RedirectToAction(nameof(Manage));
            }
            return View("Manage", _context.HeroSections.ToList());
        }

        [HttpPost]
        public IActionResult Edit(HeroSection model)
        {
            if (ModelState.IsValid)
            {
                _context.HeroSections.Update(model);
                _context.SaveChanges();
                return RedirectToAction(nameof(Manage));
            }
            return View("Manage", _context.HeroSections.ToList());
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            var item = _context.HeroSections.FirstOrDefault(s => s.Id == id);
            if (item != null)
            {
                _context.HeroSections.Remove(item);
                _context.SaveChanges();
            }
            return RedirectToAction(nameof(Manage));
        }
    }
}
