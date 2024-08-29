// Questions that will be asked
const Questions = [{
	q: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
	a: [{ text: "Rs. 500", isCorrect: false },
	{ text: "Rs. 1500", isCorrect: false },
	{ text: "Rs. 2000", isCorrect: true },
	{ text: "none of these", isCorrect: false }
	]

},
{
	q: "In a mixture 60 litres, the ratio of milk and water 2 : 1. If this ratio is to be 1 : 2, then the quantity of water to be further added is",
	a: [{ text: "20 litres", isCorrect: false, isSelected: false },
	{ text: "40 litres", isCorrect: false },
	{ text: "50 litres", isCorrect: false },
	{ text: "60 litres", isCorrect: true }
	]

},
{
	q: "Salaries of Ravi and Sumit are in the ratio 2 : 3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40 : 57. What is Sumit's salary?",
	a: [{ text: "Rs. 17,000", isCorrect: false },
	{ text: "Rs. 20,000", isCorrect: false },
	{ text: "Rs. 38,000", isCorrect: true },
	{ text: " Rs. 25,500", isCorrect: false }
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