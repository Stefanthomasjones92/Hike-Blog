function checkAnswers() {
    const name = document.getElementById('user').value
  
    var score = 0;
    
    var quiz = document.forms.Quiz.elements;
    

    var answer1 = quiz.date.value;
    //check the answer to the first question

    if (answer1 == "1951") {
        //add 1 to the score if the user was correct
        score = score + 1;
    }

    var answer2 = quiz.Height.value;
    //check the answer to the first question

    if (answer2 =1000) {
        
        score = score + 1;
    }

    var answer3 = quiz.lakes.value;
 

    if (answer3 == "16") {
        //add 1 to the score if the user was correct
        score = score + 1;
    }
    var answer4 = quiz.Tresspass.value;
    if (answer4 == "1932") {
     
        score = score +1;
    }

   
    alert("Well done," + name + " your score was .... " + score)
}