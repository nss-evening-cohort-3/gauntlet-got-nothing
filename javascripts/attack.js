"use strict";

//To-do: Make sure to list dependencies here 
let $ = require("jquery");
    // attack = require("./attack.js"),
    // classes = require("./classes.js"),
    // enemies = require("./enemies.js"),
    // player = require("./player.js"),
    // spells = require("./spells.js"),
    // weapons = require("./weapons.js");

//To-do: jQuery reference to attack button
var attackButton = $("#attackButton");

//Calculate how much damage each player's attack is
function calculateAttackDamage(player) {
    //Player's health, strength and intelligence are averaged.
    var playerCurrentStat = ((player.health + player.strength + player.intelligence)/3);
    //Player's minimum and maximum attack damage is calculated then it picks a random number between the 2 and returns it
    var maximumAttackDamage = player.weapon.damage;
    var minimumAttackDamage = (playerCurrentStat * maximumAttackDamage)/100;
    var attackDamage = 0;
    if (minimumAttackDamage >= maximumAttackDamage) {
        attackDamage = maximumAttackDamage;
    } else {
        attackDamage = getRandomInt(minimumAttackDamage, maximumAttackDamage);
    }
    return attackDamage;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function attackAction(attacker, opponent) {
    //Give attacker "readyToAttack" class and remove "standby" class
    
    //Combatant's attack score is caluclated
    var damageToOpponentHealth = calculateAttackDamage(attacker);
    //Opponent's health is reduced by attack score
    opponent.health = opponent.health - damageToOpponentHealth;
    //Give opponent "beingAttacked" class - for set period of time - then remove
    
    //Display attack score and opponents new health 
    
    //Remove attacker "readyToAttack" class and add "standby" class

}

//This is what happens if attack button is pressed
function attackSequence(human, monster) {
    //Hide attack button
    
    attackAction(human, monster);
    //set timeout
    
    attackAction(monster, human);
    //Show attack button
    
    //To-do: Update so that every third time, strength is decreased by certain amount

}

module.exports = {
  calculateAttackDamage,
  attackAction,
  attackSequence
};