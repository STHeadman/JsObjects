// Objects Lesson

var Robot = {
    fuel: 100,
    weapon: "laser",
    speed: 10,
    strength: 5,
    armour: "light",

    AddFuel: function (tank){
        fuel += tank;
    },

    UpgradeArmour: function (change){
        amour = change;
    },

    ChangeWeapon: function (change){
        weapon = change;
    }
}

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Our Robot is now running at " + Robot.speed + " MPH");

Robot.UpgradeArmour(prompt("What should we upgrade the armour to? "));
