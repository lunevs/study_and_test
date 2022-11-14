let res = [0,0,0,0,0];

for (let j=0; j<10; j++) {
    //let i = Math.floor(Math.random() * 10);
    //res[i] += 1;
}

console.log(res);

function bmiCalculator (weight, height) {
    let bmi = weight / (height * height);
    let interpretation = '';
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(70, 1.74));


function whosPaying(names) {

    /******Don't change the code above*******/

        //Write your code here.
    let idx = Math.floor(Math.random() * names.length);
    return idx;

    /******Don't change the code below*******/
}

let arr = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
for (let j=0; j<100; j++) {
    res[whosPaying(arr)] += 1;
}
console.log(res);


function HouseKeeper (yearsOfExp, name, cleanLike) {
    this.yearsOfExp = yearsOfExp;
    this.name = name;
    this.cleanLike = cleanLike;
}

let hk1 = new HouseKeeper(21, "Angela", ["room", "baths"]);
let hk2 = new HouseKeeper(12, "Timmy", ["baths"]);
console.log(hk1);
console.log(hk2);
