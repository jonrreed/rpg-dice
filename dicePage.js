setup();

function setup() {
    var dieTypes = [2, 3, 4, 6, 8, 10, 12, 20, 30, 100];
    var end = dieTypes.length;
    var diceRow = 0;
    for (var i = 0; i < end; i++) {
        let sides = dieTypes[i];
        //setup Bootstrap container rows
        if (i % 3 === 0){
            diceRow++;
            var newContainer = $("<div></div>").addClass("container text-center");
            $(newContainer).attr("id", "diceRow" + diceRow);
            $(diceArea).append(newContainer);
        }
        //setup a Bootstrap column
        var newCol = $("<div></div>").addClass("col-sm-4");
        //setup button and function
        var newButton = $("<button></button>").text("d" + dieTypes[i]);
        newButton.click(function () { rollDx(sides); });
        //setup results field
        var newResult = $("<p></p>").text("--");
        newResult.attr("id", "d" + sides);
        //insert the new column into the current row
        $("#diceRow" + diceRow).append(newCol);
        //insert button and results field into new column
        $(newCol).append(newButton);
        $(newCol).append(newResult);
    }
}

function rollDx(sides) {
    var results = Dice.rollDice(sides);
    $("#d" + sides).text(results);
}