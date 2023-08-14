document.addEventListener("DOMContentLoaded", () => {
  let question = document.querySelectorAll(".question");

  function questionOpen() {
    let arrow = this.querySelector(".arrow");
    arrow.classList.toggle("switch");
    let answer = this.querySelector(".question__answer");
    answer.classList.toggle("switch");
  }

  question.forEach((element) => {
    element.addEventListener("click", questionOpen);
  });

  let tds = document.querySelectorAll("td");

  tds.forEach((element) => {
    element.addEventListener("click", () => {
      let text = element.innerText;
      window.navigator.clipboard.writeText(text).then(() => {
        setTimeout(showNote, 0)
        setTimeout(showNote2, 2000)
        function showNote() {
          element.innerText = "Cкопировано"
        }
        function showNote2() {
          element.innerText = text
        }
      });
    });
  });

});
