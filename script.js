const headerStyle = document.querySelector(".header").style;

let options1 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

let observer1 = new IntersectionObserver((entries, observer) => {
  console.log(entries);
  if (entries[0].isIntersecting) {
    console.log("sdsdasdfsf11111111");
    headerStyle.position = "fixed";
    headerStyle.top = 0;
    headerStyle.left = "0%";
    headerStyle.backgroundColor = "rgba(255,255,255,0.6)";
    headerStyle.width = "100vw";
    headerStyle.padding = "0 5vw";
  }
}, options1);

const target1 = document.querySelector(".companies");
observer1.observe(target1);

let options2 = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};
let observer2 = new IntersectionObserver((entries, observer) => {
  console.log(entries);
  if (entries[0].isIntersecting) {
    console.log("sdsdasdfsf11111111");
    headerStyle.position = "relative";
    headerStyle.backgroundColor = "rgba(255,255,255,0)";
    headerStyle.width = "90vw";
    headerStyle.padding = "0";
  }
}, options1);

const target2 = document.querySelector(".hero-title");
observer2.observe(target2);

console.log("sfdsdf", document.querySelector(".hero"));

document.querySelector(".nav-btn-menu").addEventListener("click", () => {
  document.querySelector(".header").classList.add("menu");
});

document.querySelector(".nav-btn-close").addEventListener("click", () => {
  document.querySelector(".header").classList.remove("menu");
});
