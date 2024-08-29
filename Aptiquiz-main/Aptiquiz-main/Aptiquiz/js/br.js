// Questions that will be asked
const Questions = [{
	q: "   If A + B means A is the mother of B; A - B means A is the brother B; A % B means A is the father of B and A x B means A is the sister of B, which of the following shows that P is the maternal uncle of Q?",
	a: [{ text: "Q - N + M x P", isCorrect: false },
	{ text: " P + S x N - Q", isCorrect: false },
	{ text: " P - M + N x Q", isCorrect: true },
	{ text: "Q - S % P", isCorrect: false }
	]

},
{
	q: "If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
	a: [{ text: "Brother", isCorrect: false, isSelected: false },
	{ text: "Sister", isCorrect: false },
	{ text: "Nephew", isCorrect: false },
	{ text: "Cannot be determined", isCorrect: true }
	]

},
{
	q: "Introducing a boy, a girl said, He is the son of the daughter of the father of my uncle. How is the boy related to the girl?",
	a: [{ text: "Uncle", isCorrect: false },
	{ text: "Son-in-law", isCorrect: false },
	{ text: "Brother", isCorrect: true },
	{ text: "Nephew", isCorrect: false }
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
   window.location.href="./home.html"
}
