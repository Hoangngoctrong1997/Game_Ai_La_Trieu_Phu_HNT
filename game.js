
let currentQuestion = 0;
let playerName = "";
let curentQ = [];
// let users = JSON.parse(localStorage.getItem('hightsoceProfile'));
let users = JSON.parse(localStorage.getItem('hightsoceProfile')) || [];
function sortDescending(arr) {
    return arr.sort((a, b) => b.score - a.score);
}
function loadHightScore() {
  let newUers = sortDescending(users);
  console.log(newUers);
  if (Array.isArray(newUers)) {
    for (let i = 0; i < Math.min(5, newUers.length); i++) {
      document.getElementById("hightscore").innerHTML += `
        <div class="row">
        <div class="col-md-6">${newUers[i].name}</div>
        <div class="col-md-4">${newUers[i].score}</div>
        </div>
      `;
    }
  }
}
function resetScore(){
  users = [];
  localStorage.clear();
    document.getElementById("hightscore").innerHTML = "";
}
a = loadHightScore();
function startgame(){
  playerName = document.getElementById("player_name").value;
  document.getElementById("pageContent").style.display="inline";
  document.getElementById("btnStart").classList.remove("d-flex");
  document.getElementById("btnStart").style.display="none";
  loadQuestion(); 
  renderPrizeList();
  document.getElementById('startAudio').play();
};
function renderPrizeList() {  
  const prizeListEl = document.getElementById("prizeList");
  prizeListEl.innerHTML = "";

  for (let i = prizeList.length - 1; i > 0; i--) {
    let li = document.createElement("li");
    if(i==5 || i==10 || i==15){
          li.innerHTML = `<h1/>${i}. ${prizeList[i]}<h1/>`;
          li.id = `prize-${i}`;
    }else{
          li.innerHTML = `<a/>${i}. ${prizeList[i]}<a/>`;
          li.id = `prize-${i}`;
    }
    prizeListEl.appendChild(li);
  }
}
function getRandomInArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
function loadQuestion() {
  curentQ = getRandomInArr(questions[currentQuestion]);
  console.log(curentQ);
  document.getElementById("question").innerHTML = curentQ.question;
  curentQ.options.forEach((opt, index) => {
    document.getElementById("option" + index).innerHTML = opt;
    document.getElementById("test").innerHTML = `Chào mừng ${playerName} đến với chương trình Ai là triệu phú . Chúc bạn may mắn đạt được giải thưởng cao nhất`;
  });

  document.getElementById("result").innerHTML = "";

  for (let i = 1; i < prizeList.length; i++) {
    let el = document.getElementById(`prize-${i}`);
    if (el) el.classList.remove("active");
  }
  const active = document.getElementById(`prize-${currentQuestion + 1}`);
  if (active) active.classList.add("active");

  lifelineUsed = false;
  const btn5050 = document.getElementById("btn5050");
  if (btn5050) btn5050.disabled = false;

  for (let i = 0; i < 4; i++) {
    const optEl = document.getElementById("option" + i);
    optEl.style.visibility = "visible";
    optEl.style.pointerEvents = "auto";
  }

}
function selectAnswer(index) {
  const result = document.getElementById("result");
  if (index === curentQ.answer) {
    document.getElementById('startAudio').pause();
    document.getElementById('trueAns').play();
    result.innerHTML = getRandomInArr(stt_result);
    result.style.color = "lime";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(loadQuestion, 1000);
    } else {
      result.innerHTML = ` Chúc mừng! Bạn đã chiến thắng và nhận ${prizeList[currentQuestion]}`;
      document.getElementById("resetgame").innerHTML = `<button class="btn btn-primary d-flex justify-content-center align-items-center "onclick="resetgame()">Chơi lại</button>`;
    }
  } else {
    document.getElementById('startAudio').pause();
    document.getElementById('wrongAns').play();
    const earned = prizeList[currentQuestion];
    let hightScore = {};
    hightScore ={name:playerName,score:earned};
    users.push(hightScore);
    result.innerHTML = ` Thật tiếc. Bạn ra về với ${earned}`;
    document.getElementById("resetgame").innerHTML = `<button class="btn btn-primary d-flex justify-content-center align-items-center "onclick="resetgame()">Chơi lại</button>`;
    localStorage.setItem('hightsoceProfile', JSON.stringify(users));
    result.style.color = "red";
    for (let i = 0; i < 4; i++) {
      document.getElementById("option" + i).onclick = null;
    }
  }
}
function resetgame(){
  location.reload();
}
let used50_50 = false;

function use5050() {
  if (used50_50) return;

  let wrongAnswers = [0, 1, 2, 3].filter(i => i !== questions[currentQuestion].answer);
  wrongAnswers = random_wrong_ans(wrongAnswers).slice(0, 2);

  wrongAnswers.forEach(i => {
    document.getElementById("option" + i).innerHTML = "";
  });

  used50_50 = true;
  document.getElementById("btn5050").disabled = true;
}

function random_wrong_ans(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}



