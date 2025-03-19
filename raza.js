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
  let percantage = Number(percentageInput.value);
  let grade = Number(gradeInput.value);

  let sum = (obtaindMrk / totalMrk) * 100;
  console.log(sum);

  let num = sum;

  if (sum >= 80) {
    console.log("A-One");
  } else if (num >= 70) {
    console.log("A-Grade");
  } else if (num >= 60) {
    console.log("B-Grade");
  } else if (num >= 50) {
    console.log("C-Grade");
  } else if (num >= 40) {
    console.log("D-Grade");
  } else {
    console.log("Fail");
  }

  percentageInput.innerText = sum;
  gradeInput.innerText = sum;

  //event.target.reset(sum)
  console.log("submiting done");
});
