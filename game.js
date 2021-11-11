player1_name =  localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");

document.getElementById('pwayer_1WOO').innerHTML = player1_name;
document.getElementById('pwayer_2WOO').innerHTML = player2_name;

var player1_score = 0;
var player2_score = 0;

document.getElementById("scoreofplayer1").innerHTML = player1_score;
document.getElementById("scoreofplayer2").innerHTML = player2_score;

document.getElementById("QuesTurnROUND").innerHTML = "Question Turn -" + player1_name;
document.getElementById("AnesTurnROUND").innerHTML = "Answer Turn -" + player2_name;

function SUMBIGT(){
    get_word = document.getElementById("word").value;
    //--> converting word into lowercase = C & c are equal <--\\
    word = get_word.toLowerCase(); 
    console.log(word);
    //--> We are fetching the first character <--\\
    charAt1 = word.charAt(1);
    console.log(charAt1);
    //--> Finding out the length of the word and then dividing it by 2 <-\\
    length_divide_2 = Math.floor(word.length / 2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);
    //--> fetch the last letter from the word <--\\
    length_minusone = word.length - 1;
    charAt3 = word.charAt(length_minusone);
    console.log(charAt3);
    
    remove_charat1 = word.replace(charAt1, "_");
    remove_charat2 = remove_charat1.replace(charAt2, "_");
    remove_charat3 = remove_charat2.replace(charAt3, "_");
    console.log(remove_charat3);

    question_word = "<h4 id='word_display'> Q." + remove_charat3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'> ";
    check_button = "<br> <br> <button class='btn btn-info' onclick='Check()'> Check </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";    

}

QuesTurn = "Player1";

AnswTurn = "Player2";

function Check(){
    get_answer = document.getElementById('input_check_box').value;
    answer = get_answer.toLowerCase();
    console.log('users answer = ' +answer);
    
    //--> Codes for checking the answer :D <--\\

    if (word == answer){
      if (AnswTurn == "Player1"){
           player1_score = player1_score + 1;
           document.getElementById("scoreofplayer1").innerHTML = player1_score;
           
        }
        else{
            player2_score = player2_score + 1;
           document.getElementById("scoreofplayer2").innerHTML = player2_score; 
        }
    }
    if (QuesTurn == "Player1"){

        QuesTurn = "Player2";
        document.getElementById("QuesTurnROUND").innerHTML = "Question Turn = " + player2_name;
        
    }
    else{

        QuesTurn = "Player1";
        document.getElementById("QuesTurnROUND").innerHTML = "Question Turn = " + player1_name;
    }

    if (AnswTurn == "Player 1"){

        AnswTurn = "Player2";
        document.getElementById("AnesTurnROUND").innerHTML = "Answer Turn = " + player2_name;

    }
    else{
        
        AnswTurn = "Player1";
        document.getElementById("AnesTurnROUND").innerHTML = "Answer Turn = " + player1_name;

    }
    document.getElementById("output").innerHTML =   "";
}