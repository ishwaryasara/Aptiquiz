// Questions that will be asked
const Questions = [{
	q: "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",
	a: [{ text: "23/45",isCorrect: false },
	{ text: "11/56", isCorrect: false },
	{ text: "10/21", isCorrect: true },
	{ text: "34/98", isCorrect: false }
	]

},
{
	q: "Three unbiased coins are tossed. What is the probability of getting at most two heads?",
	a: [{ text: "6/7", isCorrect: false, isSelected: false },
	{ text: "3/5", isCorrect: false },
	{ text: "8/5", isCorrect: false },
	{ text: "7/8", isCorrect: true }
	]

},
{
	q: "Two dice are tossed. The probability that the total score is a prime number is ",
	a: [{ text: "35/34", isCorrect: false },
	{ text: "34/21", isCorrect: false },
	{ text: "5/12", isCorrect: true },
	{ text: "8/15", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
function exit(){
	window.location.href="../home.html"
 }