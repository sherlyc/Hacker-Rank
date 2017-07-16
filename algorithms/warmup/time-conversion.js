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

function timeConversion(s) {
    // Complete this function
    var hour = s.slice(0, 2)
    var minute = s.slice(3, 5)
    var seconds = s.slice(6, 8)
    var merediem = s.slice(-2)
    
    if (hour==12 && merediem=='AM'){
       formattedHour="00"
    } else if (merediem =='PM' && hour!=12){
        formattedHour=Number(hour)+12
    } else {
        formattedHour=hour
    }
    return formattedHour + ":" + minute + ":" + seconds
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");
}
