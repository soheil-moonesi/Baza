
_check = ["", "", "", "", "", "", "", "", ""];
DNA_x_win_rate = ["", "", "", "", "", "", "", ""];
all_win_O = ["", "", "", "", "", "", "", ""];
DNA_O_win_rate = ["", "", "", "", "", "", "", ""];
win_strategy_x = [];
game_end = 0;
let k = 0;
u = 0;

const winner_modal = document.getElementById("winner-modal")
const loose_modal = document.getElementById("loose-modal")
const draw_modal = document.getElementById("draw-modal")


let All_box = document.querySelectorAll(".box");
for (let i = 0; i < 9; i++) {
    All_box[i].addEventListener("click", () => {
        if (game_end == 0) {
            let temp = All_box[i].getAttribute("data-status");
            console.log(temp);
            if (temp == "off") {
                All_box[i].innerHTML = "X";
                All_box[i].setAttribute("data-status", "on");
                All_box[i].classList.add("-z-50");
                _check[i] = "X";
                start_o();
                i++;
            }
        }
    });
}

function start_o() {
    console.log(_check);

    all_win_X = [
        ["X", "X", "X", "4", "5", "6", "7", "8", "9"],
        ["1", "2", "3", "X", "X", "X", "7", "8", "9"],
        ["1", "2", "3", "4", "5", "6", "X", "X", "X"],
        ["1", "2", "X", "4", "X", "6", "X", "8", "9"],
        ["X", "2", "3", "4", "X", "6", "7", "8", "X"],
        ["1", "X", "3", "4", "X", "6", "7", "X", "9"],
        ["1", "2", "X", "4", "5", "X", "7", "8", "X"],
        ["X", "2", "3", "X", "5", "6", "X", "8", "9"],
    ];
    all_win_O = [
        ["O", "O", "O", "4", "5", "6", "7", "8", "9"],
        ["1", "2", "3", "O", "O", "O", "7", "8", "9"],
        ["1", "2", "3", "4", "5", "6", "O", "O", "O"],
        ["1", "2", "O", "4", "O", "6", "O", "8", "9"],
        ["O", "2", "3", "4", "O", "6", "7", "8", "O"],
        ["1", "O", "3", "4", "O", "6", "7", "O", "9"],
        ["1", "2", "O", "4", "5", "O", "7", "8", "O"],
        ["O", "2", "3", "O", "5", "6", "O", "8", "9"],
    ];

    for (let i = 0; i < 8; i++) {
        let n = 0;
        for (let j = 0; j < 9; j++) {
            if (_check[j] == all_win_X[i][j] && _check[j] == "X") {
                n = n + 1;
                DNA_x_win_rate[i] = n;
            }
        }
    }
    console.log(DNA_x_win_rate);

    for (let i = 0; i < 8; i++) {
        let n = 0;
        for (let j = 0; j < 9; j++) {
            if (_check[j] == all_win_O[i][j] && _check[j] == "O") {
                n = n + 1;
                DNA_O_win_rate[i] = n;
            }
        }
    }
    console.log(DNA_O_win_rate);
    strategy_select = 0;
    win_strategy_x = [];

    //   for (let i = 0; i < 8; i++) {
    //     if (DNA_x_win_rate[i] == 3 || DNA_O_win_rate[i] ==3) {
    //       game_end = 1;
    //       alert("");
    //     }
    //   }
    for (let i = 0; i < 8; i++) {
        if (DNA_O_win_rate[i] == 3 && game_end == 0) {
            game_end = 1;
            loose_modal.showModal()
        }
    }

    for (let i = 0; i < 8; i++) {
        if (DNA_x_win_rate[i] == 3 && game_end == 0) {
            game_end = 1;
            winner_modal.showModal()
        }
    }

    winner_modal.addEventListener('click',() =>{
        winner_modal.close()
    })
    loose_modal.addEventListener('click',() =>{
        loose_modal.close()
    })
    draw_modal.addEventListener('click',() =>{
        draw_modal.close()
    })
    // for (let i = 0; i < 8; i++) {
    //   let temp2 = All_box[i].getAttribute("data-status");
    //   let temp3 = All_box[i].getAttribute("data-count");

    //   if (temp2=='on' && temp3=='off' && game_end ==0){
    //     All_box[i].setAttribute("data-count", "on");

    //   k=k+1
    //   if(k==4){
    //     game_end =1
    //   alert('تساوی')
    // }
    //   }}

    // if (_check[0] && _check[1] && _check[2] && _check[3] && _check[4]_check[i]_check[i]_check[i]_check[i]

    // for (let i = 0; i < 9; i++) {
    //   if (_check[i] !== "") {
    //     k = k + 1;
    //     if (k == 9) {
    //       game_end = 1;
    //     }
    //   }
    // }

    for (let i = 0; i < 9; i++) {
        let temp3 = All_box[i].getAttribute("data-count");

        if (_check[i] !== "" && temp3 == "off") {
            k = k + 1;
            All_box[i].setAttribute("data-count", "on");

            if (k == 9 && game_end == 0) {
                draw_modal.showModal()
            }
        }
    }

    // if (game_end == 0) {
    for (let i = 0; i < 8; i++) {
        if (DNA_x_win_rate[i] >= 2 && DNA_O_win_rate[i] == "") {
            win_strategy_x.push(i);
            strategy_select = 1;
        }
    }
    if (strategy_select == 0) {
        for (let i = 0; i < 8; i++) {
            if (DNA_x_win_rate[i] >= 1 && DNA_O_win_rate[i] == "") {
                win_strategy_x.push(i);
                strategy_select = 1;
            }
        }
    }
    console.log(win_strategy_x);

    color_ok = 0;
    if (
        _check[0] == _check[1] &&
        _check[0] == _check[2] &&
        _check[0] != "" &&
        color_ok == 0
    ) {
        All_box[0].style.background = "greenyellow";
        All_box[1].style.background = "greenyellow";
        All_box[2].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[3] == _check[4] &&
        _check[3] == _check[5] &&
        _check[3] != "" &&
        color_ok == 0
    ) {
        All_box[3].style.background = "greenyellow";
        All_box[4].style.background = "greenyellow";
        All_box[5].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[6] == _check[7] &&
        _check[6] == _check[8] &&
        _check[6] != "" &&
        color_ok == 0
    ) {
        All_box[6].style.background = "greenyellow";
        All_box[7].style.background = "greenyellow";
        All_box[8].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[0] == _check[3] &&
        _check[0] == _check[6] &&
        _check[0] != "" &&
        color_ok == 0
    ) {
        All_box[0].style.background = "greenyellow";
        All_box[3].style.background = "greenyellow";
        All_box[6].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[1] == _check[4] &&
        _check[1] == _check[7] &&
        _check[1] != "" &&
        color_ok == 0
    ) {
        All_box[1].style.background = "greenyellow";
        All_box[4].style.background = "greenyellow";
        All_box[7].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[2] == _check[5] &&
        _check[2] == _check[8] &&
        _check[2] != "" &&
        color_ok == 0
    ) {
        All_box[2].style.background = "greenyellow";
        All_box[5].style.background = "greenyellow";
        All_box[8].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[0] == _check[4] &&
        _check[0] == _check[8] &&
        _check[0] != "" &&
        color_ok == 0
    ) {
        All_box[0].style.background = "greenyellow";
        All_box[4].style.background = "greenyellow";
        All_box[8].style.background = "greenyellow";
        color_ok = 1;
    }
    if (
        _check[2] == _check[4] &&
        _check[2] == _check[6] &&
        _check[2] != "" &&
        color_ok == 0
    ) {
        All_box[2].style.background = "greenyellow";
        All_box[4].style.background = "greenyellow";
        All_box[6].style.background = "greenyellow";
        color_ok = 1;
    }

    u = win_strategy_x[0];
    let rand_num
    if (win_strategy_x.length > 1) {
        rand_num=Math.floor( (Math.random() * win_strategy_x.length+0.7));
        win_strategy_x[0]=rand_num
    }
    console.log(rand_num)

    u = win_strategy_x[0];

    for (let j = 0; j < 9; j++) {
        if (all_win_X[u][j] == "X") {
            if (_check[j] == "") {
                if ("off" == All_box[j].getAttribute("data-status")) {
                    All_box[j].innerHTML = "O";
                    All_box[j].setAttribute("data-status", "on");
                    _check[j] = "O";
                    break;
                }
            }
        }
    }
    // }
}
