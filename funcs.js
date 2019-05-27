function GoBack(){
    close();
    window.open("login.html");
}

function Joke(){
    username = localStorage.getItem('username');
    document.getElementById('joke').innerHTML = username;

    $.ajax({
        
        url: "http://api.icndb.com/jokes/random?firstName=Moti&lastName=Banana",
        type: "get",     

        success: function(data){
            $("#joke").text(data.value.joke);
        }, 
        error: function(err){
            console.log(err);
        }
    });
}

function login(input,check){
    close();
    var input = String(document.getElementById('input').value);
    localStorage.setItem('username', input);
    
    window.open("trivia.html");
}

function trivia1(QuestionNum){
    var currentQuestion;
    $(document).ready(function(){
        $.ajax({
            url: "https://opentdb.com/api.php?amount=3&category=11&difficulty=easy",
            type: "get",
            success: function(data){
                if(data.results.length === 0){
                    $("#question").text("no questions!!");
                } else{
                    currentQuestion = data.results[QuestionNum];
                    console.log(currentQuestion);
                    $("#question").append("<h1>" + 
                        currentQuestion.question + 
                        "</h1>");
                    $("#question").append("<div class='answer correct'>" + 
                        currentQuestion.correct_answer + 
                        "</div>");
                    $.each(currentQuestion.incorrect_answers,
                    function(index, value){
                        $("#question").append("<div class='answer'>" + 
                        value + 
                        "</div>");
                    });
                }
            },
            error:function(err){
                console.log(err);
            }
        });
        
        $(document).on('click', '.answer', function(){
            if($(this).hasClass('correct')){
                alert('Correct');
                QuestionNum = QuestionNum+1
                trivia2(QuestionNum)
            }
            else{
                alert('False');
            }
        });
    });
}

function trivia2(QuestionNum){
    var currentQuestion;
    $(document).ready(function(){
        $.ajax({
            url: "https://opentdb.com/api.php?amount=3&category=11&difficulty=easy",
            type: "get",
            success: function(data){
                if(data.results.length === 0){
                    $("#question").text("no questions!!");
                } else{
                    currentQuestion = data.results[QuestionNum];
                    console.log(currentQuestion);
                    $("#question").append("<h1>" + 
                        currentQuestion.question + 
                        "</h1>");
                    $("#question").append("<div class='answer correct'>" + 
                        currentQuestion.correct_answer + 
                        "</div>");
                    $.each(currentQuestion.incorrect_answers,
                    function(index, value){
                        $("#question").append("<div class='answer'>" + 
                        value + 
                        "</div>");
                    });
                }
            },
            error:function(err){
                console.log(err);
            }
        });
        
        $(document).on('click', '.answer', function(){
            if($(this).hasClass('correct')){
                alert('Correct');
                QuestionNum = QuestionNum+1
                trivia3(QuestionNum)
            }
            else{
                alert('False');
            }
        });
    });
}

function trivia3(QuestionNum){
    var currentQuestion;
    $(document).ready(function(){
        $.ajax({
            url: "https://opentdb.com/api.php?amount=3&category=11&difficulty=easy",
            type: "get",
            success: function(data){
                if(data.results.length === 0){
                    $("#question").text("no questions!!");
                } else{
                    currentQuestion = data.results[QuestionNum];
                    console.log(currentQuestion);
                    $("#question").append("<h1>" + 
                        currentQuestion.question + 
                        "</h1>");
                    $("#question").append("<div class='answer correct'>" + 
                        currentQuestion.correct_answer + 
                        "</div>");
                    $.each(currentQuestion.incorrect_answers,
                    function(index, value){
                        $("#question").append("<div class='answer'>" + 
                        value + 
                        "</div>");
                    });
                }
            },
            error:function(err){
                console.log(err);
            }
        });
        
        $(document).on('click', '.answer', function(){
            if($(this).hasClass('correct')){
                window.open("joke.html");
                close();

            }
            else{
                alert('False');
            }
        });
    });
}