const fs = require('fs');
//imports problem data  from Text file
const data= fs.readFileSync('Day1.txt', 'utf8');
const lines = data.split(/\r?\n/); //splits data based on line breaks
let count =50;
let answer = Number(0);

for (let line of lines){
    
    //itterates over lines in text file
    
    // Need to add: split the lines into their compontents and calculate
    // R= +
    // L = -
    // Start at 50 and count how many times based o nthe input we arrive back at 0
    // after misunderstanding the issue, i now see i need to wrap the count to stay inbetween 0 and 100
    // i was able to cheese this by moduloing the answer by 100 but im not sure this will scale to the full data set 
    //will implement the wrapping logic when i rebuild this in python
    
     console.log(line);
    console.log(parseLine(line));
    

}
function parseLine(line){
    let operator=line.charAt(0);
    let amount= Number(line.substring(1));
    if(operator=='R'){
        count = count-amount;
    }
    if(operator == 'L'){
        count=count+amount;
    }

    if((count % 100)==0){
        answer++
    }
    return answer
    
}