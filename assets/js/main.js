/*=============== SHOW/CLOSE MOBILE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE WHILE LINK CLICKED ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("showMenu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById("title-data"),
  numberData = document.getElementById("number-data"),
  textData = document.getElementById("text-data"),
  msgChristmas = document.getElementById("msg-christmas");

const christmasCountdown = () => {
  let now = new Date(),
    currentMonth = now.getMonth() + 1,
    currentDay = now.getDate();

  let nextChristmasYear = now.getFullYear();
  if (currentMonth == 12 && currentDay == 31) {
    nextChristmasYear += 1;
  }

  let nextChristmasDate = `Dec 31, ${nextChristmasYear} 00:00:00`,
    christmasDay = new Date(nextChristmasDate),
    timeLeft = christmasDay - now;

  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;

  if (currentMonth != 12 || (currentMonth == 12 && currentDay != 31)) {
    days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    seconds = Math.floor(timeLeft / 1000) % 60;
  }

  // show missing days
  numberData.innerHTML = days < 10 ? `0${days}` : days;
  textData.innerHTML = "Days";

  // show missing hours
  if (currentDay == 30) {
    numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
    textData.innerHTML = "Hours";
  }

  // show missing minutes
  if (currentDay == 30 && hours === 0) {
    numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textData.innerHTML = "Minutes";
  }

  // show missing seconds
  if (currentDay == 30 && hours === 0 && minutes === 0) {
    numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textData.innerHTML = "Seconds";
  }

  // show message
  if (currentMonth == 12 && currentDay == 31) {
    titleData.style.display = "none";
    msgChristmas.style.display = "block";
    msgChristmas.innerHTML = "Today is Dec 31, Happy New Year";
  }

  // remove message
  if (currentMonth == 1 && currentDay == 1) {
    titleData.style.display = "block";
    msgChristmas.style.display = "none";
  }
};

setInterval(christmasCountdown, 1000);
