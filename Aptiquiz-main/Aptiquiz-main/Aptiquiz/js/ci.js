// Questions that will be asked
const Questions = [{
	q: "There is 60% increase in an amount in 6 years at simple interest. What will be the compound interest of Rs. 12,000 after 3 years at the same rate?",
	a: [{ text: "Rs. 3972",isCorrect: false },
	{ text: "Rs. 3000", isCorrect: false },
	{ text: "Rs. 2345", isCorrect: true },
	{ text: "Rs. 4567", isCorrect: false }
	]

},
{
	q: "The compound interest on Rs. 30,000 at 7% per annum is Rs. 4347. The period (in years) is:",
	a: [{ text: "3", isCorrect: false, isSelected: false },
	{ text: "4", isCorrect: false },
	{ text: "7", isCorrect: false },
	{ text: "2", isCorrect: true }
	]

},
{
	q: "At what rate of compound interest per annum will a sum of Rs. 1200 become Rs. 1348.32 in 2 years? ",
	a: [{ text: "4%", isCorrect: false },
	{ text: "5%", isCorrect: false },
	{ text: "6%", isCorrect: true },
	{ text: "3%", isCorrect: false }
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