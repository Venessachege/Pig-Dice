var answer
var player = function(name, score) {
  this.name = name;
  this.score = 0;
}
var diceRoller = function() {
  size = 6;
  // return="";
  for (var i = 1; i <= size; i++) {
    return (Math.floor(Math.random() * 6) + 1);
  }
}
var score = 0;

function scoreKeeper(user1, user2) {
  var rolled = diceRoller();
  if (rolled !== 1) {
    score += rolled;
  } else if (rolled === 1) {
    score = 0;
    document.getElementById('p1').style.visibility="hidden";
    document.getElementById('p2').style.visibility="visible";
  }
}
function hold(){

  document.getElementById('p2').style.visibility="visible";
  document.getElementById('p1').style.visibility="hidden";

}

function hold1(){
  document.getElementById('p1').style.visibility="visible";
  document.getElementById('p2').style.visibility="hidden";
}
$(document).ready(function() {
  document.getElementById('p2').style.visibility = "hidden";
  $("form#form").submit(function(event) {
    event.preventDefault();
    var name = $("input#player1").val();
    $("#titles").append(name);
    $("form#form").hide();
  });
  $("form#form2").submit(function(event) {
    event.preventDefault();
    var name = $("input#player2").val();
    $("#title").append(name);
    $("form#form2").hide();
  });
  $('button#roll').click(function() {
    scoreKeeper(player1, player2);
    answer = $(".answer1").text(score);

  });

  $('button#roll2').click(function() {
    scoreKeeper(player1, player2);
    answer = $(".answer2").text(score);

  });
});
