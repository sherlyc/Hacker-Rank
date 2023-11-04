'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    // Write your code here
    let birdSighting: {[key:number]:number} = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }
    let maxKey: number | undefined;
    let maxValue = -Infinity;
    
    for (let i=0; i<arr.length;i++){
        let bird = arr[i];
        birdSighting[bird] = birdSighting[bird] + 1   
    }
    
    for (const key in birdSighting) {
        if (birdSighting[key] > maxValue) {
            maxKey = Number(key);
            maxValue = birdSighting[key];
        }
    }
    return maxKey;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arrCount: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
