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
function getTotalX(a, b) {
    // Complete this function    
     let genX = generateX(a, b)
     return checkMod(genX, a, b)
}

function generateX(a, b) {
    let x = {};
    sortedA = a.sort();
    sortedB = b.sort();
    
    for (let i=sortedA[0]; i<=sortedB[sortedB.length-1]; i++) {
        x[i] = 1;
    }
    
    return Object.keys(x);
}

function checkMod(x,a,b) {
    let marking = Array(x.length).fill(1);
    
    for(var i=0; i < x.length; i++) {
        for(var j=0; j < a.length; j++) {
           if(x[i] % a[j] !=0){
               marking[i]=0;
               break;
           }
        }
        
        for(var j=0; j < b.length; j++){
           if(b[j] % x[i] !=0) {
               marking[i]=0;
               break;
           }
        }
    }
    
    marking = marking.filter(el => el == 1)
    return marking.length
}


function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}
