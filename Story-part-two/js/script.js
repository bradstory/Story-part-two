let rain = prompt("How many inches of rain?");
let inches = "*";
console.log("Rainfall:" + inches.repeat(rain));

let yield = 50;
if (rain < 10) {
    yield = yield*.8;
}
if (rain >= 20) {
    yield = yield*.9;
}

let didusefert = prompt("Did you use fertilizer?");

if (didusefert === "no") {
    console.log("The yield should be " + yield + " bushels per acre.");
}else if (didusefert === "yes") {
    var fertilizertype = prompt("Did you use \"premium\" or \"regular\" fertilizer?");
    if (fertilizertype === "premium") {
        yield = yield*1.15;
        console.log("The yield should be " + yield + " bushels per acre.");
    } else if (fertilizertype === "regular") {
        yield = yield*1.10;
        console.log("The yield should be " + yield + " bushels per acre.");
    } else {//(fertilizertype != "premium" || fertilizertype != "regular")
        console.log("Error with fertilizer type.");
    }
}else {
    console.log("Error with didusefert.");
}       
