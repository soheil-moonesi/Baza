'use strict'
const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const strong_attack_icon_game4 = document.getElementById('strong-attack-icon-game4');
const heal_btn = document.getElementById('heal-btn');


const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE=14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE= 20
let mode;
let state;
let battleLog = []
console.log(strong_attack_count_global)
const enteredValue=100

let chosenMaxLife =parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <=0 ){
    chosenMaxLife=100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);



function adjustHealthBars(maxLife) {
    monsterHealthBar.max = maxLife;
    monsterHealthBar.value = maxLife;
    playerHealthBar.max = maxLife;
    playerHealthBar.value = maxLife;
}

attackBtn.addEventListener('click',attackMode);
strongAttackBtn.addEventListener('click',strongAttackMode);
healBtn.addEventListener('click',healMode);


function attackMode(){
    // if (currentPlayerHealth > 0 && currentMonsterHealth > 0 ) {
    mode=ATTACK_VALUE;
    attackHandler(mode,'ATTACK');
}
//}

function strongAttackMode (){

        strong_attack_count_global= strong_attack_count_global-1

    //if (currentPlayerHealth > 0 && currentMonsterHealth > 0 ) {
    mode= STRONG_ATTACK_VALUE;
    attackHandler(mode,'ATTACK');


}
//}

let hasBounesLife = true;
function healMode(){
    if (hasBounesLife == true) {
        mode=HEAL_VALUE

        attackHandler(mode,'HEAL');
    }
}

function removeBonusLife() {
    bonusLifeEl.parentNode.removeChild(bonusLifeEl);
    heal_btn.classList.add('hidden')
}

function increasePlayerHealth(healValue) {
    playerHealthBar.value = +playerHealthBar.value + healValue;
}

function attackHandler(mode,state){
    if (state=='ATTACK'){
        if (strong_attack_count_global>0 ){
            strongAttackBtn.classList.remove("hidden");
            strong_attack_icon_game4.innerText=strong_attack_count_global
        }else{ strongAttackBtn.classList.add("hidden");
        }
        const damage = dealMonsterDamage(mode);
        currentMonsterHealth -= damage;
        const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE) //// inja deghat konid-> inja vaghti ke function dealPlayerDamage seda zade mishe va meghdare 14 ham behesh dade mishe bad mibare ino to app.js onja zarb dar addade random mikone va bad az bar kam mikone // badesh meghdaresho return mikone be function va injori meghdari ke return shode ro mirizim toye playerDamage va bad az currentPlayerHealth kamesh mikonim
        currentPlayerHealth -= playerDamage;

        writeToLog(damage,state,currentPlayerHealth,currentMonsterHealth)
    }

    if (state=='HEAL' && currentPlayerHealth >0 && currentMonsterHealth >0 && hasBounesLife ){

        if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
            alert('بیشتر از مقدار خون اولیه تعیین شده نمیتونید استفاده کنید')
            mode= chosenMaxLife -currentPlayerHealth

            increasePlayerHealth(mode)
            currentPlayerHealth += mode
            hasBounesLife = false
            playerHealthBar.setAttribute('style', `width: ${ currentPlayerHealth}%`);

            removeBonusLife()
            writeToLog(mode,state,currentPlayerHealth,currentMonsterHealth)

        } else{

            increasePlayerHealth(mode)
            currentPlayerHealth += HEAL_VALUE
            hasBounesLife = false
            removeBonusLife()
            playerHealthBar.setAttribute('style', `width: ${ currentPlayerHealth}%`);
            // return hasBounesLife
            writeToLog(mode,state,currentPlayerHealth,currentMonsterHealth)

        }
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth>0) {
        alert('آفرین، شما غول رو شکست دادید');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth >0 ){
        alert('متاسفانه شما از غول شکست خوردید');
    } else if (currentPlayerHealth <=0 && currentMonsterHealth<=0){
        alert('انقدر نبرد سختی بود که مساوری شد')
    }

    if (currentMonsterHealth <=0 || currentPlayerHealth <=0 ){
        reset()
    }
    console.log(hasBounesLife)
}



function dealMonsterDamage(damage) {
    const dealtDamage = Math.random() * damage;
    monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
    monsterHealthBar.setAttribute('style', `width: ${monsterHealthBar.value}%`);

    return dealtDamage;
}

function dealPlayerDamage(damage) {
    const dealtDamage = Math.random() * damage;
    playerHealthBar.value = +playerHealthBar.value - dealtDamage;
    playerHealthBar.setAttribute('style', `width: ${playerHealthBar.value}%`);

    return dealtDamage;
}

function resetGame(value) {
    playerHealthBar.value = value;
    playerHealthBar.setAttribute('style', `width: ${ playerHealthBar.value}%`);

    monsterHealthBar.value = value;
    monsterHealthBar.setAttribute('style', `width: ${monsterHealthBar.value}%`);

}

function reset(){
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth= chosenMaxLife;
    resetGame(chosenMaxLife);
}

/* Creating an object with the properties of power, attackState, playerHealth, and monsterHealth. */
function writeToLog (mode,state,currentPlayerHealth,currentMonsterHealth){
    let logEntries ={
        power : mode,
        attackState: state,
        playerHealth: currentPlayerHealth,
        monsterHealth:currentMonsterHealth
    }
    console.log(logEntries);
}

if (strong_attack_count_global>0 ){
    strongAttackBtn.classList.remove("hidden");
}else{ strongAttackBtn.classList.add("hidden");
}


