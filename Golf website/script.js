const cursor = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

const h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elements) {
  elements.addEventListener("mouseenter", function () {
    cursor.style.transform = "scale(1.5)";
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "2px solid #fff";
  });
});
h4all.forEach(function (elements) {
  elements.addEventListener("mouseleave", function () {
    cursor.style.transform = "scale(1)";
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "none";
    cursor.style.transform = "translate(-50%, -50%)";
  });
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorBlur.style.left = e.clientX + "px";
  cursorBlur.style.top = e.clientY + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",

  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",

  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 0.5,
  },
});

gsap.from("#about-us-section img, .about-us", {
  y: 50,
  opacity: 0,
  duration: 1,
  stragger: 0.5,
  scrollTrigger: {
    trigger: ".about-us",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from(".colon1", {
  y: -20,
  x: -20,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 2,
  },
});
gsap.from(".colon2", {
  y: 20,
  x: 20,
  scrollTrigger: {
    trigger: ".colon2",
    scroller: "body",
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.from(".first-container h4", {
  y: 40,
  scrollTrigger: {
    trigger: ".first-container",
    scroller: "body",
    marker: true,
    start: "top 95%",
    end: "top 65%",
    scrub: 0.5,
  },
});

const feedbackMsg = [
  "Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, friendly and very helpful. Café on site for refreshments etc. Will keep children enterntained during the holidays. Worth a visit if you haven’t been.",
  "Pleasantly surprised to discover the mini golf is open until 10pm during weekdays 😊 Always enjoy visit here, cafe does some nice goodies too 👍🏽",
  "Definitely one of the best places to hit some golf balls, the TopTracer in most of the bays is a fantastic addition for the price! I’m yet to try the Mini golf but everyone seems to be having fun over there!",
  "Absolutely loved the experience! The staff looked after me ensured I was enjoying the range and gave me helpful tips to get the best out of my game. Digital screens to see my progress. I’ll be back 😁 🏌🏽‍♀️",
  "I absolutely love the adventure golf here. It seems every time I come they’ve added a new feature. My mum and I usually come together and it’s such a laugh. The designs for the holes are creative and the two different courses makes it more fun as you can complete both and compare your scores!",
  "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
  "Great facilities — loads of bays in the driving range with many coloured targets to aim for and a ball tracking monitor to see if you’re getting close.",
];

let currentFeedbackIndex = 0;

const changeFeedback = () => {
  const feedbackElement = document.getElementById("feedback-text");
  currentFeedbackIndex = (currentFeedbackIndex + 1) % feedbackMsg.length;
  feedbackElement.innerText = feedbackMsg[currentFeedbackIndex];
};

document
  .getElementById("feedback-text")
  .addEventListener("click", changeFeedback);
setInterval(changeFeedback, 5000);

// img slider

const imgSlide = document.querySelectorAll(".food-img img");
const dots = document.querySelectorAll(".dots .dot");

let currentIndex = 0;

const slider = function (index) {
  imgSlide[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");

  currentIndex = index;
  imgSlide[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slider(index);
  });
});

setInterval(() => {
  let nextSlide = (currentIndex + 1) % imgSlide.length;
  slider(nextSlide);
}, 5000);
