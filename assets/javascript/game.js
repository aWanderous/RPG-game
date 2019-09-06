$(document).ready(function() {
  
  var myAttack = 0; //base attack points
  var chosen; // the selected weapon
  var bandit; // the selected bandit
  
  // the player will choose a weapon and will use this for the remainder of the game
  $(".warriors").hide(); 

  $("#sword, #bow, #spear, #daggers").on("click", function () {
    var button = $(this).attr('id');
    
    switch(button) {
      case "sword":
        chosen = sword;
        $("#bow, #spear, #daggers").hide();
        $(".warriors").show();
        $("#swordWarrior").hide();
        $("#bowWarrior, #spearWarrior, #daggersWarrior").show();
        $("#weapon").text("You chose the Sword, excellent choice!")
        break;
      case "bow":
        chosen = bow;
        $("#sword, #spear, #daggers").hide();
        $(".warriors").show();
        $("#bowWarrior").hide();
        $("#swordWarrior, #spearWarrior, #daggersWarrior").show();
        $("#weapon").text("You chose the Bow, good choice!")
        break;
      case "spear":
        chosen = spear;
        $("#sword, #bow, #daggers").hide();
        $(".warriors").show();
        $("#spearWarrior").hide();
        $("#swordWarrior, #bowWarrior, #daggersWarrior").show();
        $("#weapon").text("You chose the Spear, great choice!")
        break;
      case "daggers":
        chosen = daggers;
        $("#sword, #bow, #spear").hide();
        $(".warriors").show();
        $("#daggersWarrior").hide();
        $("#swordWarrior, #bowWarrior, #spearWarrior").show();
        $("#weapon").text("You chose the Daggers, nice choice!")
        break;
    }
    $("#swordWarrior, #bowWarrior, #spearWarrior, #daggersWarrior").on("click", function () {
      var button = $(this).attr('id');
      
      switch(button) {
        case "swordWarrior":
          chosen = sword;
          $(".warriors").hide();
          
          break;
        case "bow":
          chosen = bow;
          $("#sword, #spear, #daggers").hide();
          $(".warriors").show();
          $("#bowWarrior").hide();
          $("#swordWarrior, #spearWarrior, #daggersWarrior").show();
          $("#weapon").text("You chose the Bow, good choice!")
          break;
        case "spear":
          chosen = spear;
          $("#sword, #bow, #daggers").hide();
          $(".warriors").show();
          $("#spearWarrior").hide();
          $("#swordWarrior, #bowWarrior, #daggersWarrior").show();
          $("#weapon").text("You chose the Spear, great choice!")
          break;
        case "daggers":
          chosen = daggers;
          $("#sword, #bow, #spear").hide();
          $(".warriors").show();
          $("#daggersWarrior").hide();
          $("#swordWarrior, #bowWarrior, #spearWarrior").show();
          $("#weapon").text("You chose the Daggers, nice choice!")
          break;
      }
    });
  });
  // The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.
  // The player chooses an opponent by clicking on an enemy's picture.
  
  // Once the player selects an opponent, that enemy is moved to a defender area.
  
  // The player will now be able to click the attack button.
  
  // Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). 
  // These points are displayed at the bottom of the defender's picture.
  // The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. 
  // These points are shown at the bottom of the player character's picture.
  
  // The player will keep hitting the attack button in an effort to defeat their opponent.
  
  
  
  
  
  // When the defender's HP is reduced to zero or below, remove the enemy from the defender area. 
  
  // The player character can now choose a new opponent.
  
  
  // The player wins the game by defeating all enemy characters. 
  // The player loses the game the game if their character's HP falls to zero or below.

  
  // Health Points, Attack Power and Counter Attack Power.
  
  
  // Each time the player attacks, their character's Attack Power increases by its base Attack Power.
  
  
  // The enemy character only has Counter Attack Power.
  // Unlike the player's Attack Points, Counter Attack Power never changes.
});