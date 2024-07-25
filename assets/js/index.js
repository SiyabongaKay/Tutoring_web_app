document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const homeSection = document.querySelector("#home");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.classList.add("home-active");
      } else {
        header.classList.remove("home-active");
      }
    });
  }, options);

  observer.observe(homeSection);
});
