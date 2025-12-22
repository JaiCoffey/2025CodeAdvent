const fs = require('fs');
//imports problem data  from Text file
const data= fs.readFileSync('Day1.txt', 'utf8');
const lines = data.split(/\r?\n/); //splits data based on line breaks

for (let line of lines){
    //itterates over lines in text file


    // Need to add: split the lines into their compontents and calculate
    // R= +
    // L = -
    // Start at zero and count how many times based o nthe input we arrive back at 0
    
}