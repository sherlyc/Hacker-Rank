process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function solve(grades){
    // Complete this function
    var newGrades = grades.map(function(el){
         var roundedGrade = round5(el)
         if ( el >=38) {
             if(roundedGrade-el < 3) {
                 return roundedGrade
             }
         }
         return el     
    })
   return newGrades
}

function round5(x)
{
    return Math.ceil(x/5)*5;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    var result = solve(grades);
    console.log(result.join("\n"));
 
}
