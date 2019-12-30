function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}




function main() {
    // set variables to keep track of values
    var bet = parseInt(document.getElementById("bet_input").value);
    var startbet = bet;
    var roll_count = 1;
    var highest_amount = bet;
    var rollcount_highest = 1;

    //validation
    if( bet === "" || !(Number.isInteger(bet))) {
        alert("Please enter a number to play.")
        return;
    }

    //run game 
    while (bet > 0) {
        var dice1 = rollDice()
        var dice2 = rollDice()

        var result = dice1 + dice2
        
        if(result === 7) {
            bet = bet + 4
        } else {
            bet = bet - 1
        }

        if(bet > highest_amount) {
            highest_amount = bet
            rollcount_highest = roll_count
        }
        roll_count = roll_count + 1
    };

    // print items to the results
    document.getElementById("startbet").innerHTML = startbet;
    document.getElementById("rolls").innerHTML = roll_count;
    document.getElementById("highest").innerHTML = highest_amount;
    document.getElementById("high_count").innerHTML = rollcount_highest;
    alert("Check out your results and then play again!")
}