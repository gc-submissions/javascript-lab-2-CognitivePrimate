"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    randNum = 0 ? opt1 : opt2;
}

function attackPlayer(health){
    return health - randomDamage();
}

const logHealth = (player, health) => console.log(`player health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = health => health <= 0;

function fight(player1, player2, player1Health, player2Health){
    while (true){
        let attacker = chooseOption(playerOne, playerTwo);
        if (attacker == player1 ){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health);
            if (){}       
        }

    }

}
