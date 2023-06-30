function add() {
    let opt1 = document.getElementById("opt1").value;
    let opt2 = document.getElementById("opt2").value;
    let answer = document.getElementById("answer");
    opt1 = Number(opt1);
    opt2 = Number(opt2);
    answer.innerHTML = opt1 + opt2;
    console.log(opt1, opt2, answer);
}

function clearAnswer() {

    let opt1 = document.getElementById("opt1").value;
    let opt2 = document.getElementById("opt2").value;
    console.log(opt1, opt2);
    if (!opt1 || !opt2) {
        let answer = document.getElementById("answer");
        answer.innerHTML = '';
    }





}





function minus() {
    let opt3 = document.getElementById("opt3").value;
    let opt4 = document.getElementById("opt4").value;
    let answer = document.getElementById("answer2");
    opt3 = Number(opt3);
    opt4 = Number(opt4);
    answer.innerHTML = opt3 - opt4;
}

function multiply() {
    let opt5 = document.getElementById("opt5").value;
    let opt6 = document.getElementById("opt6").value;
    let answer = document.getElementById("answer3");
    opt5 = Number(opt5);
    opt6 = Number(opt6);
    answer.innerHTML = opt5 * opt6;
}

