{
    print = console.log;

let q = [
    [38,27, 9, 5,20,36,22,11],
    [38,21,18, 7,47,34,16,28],
    [37, 8,46,47,42,20,42,24],
    [27,32,11,48,42,49,10,43],
    [50,19,12,29,14,14,48,32],
    [40,42,48,44,15,15, 1,15],
    [13,31, 9,41,13,49, 1,34]
];

let answer = [];
let mode = 0;


while(q.length > 0) {
    takefirstline();
    takelast();
    takebottom();
    takefirst();
}

function takefirstline() {
    answer.push(q.shift());
}

function takefirst() {
    for(let i = q.length - 1; i >= 0; i--) {
        answer.push([q[i].shift()]);
    }
}

function takelast() {
    for(let i = 0; i < q.length; i++) {
        answer.push([q[i].pop()]);
    }
}

function takebottom() {
    if(q.length > 0) {
      q[q.length-1].reverse();
      answer.push(q.pop());
    }
}
answer = answer.flat();
newanswer = "";

answer.forEach((a,b,c) => {newanswer += a; newanswer += ", ";});
newanswer = newanswer.substring(0, newanswer.length - 2);
print("answer: "+ "[ " + newanswer + " ]");
}
// 0:0 0:1 0:2 0:3..... 0:7 1:7