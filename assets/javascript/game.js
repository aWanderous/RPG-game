$(document).ready(function() {

  // target randomly generated
  var target = Math.floor(Math.random() * 120) + 19;
  $("#getNumber").html(target);

  // button clicked gives a random value for each button pressed
  var lego = Math.floor(Math.random() * 12) + 1;
  var plastic = Math.floor(Math.random() * 12) + 1;
  var stones = Math.floor(Math.random() * 12) + 1;
  var treasure = Math.floor(Math.random() * 12) + 1;
  var counter = 0;
  $("#score").html("Please help!!")
  $("#collected").html("Please hurry!!")
  $("#again").html("of my lord's crystals.")

  var wins = 0;
  var loses = 0;
  console.log(lego);
  console.log(plastic);
  console.log(stones);
  console.log(treasure);
  
  // when boxes are clicked add the value together
  $("#legoBox, #plasticBox, #stonesBox, #treasureBox").on("click", function () {
    var buttonId = $(this).attr('id');
    
    switch(buttonId) {
      case 0:
      counter = counter + lego;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    
      case 1:
      counter = counter + plastic;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
      case 2:
      counter = counter + stones;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
      case 3:
      counter = counter + treasure;
      console.log(counter);
      $("#collected").html("Great!! we have now collected " + counter + "!");
      
    } 
    // if the value added together == the same as target number user wins
    if (counter === target) {
      wins++
      reset ();
      $("#result").html("Well done!! You got the crystals back!")
    }
    // if the value does not add up to same target number then the user loses
    if (counter > target) {
      loses++
      reset ();
      $("#result").html("The bandits have chased you out!!");
    }
    
  });
  // reset values
  function reset() {
    target = Math.floor(Math.random() * 120) + 19;
    $("#getNumber").html(target);
   lego = Math.floor(Math.random() * 12) + 1;
   plastic = Math.floor(Math.random() * 12) + 1;
   stones = Math.floor(Math.random() * 12) + 1;
   treasure = Math.floor(Math.random() * 12) + 1;
   counter = 0;
   $("#again").html("of my lord's crystals again.")
   $("#score").html("We have collected back " + wins + " times, but the bandits have beaten us " + loses + " times.");
   $("#collected").html("If only someone will do something about these bandits.")
  }
  
  
  
  

});

