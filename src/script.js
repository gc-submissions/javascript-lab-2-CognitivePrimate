"use strict";

// TODO - write your code here.

const randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return randNum == 0 ? opt1 : opt2;
    
}

function attackPlayer(health){
    return health - randomDamage();
}

const logHealth = (player, health) => console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = health => health <= 0;

function fight(player1, player2, player1Health, player2Health){
    while (true){
        let attacker = chooseOption(player1, player2);
        if (attacker == player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health) == true){
                logDeath(player1, player2);
                break;   
            } 
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) == true){
                logDeath(player2, player1);
                break;
            }
            
        }

    }

}
// fight("Coronavirus", "Humanity", 100, 100);

// Extended challenges
// so square
function square(width){
    for (let i=0; i < width; i ++){
        console.log("#".repeat(width));
    }
}

// square(6)

// this one makes a triangle.
function triangle(width){
    for (let i=width; i <= width; i --){
        console.log("#".repeat(i));
        if (i == 0){
            break;
        }
        
    }
}
// triangle(4)


// this here also be trianglin'
function triangle(width){
    for (let i= 1; i <= width; i ++){
        console.log("#".repeat(i));
        if (i >= width){
            break;
        }
        
    }
}

// triangle(4)

// git gud: grades edition
function getGrade(num){
    return num < 60 ? "F" : num < 70 ? "D" : num < 80 ? "C" : num < 90 ? "B" : num <= 100 ? "A" : "In the immortal words of Taylor Swift, 'You need to calm down.'"
}

// console.log(getGrade(95))


