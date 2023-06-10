'use strict'

//  ------------------------  start js game 3 ------------------
const selected_number_box_game3 = document.querySelectorAll(".box-show-gal>div");
const input_box_game3 = document.getElementById("S-num-ga");
const health_number_text_game3 = document.getElementById("life-icon-ga");
const _show_box_game3 = document.getElementById("show-box-ga");
const new_turn_button_game3 = document.getElementById("adade-jadid-ga");
const submit_button_game3 = document.getElementById("sabt-btn-ga");
let strong_attack_icon3 = document.getElementById("strong-attack-game3");
let local_strong_game3=0
let health_ga_ico_ga = "";
let _sum_ga = 0;
let password_game3 = [];
function _run_num_gen_ga() {
  input_box_game3.style.backgroundColor = " gray";
  input_box_game3.value = "";

  let selected_number_game3 = [];
  selected_number_box_game3.forEach(function (val) {
   let random_number_game3 = random_number_generator_game3();
    val.innerHTML = random_number_game3;
    _sum_ga = random_number_game3 + _sum_ga;
    selected_number_game3.push(random_number_game3);
    password_game3 = selected_number_game3.join(""); //when i first create select_num_compare outside the function is not work?

  });
  new_turn_button_game3.classList.add("hidden");
  submit_button_game3.classList.remove("hidden");
  setTimeout(hide_game3, 500);
}
function random_number_generator_game3() {
  return Math.floor(Math.random() * 9);
}
function hide_game3() {
  _show_box_game3.classList.add("hidden");
  new_turn_button_game3.classList.add("hidden");
}
let health_game3 = 1;
function check_health_show_hide_number() {

  if (health_game3 < 4 && health_game3 >= 0) {
    if (_sum_ga === Number(input_box_game3.value)) {
      _show_box_game3.classList.remove("hidden");
      new_turn_button_game3.classList.remove("hidden");
      input_box_game3.style.backgroundColor = "green";
      password_game3 = [];
      submit_button_game3.classList.add("hidden");
      local_strong_game3 = local_strong_game3 +1
      strong_attack_icon3.innerText =local_strong_game3
      return strong_attack_count_global = strong_attack_count_global +1
    } else {
      password_game3 = [];
      input_box_game3.style.backgroundColor = "red";
      health_ga_ico_ga = 3 - health_game3;
      health_number_text_game3.innerHTML = health_ga_ico_ga;
      _show_box_game3.classList.remove("hidden");
      new_turn_button_game3.classList.remove("hidden");
      submit_button_game3.classList.add("hidden");
      health_game3 = health_game3 + 1;
    }
  }
  _sum_ga = 0;
}
//  ------------------------  end js game 3 ------------------
