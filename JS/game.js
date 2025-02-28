
const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "Rohit sharma is best cricket player",
  "Virat kholi is world famous cricketer",
  "Sriram is Alone!",
  "Sriram love 'HANNAH JOY'",
  "Hannah joy is bueatiful angel",
  "three members friends!",
  "my favoraite cricketer hitman!",
  "dhoni is csk captain?",
  "New mi captain is hardik",
  "hitman called ravisasthiri?",
  "leo messi is my nick name",
  "leo messi won fifa world cup",
  "my world(hannah,amma,bro,settu,hitman)",
  "my bro jethro and kevin",
  " ROHIT SHARMA HANNAH JOY ME!"
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    // main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime(); // unix timestamp
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time : ${totalTime} Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}