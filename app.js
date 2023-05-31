// take 5 random Numebr from user
// play a game by using random number 
// print the result how many times u won & lost


let winCount = 0;
let lossCount = 0 ;

for(let i = 1; i <= 5 ; i++){
    let randomNumber = parseInt(prompt(`Enter a random number 1 to 5 :-`));

    let theNumber = Math.floor(Math.random()*5 ) + 1;

    if(randomNumber == theNumber){
        document.write(i +` You <strong> win </strong> , Your Random Number was `+randomNumber+ ` <br>`  );
        winCount++;
    }    
    
    else {
        document.write(i + ` You loss, ` +  `The Random Number was `+ theNumber + ` <br>`);
        lossCount++; 
    }
}
document.write(`<br> <br>  You win ` + winCount + `<br>`)
document.write(`  You loss ` + lossCount);
