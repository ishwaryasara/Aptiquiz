// Questions that will be asked
const Questions = [{
	q: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.",
	a: [{ text: "3",isCorrect: false },
	{ text: "5", isCorrect: false },
	{ text: "4", isCorrect: true },
	{ text: "7", isCorrect: false }
	]

},
{
	q: "Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is",
	a: [{ text: "9", isCorrect: false, isSelected: false },
	{ text: "7", isCorrect: false },
	{ text: "6", isCorrect: false },
	{ text: "4", isCorrect: true }
	]

},
{
	q: "The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:",
	a: [{ text: "3400", isCorrect: false },
	{ text: "4500", isCorrect: false },
	{ text: "9600", isCorrect: true },
	{ text: "8700", isCorrect: false }
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