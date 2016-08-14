var user = {};
var responses = [];

function question1() {
    var name = prompt('What is your name?');
    if (name === null) return;
    if (!name) return question1();
    user.name = name;
}
question1(); // don’t forget to call the function!

function question2() {
    var firstQuestion = prompt('Does null === 0 ? (Yes or No)');
    if (firstQuestion === null) return;
    if (!firstQuestion) return question2();

    // why do you need to convert the answer to lowercase?
    if (firstQuestion.toLowerCase() === 'yes') {
        firstQuestion = false;
    } else if (firstQuestion.toLowerCase() === 'no') {
        firstQuestion = true;
    } else {
        // what if the user writes something other than yes or no?
        // they will have to answer the question again
        alert("Please answer either Yes or No");
        return question2();
    }
    responses.push(firstQuestion); // add the true or false value to the responses array
}
question2();

function question3() {
    var js = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
    if (js === null) return;
    if (!js) return question3();

    js = js.toLowerCase();

    switch (js) {
        case 'java':
        case 'javalive':
        case 'scriptyscript':
            js = false;
            break;
        case 'livescript':
            js = true;
            break;
        default:
            return question3();
    }
    responses.push(js);
}
question3();

function evaluate(responsesArray) {
    // declare two variables to store the totals
    // populate the “totals” variables from the “responsesArray”
    // save the “totals” variables inside the user object
    // call showResults
    var totalCorrect = totalIncorrect = 0;
    responsesArray.forEach(function(element, index, responsesArray) {
        if (element) {
            ++totalCorrect;
        } else {
            ++totalIncorrect;
        }
    });
    user.correct = totalCorrect;
    user.incorrect = totalIncorrect;
    showResults();
}

function showResults() {
    // display the user results
    console.log('Hi %s, correct answers: %i / incorrect answers: %i', user.name, user.correct, user.incorrect);
}

// call the function, passing it the responses array
evaluate(responses);