var round = 1;
var cpu1Wins = 0;
var cpu2Wins = 0;

const startGame = () => {
    console.log(`Hello, welcome to the game of Rock Paper Scissors using JavaScript!`)
    console.log(`Rock beats scissors, scissors beats paper and paper beats rock.`)
    console.log(`The first player to reach a score of 3 wins.`)
    console.log(`Good luck!!!\n`)
};

const playRound = () => {
    var choices = ['Rock', 'Paper', 'Scissors'];
    cpu1Choice = Math.floor(Math.random() * 3) + 1;
    cpu2Choicce = Math.floor(Math.random() * 3) + 1;

    console.log(`CPU1 plays: ${choices[cpu1Choice-1]} and the CPU2 plays: ${choices[cpu2Choicce-1]}`)
    if (cpu1Choice === 1 && cpu2Choicce === 1 || cpu1Choice === 2 && cpu2Choicce === 2 || cpu1Choice === 3 && cpu2Choicce === 3) {
        console.log (`Round ${round} is a Draw! The scores are currently:\nCPU1:${cpu1Wins}\nCPU2:${cpu2Wins}\n`);
        round+=1;
    }
    
    if (cpu1Choice === 1 && cpu2Choicce === 3 || cpu1Choice === 2 && cpu2Choicce === 1 || cpu1Choice === 3 && cpu2Choicce === 2) {
        cpu1Wins+=1;
        console.log (`Round ${round} is won by CPU1! The scores are currently:\nCPU1:${cpu1Wins}\nCPU2:${cpu2Wins}\n`);
        round+=1;
    }
    
    if (cpu1Choice === 1 && cpu2Choicce === 2 || cpu1Choice === 2 && cpu2Choicce === 3 || cpu1Choice === 3 && cpu2Choicce === 1) {
        cpu2Wins+=1;
        console.log (`Round ${round} is won by CPU2! The scores are currently:\nCPU1:${cpu1Wins}\nCPU2:${cpu2Wins}\n`);
        round+=1;
    }
}

const displayWinner = () => {
    if (cpu1Wins === 3)
        console.log(`Congrats CPU1, you have Won! Better luck next time CPU2.`)
    else
        console.log(`Congrats CPU2, you have Won! Better luck next time CPU1.`)  
};

startGame();
while (cpu1Wins < 3 && cpu2Wins < 3) 
    playRound();

displayWinner();



