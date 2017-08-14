
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

function kangaroo(x1, v1, x2, v2) {
  // Complete this function
  let k1 = x1;
  let k2 = x2;
  
  if (x1 > x2) {
    //swap to make sure k1 is always behind k2
    let k1 = x2;
    let k2 = x1;
    let v1 = v2;
    let v2 = v1;
  }

  if (k1 == k2 && v1 == v2) {
    return "YES";
  } else if (k1 < k2 && v1 > v2) {
    return validate(k1, k2, v1, v2);
  } else {
    return "NO";
  }
}

function validate(x1, x2, v1, v2) {
  let k1 = x1;
  let k2 = x2;

  if (k1 > k2) {
    return "NO";
  } else if (k1 == k2) {
    return "YES";
  } else {
    k1 += v1;
    k2 += v2;
    return validate(k1, k2, v1, v2);
  }
}


function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    var result = kangaroo(x1, v1, x2, v2);
    process.stdout.write("" + result + "\n");

}
