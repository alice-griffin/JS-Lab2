const randomDamage = () => {
    return (Math.floor(Math.random() * 11));
}

const chooseOption = (opt1, opt2) => {
    const randNum = (Math.round(Math.random()));
    if (randNum === 0) { 
        return opt1;
    } else {
        return opt2;
    }
}

const attackPlayer = function(health) {
    return (number = (health - randomDamage));
}

const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
}

const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}

const isDead = (health) => {
    if (health <= 0) {
        return true; 
    } else {
        return false; 
    }
}

function fight(player1, player2, player1Health, player2Health) {
    while (true) {
    const attacker = (chooseOption(player1, player2));
    if (attacker === player1) {
        player2health = attackPlayer(player2Health);
        logHealth(player2, player2Health);
        isDead(player2Health);
        if (isDead(player2Health)) {
            logDeath(player1, player2);
            break; 
        }        
    } else {
        player1Heath = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        isDead(player1Health);
    } if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
    }
    }
}

fight("Light", "Dark", 100, 100);
