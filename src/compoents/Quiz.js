import React ,{useState} from 'react'
import './Quiz.css';


export default function Quiz(){
    <img src="./quiz.jpg"/>
    const questions =[
        {
            questionText :' React was originally created by .....',
            answerOptions:[
                { answerText: ' Rasmus Lerdorf', isCorrect: false },
				{ answerText: ' Miško Hevery', isCorrect: false },
				{ answerText: 'Jordan Walke', isCorrect: true },
				{ answerText: 'None of the above', isCorrect: false },
                
            ]
        },
        {
            questionText :'Everything in React is a_________',
            answerOptions:[
                { answerText: 'Module', isCorrect: false },
				{ answerText: 'Package', isCorrect: false },
				{ answerText: 'Component', isCorrect: true },
				{ answerText: 'Class', isCorrect: false },
                
            ]

        },
        {
            questionText :'Props are __________ into other components',
            answerOptions:[
                { answerText: 'Methods', isCorrect: true },
				{ answerText: 'Injected', isCorrect: false },
				{ answerText: 'Both 1 & 2 ', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: false },
                
            ]

        },
        {
            questionText :'React is used mainly for building ................',
            answerOptions:[
                { answerText: 'Database', isCorrect: false },
				{ answerText: 'User Interface', isCorrect: true },
				{ answerText: 'Connectivity ', isCorrect: false },
				{ answerText: 'Design platform', isCorrect: false },
                
            ]

        },
        {
            questionText :'What is the children prop?',

            answerOptions :[
                { answerText: 'A property that adds child values to state  ', isCorrect: false },
				{ answerText: 'A property that lets you set an object as a property', isCorrect: false },
				{ answerText: 'A property that lets you pass data to child components ', isCorrect: false },
				{ answerText: 'A property that lets you nest components in other components  ', isCorrect: true },
                
            ],
        },
        
    ];

    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [showScore,setShowScore]=useState(false);
    const[score,setScore]=useState(0);
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
