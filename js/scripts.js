var player=function(name,score){
  this.name=name;
  this.score=0;
}
var diceRoller=function(){
  size=6;
  // return="";
  for(var i=1;i<=size;i++){
  return (Math.floor(Math.random()*7));
  }
}
diceRoller();
$(document).ready(function(){
   $("form#form").submit(function(event){
     event.preventDefault();
     var name=$("input#player1").val();
     $("#titles").append(name);
     $("form#form").hide();
   });
   $("form#form2").submit(function(event){
     event.preventDefault();
     var name=$("input#player2").val();
     $("#title").append(name);
     $("form#form2").hide();
});
   $("#roll").submit(function(){
    
    console.log(diceRoller());

   });

});
