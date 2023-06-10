//  ----------------------- start game 1 js --------------------------
'use strict'
let turn = 1;
let selected_number = Math.floor(Math.random() * 10) + 1;
let input_number = document.getElementById("xnum");
let true_or_false_answer_text = document.getElementsByClassName("_txt")[0];
let guide_text = document.getElementsByClassName("_txt2")[0];
let health_text = document.getElementById("life");
 let answer_text = document.getElementsByClassName("javab")[0];
let strong_attack_icon1 = document.getElementById("strong-attack-game1");
let submit_game1 = document.getElementById("submit-game1");

let local_strong_game1=0

function answer() {
  let input_number_value = input_number.value;
  console.log(selected_number);
  if (turn < 4) {
    if (selected_number === +input_number_value) {
      true_or_false_answer_text.innerText = "درست حدس زدید";
      input_number.style.background = "green";
      guide_text.innerText = "";
      local_strong_game1 = local_strong_game1 +1
      strong_attack_icon1.innerText=local_strong_game1
       strong_attack_count_global = strong_attack_count_global +1
      submit_game1.classList.add('hidden')

    } else {
      input_number.style.background = "red";
      true_or_false_answer_text.innerText = "اشتباه حدس زدید";
      if (Math.abs(input_number_value - selected_number) > 4) {
        guide_text.innerText = "با عدد درست بیشتر از 4 تا فاصله دارید";
      } else if (input_number_value - selected_number < 3) {
        guide_text.innerText = "با عدد درست کمتر از 3 تا فاصله دارید";
      }

      if (turn === 3) {
        answer_text.innerText = ` ${selected_number} :عدد صحیح`;
        submit_game1.classList.add('hidden')
      }
      health_text.innerText = 3 - turn;

      turn = turn + 1;
    }
  }
}


