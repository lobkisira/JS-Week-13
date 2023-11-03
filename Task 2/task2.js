const elementBday = document.getElementById("birthday").value;
const currentDate = new Date();
const result = document.getElementById("result");
const button = document.getElementById("btn");

function calculateBirthday(elementBday) {
  const messageTimestamp = Date.parse(elementBday);
  const timeDiff = messageTimestamp - currentDate;
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysPassed;
}

button.addEventListener("click", function () {
  let lastWord;
  const birthday = document.getElementById("birthday").value;
  const daysPassed = calculateBirthday(birthday);
  if (daysPassed >= 11 && daysPassed < 15) {
    document.getElementById("result").innerHTML =
      "До вашего дня рождения осталось " + daysPassed + " дней";
  } else if (daysPassed == 1) {
    document.getElementById("result").innerHTML =
      "До вашего дня рождения осталось " + daysPassed + " день";
  } else if (daysPassed > 1 && daysPassed < 5) {
    document.getElementById("result").innerHTML =
      "До вашего дня рождения осталось " + daysPassed + " дня";
  } else if (daysPassed == 0 || daysPassed >= 5) {
    document.getElementById("result").innerHTML =
      "До вашего дня рождения осталось " + daysPassed + " дней";
  } else {
    document.getElementById("result").innerHTML =
      "Введите правильный формат даты";
  }
});
