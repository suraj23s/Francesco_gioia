var t1 = gsap.timeline();
t1.from("h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 1,
  stagger: 0.3,
});

t1.from("h1", {
  x: -500,
  opacity: 0,
  delay: 0.8,
  duration: 1,
  stagger: 0.4,
});
t1.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});
