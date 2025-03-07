const linksIntrernos = document.querySelectorAll('a[href^="#"]');
function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: "smooth",
  });
}

linksIntrernos.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

const imagensExtra = [
  "./img/img.local.jpg",
  "./img/imglocal2.jpg",
  "./img/imglocal3.jpg",
];
let index = 0;

setInterval(() => {
  index = (index + 1) % imagensExtra.length;
  document.getElementById("image").src = imagensExtra[index];
}, 3000);

const sections = document.querySelectorAll('[data-anime="scroll"]');
if (sections.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
      else section.classList.remove("ativo");
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}
