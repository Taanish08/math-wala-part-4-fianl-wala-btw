function opendiv() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    real_wala_answer=parseInt(number1) * parseInt(number2);

    player1name= localStorage.getItem("Player 1 name");
    player2name= localStorage.getItem("Player 2 name");
    
    
    
    player1score=0;
    player2score=0;

    document.getElementById("p1score").innerHTML=player1score;
    document.getElementById("p2score").innerHTML=player2score;

    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='answerbox'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output2").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";

    question_turn= "player1";
    answer_turn= "player2";

   
}

function check() {

    get_answer = document.getElementById("answerbox").value;

    if(get_answer == real_wala_answer) {
        if(answer_turn=="player1") {
            player1score = player1score +1;
            document.getElementById("p1score").innerHTML=player1score;
        }
        else {
            player2score = player2score +1;
            document.getElementById("p2score").innerHTML=player2score;
        }
    }

if(question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("playerquestion").innerHTML="Question turn - " + player2name;;
}
else {
    question_turn = "player1";
    document.getElementById("playerquestion").innerHTML="Question turn - " + player1name;
}
if(answer_turn == "player1") {
    question_turn = "player2";
    document.getElementById("playerquestion").innerHTML="Question turn - " + player2name;
    
}
else {
    question_turn = "player1";
    document.getElementById("playerquestion").innerHTML="Question turn - " + player1name;
}
}