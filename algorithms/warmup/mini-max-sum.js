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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    n = arr.length;
    values = new Array(n)
    for(var i=0; i<n; i++){
        var sum=0
        for(var j=0; j<n; j++){
            if(j!=i){
                sum += arr[j]
            }
        }
        values[i] = sum
    }
    console.log(Math.min(...values) + " " + Math.max(...values))  
}
