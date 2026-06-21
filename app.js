const fromYearInput = document.getElementById("fromYear");
const toYearInput = document.getElementById("toYear");
const modeYearToEventBtn = document.getElementById("modeYearToEvent");
const modeEventToYearBtn = document.getElementById("modeEventToYear");
const startBtn = document.getElementById("startBtn");
const resetStatsBtn = document.getElementById("resetStatsBtn");
const quiz = document.getElementById("quiz");
const progress = document.getElementById("progress");
const score = document.getElementById("score");
const promptEl = document.getElementById("prompt");
const questionEl = document.getElementById("question");
const revealBtn = document.getElementById("revealBtn");
const answerBox = document.getElementById("answerBox");
const answerLabel = document.getElementById("answerLabel");
const answerMain = document.getElementById("answerMain");
const answerDescription = document.getElementById("answerDescription");
const gradeBtns = document.getElementById("gradeBtns");
const againBtn = document.getElementById("againBtn");
const correctBtn = document.getElementById("correctBtn");

let deck = [];
let currentIndex = 0;
let correctCount = 0;
let againCount = 0;
let quizMode = "year-to-event";

function keepQuizAtTop() {
  if (!quiz.classList.contains("hidden")) {
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function setText(element, text) {
  clearElement(element);
  element.textContent = text;
}

function renderEventList(target, events) {
  clearElement(target);

  const list = document.createElement("div");
  list.className = "eventList";

  events.forEach((event, index) => {
    const item = document.createElement("article");
    item.className = "eventItem";

    const title = document.createElement("div");
    title.className = "eventTitle";
    title.textContent = event.title || "Untitled event";

    const description = document.createElement("div");
    description.className = "eventDescription";
    description.textContent = event.description || "";

    if (events.length > 1) {
      const number = document.createElement("span");
      number.className = "eventNumber";
      number.textContent = `${index + 1}. `;
      title.prepend(number);
    }

    item.appendChild(title);
    if (event.description) item.appendChild(description);
    list.appendChild(item);
  });

  target.appendChild(list);
}

function groupEventsByYear(events) {
  const groupsByYear = new Map();

  events.forEach(event => {
    const year = Number(event.year);
    if (!Number.isFinite(year)) return;

    if (!groupsByYear.has(year)) {
      groupsByYear.set(year, { year, events: [] });
    }

    groupsByYear.get(year).events.push(event);
  });

  return Array.from(groupsByYear.values()).sort((a, b) => a.year - b.year);
}

function setDefaultYears() {
  const years = YEAR_EVENTS.map(item => Number(item.year)).filter(Number.isFinite);
  const min = Math.min(...years);
  const max = Math.max(...years);
  fromYearInput.value = min;
  toYearInput.value = max;
}

function setQuizMode(mode) {
  quizMode = mode;
  modeYearToEventBtn.classList.toggle("active", mode === "year-to-event");
  modeEventToYearBtn.classList.toggle("active", mode === "event-to-year");
}

function startQuiz() {
  const from = Number(fromYearInput.value);
  const to = Number(toYearInput.value);

  if (!Number.isFinite(from) || !Number.isFinite(to)) {
    alert("Please enter a valid year range.");
    return;
  }

  const min = Math.min(from, to);
  const max = Math.max(from, to);

  const filteredEvents = YEAR_EVENTS.filter(item => Number(item.year) >= min && Number(item.year) <= max);
  deck = shuffle(groupEventsByYear(filteredEvents));
  currentIndex = 0;
  correctCount = 0;
  againCount = 0;

  if (deck.length === 0) {
    alert("No event cards found in this year range.");
    return;
  }

  quiz.classList.remove("hidden");
  showCard();
  keepQuizAtTop();
}

function showCard() {
  if (currentIndex >= deck.length) {
    promptEl.textContent = "Finished";
    setText(questionEl, "Done");
    progress.textContent = `${deck.length} / ${deck.length}`;
    revealBtn.classList.add("hidden");
    answerBox.classList.remove("hidden");
    gradeBtns.classList.add("hidden");
    answerLabel.textContent = "Result";
    setText(answerMain, "Quiz finished");
    answerDescription.textContent = `Correct: ${correctCount}. Again: ${againCount}.`;
    updateScore();
    return;
  }

  const group = deck[currentIndex];
  progress.textContent = `${currentIndex + 1} / ${deck.length}`;
  answerDescription.textContent = "";

  if (quizMode === "year-to-event") {
    promptEl.textContent = "What happened in";
    setText(questionEl, group.year);
    answerLabel.textContent = group.events.length === 1 ? "Event" : `${group.events.length} Events`;
    renderEventList(answerMain, group.events);
  } else {
    promptEl.textContent = "Which year belongs to";
    renderEventList(questionEl, group.events);
    answerLabel.textContent = "Year";
    setText(answerMain, group.year);
  }

  answerBox.classList.add("hidden");
  gradeBtns.classList.add("hidden");
  revealBtn.classList.remove("hidden");
  updateScore();
}

function revealAnswer() {
  answerBox.classList.remove("hidden");
  gradeBtns.classList.remove("hidden");
  revealBtn.classList.add("hidden");
  keepQuizAtTop();
}

function grade(isCorrect) {
  if (isCorrect) {
    correctCount += 1;
  } else {
    againCount += 1;
    deck.push(deck[currentIndex]);
  }
  currentIndex += 1;
  showCard();
  keepQuizAtTop();
}

function updateScore() {
  score.textContent = `Correct: ${correctCount} · Again: ${againCount}`;
}

function resetStats() {
  correctCount = 0;
  againCount = 0;
  updateScore();
}

modeYearToEventBtn.addEventListener("click", () => setQuizMode("year-to-event"));
modeEventToYearBtn.addEventListener("click", () => setQuizMode("event-to-year"));
startBtn.addEventListener("click", startQuiz);
revealBtn.addEventListener("click", revealAnswer);
againBtn.addEventListener("click", () => grade(false));
correctBtn.addEventListener("click", () => grade(true));
resetStatsBtn.addEventListener("click", resetStats);

setDefaultYears();
setQuizMode("year-to-event");
