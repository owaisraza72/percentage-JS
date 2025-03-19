// numberInput1.style.color = 'red'
// ----------------
const myForm = document.querySelector("#myform");
const totalInput = document.querySelector(".num1");
const obtainedInput = document.querySelector(".num2");
const percentageInput = document.querySelector("#num3");
const gradeInput = document.querySelector(".num4");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // andar ka code saruf tab chale ga jab form submit hoga

  let totalMrk = Number(totalInput.value);
  let obtaindMrk = Number(obtainedInput.value);

  let sum = (obtaindMrk / totalMrk) * 100;
  console.log(sum);

  let num = sum;

  let grade;
  if (sum >= 80) {
    grade = "A-One";
  } else if (num >= 70) {
    grade = "A-Grade";
  } else if (num >= 60) {
    grade = "B-Grade";
  } else if (num >= 50) {
    grade = "C-Grade";
  } else if (num >= 40) {
    grade = "D-Grade";
  } else {
    grade = "Fail";
  }

  percentageInput.innerText = sum;
  gradeInput.innerText = grade;

  //event.target.reset(sum)
  console.log("submiting done");
});
