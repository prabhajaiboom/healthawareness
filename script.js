/* ============ 1. WATER TRACKER ============ */

let count = 0;

function addGlass(){
    if(count < 8){
        count = count + 1;
    }

    document.getElementById('glasses').innerHTML = count + " / 8";

    if(count == 0){
        document.getElementById('waterMessage').innerHTML =
        "Let's start. Go drink your first glass!";
    }
    else if(count < 4){
        document.getElementById('waterMessage').innerHTML =
        "Good start. Keep the bottle near you.";
    }
    else if(count < 8){
        document.getElementById('waterMessage').innerHTML =
        "Halfway there. Your body is thanking you!";
    }
    else{
        document.getElementById('waterMessage').innerHTML =
        "Target complete! 8 glasses done today. 💧";
    }
}

function resetWater(){
    count = 0;
    document.getElementById('glasses').innerHTML = "0 / 8";
    document.getElementById('waterMessage').innerHTML =
    "Let's start. Go drink your first glass!";
}


/* ============ 2. BMI CHECKER ============ */

function checkBMI(){

    let height = Number(document.getElementById('height').value);
    let weight = Number(document.getElementById('weight').value);

    if(height == 0 || weight == 0){
        document.getElementById('bmiResult').innerHTML =
        "Please enter both your height and weight.";
        return;
    }

    // BMI formula = weight in kg divided by height in metres, squared
    let metres = height / 100;
    let bmi = weight / (metres * metres);

    // toFixed(1) keeps only one number after the decimal point
    bmi = bmi.toFixed(1);

    if(bmi < 18.5){
        document.getElementById('bmiResult').innerHTML =
        "Your BMI is " + bmi + " - Underweight. Eat more protein and whole grains.";
    }
    else if(bmi < 25){
        document.getElementById('bmiResult').innerHTML =
        "Your BMI is " + bmi + " - Normal. Well done, keep up your habits!";
    }
    else if(bmi < 30){
        document.getElementById('bmiResult').innerHTML =
        "Your BMI is " + bmi + " - Overweight. Add 30 minutes of walking a day.";
    }
    else{
        document.getElementById('bmiResult').innerHTML =
        "Your BMI is " + bmi + " - Obese. Please speak to a doctor about a diet plan.";
    }
}


/* ============ 3. RANDOM HEALTH TIP ============ */

// an array is just a list of values kept in one variable
let tips = [
    "Take the stairs instead of the lift today.",
    "Drink a glass of water right now before you forget.",
    "Eat one fruit instead of one packet of chips.",
    "Stand up and stretch after every 45 minutes of studying.",
    "Put your phone away 30 minutes before you sleep.",
    "Walk for 10 minutes after dinner to help digestion.",
    "Add one extra vegetable to your plate tonight.",
    "Sleep and wake at the same time, even on Sunday."
];

function showTip(){
    // Math.random() gives a number from 0 up to 1, so this picks a random position in the list
    let n = Math.floor(Math.random() * tips.length);
    document.getElementById('tip').innerHTML = tips[n];
}


/* ============ 4. CONTACT FORM ============ */

function sendMessage(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let topic = document.getElementById('topic').value;

    if(name == "" || email == ""){
        document.getElementById('formResult').innerHTML =
        "Please fill in your name and email ID.";
    }
    else{
        document.getElementById('formResult').innerHTML =
        "Thank you " + name + "! We received your message about " + topic +
        " and will reply to " + email + " soon.";
    }
}

function clearMessage(){
    document.getElementById('formResult').innerHTML = "";
}
