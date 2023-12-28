const addHeart =
  document.querySelector(".picture");
const times = document.getElementById("times");

let clickTime = 0;
let timesClicked = 0;
addHeart.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fa-solid");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  //koordinates
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  addHeart.appendChild(heart);

  times.innerHTML = ++timesClicked;

  //as the span hearts are created in html on screen, we have to ensure to delete them after certain time
  setTimeout(() => {
    heart.remove();
  }, 1000);
};

//Animation of moving text
const textElement =
  document.getElementById("text");
const speedElement =
  document.getElementById("speed");
const text = `DoubleClick to add heart!`;

let idx = 1;
let speed = 300 / speedElement.value;

writeText();
function writeText() {
  textElement.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedElement.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
