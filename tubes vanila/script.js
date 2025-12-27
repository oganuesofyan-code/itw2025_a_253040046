const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", e => {
    const targetId = link.getAttribute("href");

    if (targetId.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(targetId);
      const offset = 80; // tinggi navbar
      const position = target.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });  
    }
  });
});



const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  hamburger.textContent = isOpen ? "✖" : "☰";
});

/* Auto close  klik menu */
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.textContent = "☰";
  });
});
