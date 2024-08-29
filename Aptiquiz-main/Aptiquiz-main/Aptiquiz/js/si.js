// Questions that will be asked
const Questions = [{
	q: "A sum fetched a total simple interest of Rs. 4016.25 at the rate of 9 p.c.p.a. in 5 years. What is the sum?",
	a: [{ text: "Rs. 4462.5", isCorrect: false },
	{ text: "Rs. 8900", isCorrect: false },
	{ text: "Rs. 8925", isCorrect: true },
	{ text: "Rs. 8032.50", isCorrect: false }
	]

},
{
	q: "Reena took a loan of Rs. 1200 with simple interest for as many years as the rate of interest. If she paid Rs. 432 as interest at the end of the loan period, what was the rate of interest?",
	a: [{ text: "3.6", isCorrect: false, isSelected: false },
	{ text: "Cannot be determined", isCorrect: false },
	{ text: "18", isCorrect: false },
	{ text: "6", isCorrect: true }
	]

},
{
	q: " A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is",
	a: [{ text: "Rs. 650", isCorrect: false },
	{ text: "Rs. 690", isCorrect: false },
	{ text: "Rs. 698", isCorrect: true },
	{ text: "Rs.700", isCorrect: false }
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

	if (Questions[currQuestion].a[selectedAns].isCorrect) 
	{
		score++;
		console.log("Correct")
		nextQuestion();
	} 
	else {
		nextQuestion();
	}
}
function exit(){
	window.location.href="../home.html"
 }