// Questions that will be asked
const Questions = [{
	q: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
	a: [{ text: "18",isCorrect: false },
	{ text: "14", isCorrect: false },
	{ text: "16", isCorrect: true },
	{ text: "45", isCorrect: false }
	]

},
{
	q: "If selling price is doubled, the profit triples. Find the profit percent.",
	a: [{ text: "340", isCorrect: false, isSelected: false },
	{ text: "300", isCorrect: false },
	{ text: "900", isCorrect: false },
	{ text: "100", isCorrect: true }
	]

},
{
	q: "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit? ",
	a: [{ text: "78%", isCorrect: false },
	{ text: "60%", isCorrect: false },
	{ text: "70%", isCorrect: true },
	{ text: "56%", isCorrect: false }
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