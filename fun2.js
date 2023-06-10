'use strict'
//  ----------------------- start game 2 js --------------------------
const selected_number_box = document.querySelectorAll(".box-show>div");
const input_box = document.getElementById("S-num");
const health_number_text = document.getElementById("life-icon");
const _show_box = document.getElementById("show-box");
const new_turn_button = document.getElementById("adade-jadid");
const submit_answer_button = document.getElementById("sabt-btn");
let strong_attack_icon2 = document.getElementById("strong-attack-game2");
let local_strong_game2=0
let health_ico = "";

let password = [];
function game() {
  input_box.style.backgroundColor = "gray";
  input_box.value = "";
  let selected_number = [];
  selected_number_box.forEach(function (val) {
    let random_number = random_number_generator();
    val.innerHTML = random_number;
    selected_number.push(random_number);
    password = selected_number.join("");

  });

  new_turn_button.classList.add("hidden");

  submit_answer_button.classList.remove("hidden");

  setTimeout(_hide, 500);
}
function random_number_generator() {
  return Math.floor(Math.random() * 9);
}

function _hide() {
  _show_box.classList.add("hidden");
  new_turn_button.classList.add("hidden");
}
let health = 1;

function game2start() {
  if (health < 4 && health >= 0) {
    if (password == input_box.value) {
      _show_box.classList.remove("hidden");
      new_turn_button.classList.remove("hidden");
      input_box.style.backgroundColor = "green";
      password = [];
      submit_answer_button.classList.add("hidden");
      local_strong_game2 = local_strong_game2 +1
      strong_attack_icon2.innerText =local_strong_game2
      strong_attack_count_global = strong_attack_count_global +1

    } else {
      password = [];
      input_box.style.backgroundColor = "red";
      health_ico = 3 - health;
      health_number_text.innerHTML = health_ico;

      _show_box.classList.remove("hidden");
      new_turn_button.classList.remove("hidden");
      submit_answer_button.classList.add("hidden");
      health = health + 1;
    }
  }
}
console.log(strong_attack_count_global)
