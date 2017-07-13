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

function main() {
    var n = parseInt(readLine());
    for(var i=1; i<=n; i++) {
        printSpace(n-i)
        printHash(i)
        process.stdout.write("\n");
    }    
}

function printHash (counter) {
   var hash = new Array(counter).fill("#");
    process.stdout.write(hash.join(""));
   
}

function printSpace (counter) {
  var space = new Array(counter).fill(" ");
  process.stdout.write(space.join(""));  
}
