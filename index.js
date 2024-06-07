const { gsap, imagesLoaded } = window;

console.log(gsap);

let intro = document.getElementById("intro").innerText;

let introArray = intro.split("");
console.log(introArray);

introArray.forEach((e) => {
  console.log(e);

  let span = document.createElement("span");

  span.innerHTML = `${e}`;
  span.classList.add("intro");

  let introclas = document.querySelector(".intro");
  console.log(span);
  gsap.from( [] {
    scale: 2,
    duration: 3,
    delay: 1,
    stagger: true,
  });
});
