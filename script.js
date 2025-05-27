document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const questionsData = [
        {
            question: "請問「書包」在哪裡？",
            item: "書包",
            audioFile: "audio/question_shubao.mp3",
            correctImage: "images/backpack_captainamerica.png",
            distractors: ["images/shoes_spongebob.png", "images/diaper.png", "images/tshirt_astronaut.png", "images/bib.png"], // Provide enough distractors
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「尿布」在哪裡？",
            item: "尿布",
            audioFile: "audio/question_niaobu.mp3",
            correctImage: "images/diaper.png",
            distractors: ["images/backpack_captainamerica.png", "images/tshirt_astronaut.png", "images/toothbrush.png", "images/socks_bunny.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「牙刷」在哪裡？",
            item: "牙刷",
            audioFile: "audio/question_yashua.mp3",
            correctImage: "images/toothbrush.png",
            distractors: ["images/bib.png", "images/shorts.png", "images/socks_bunny.png", "images/cup_horse.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        // --- IMPORTANT: Populate ALL your questions here in the new format ---
        // Make sure each question has a 'correctImage' and a 'distractors' array
        // with AT LEAST 3 distractor image paths.
        // Add more questions here following the structure:
        {
            question: "請問「褲子」在哪裡？",
            item: "褲子",
            audioFile: "audio/question_kuzi.mp3",
            correctImage: "images/shorts.png",
            distractors: ["images/socks_bunny.png", "images/backpack_captainamerica.png", "images/tshirt_astronaut.png", "images/bib.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「襪子」在哪裡？",
            item: "襪子",
            audioFile: "audio/question_wazi.mp3",
            correctImage: "images/socks_bunny.png",
            distractors: ["images/toothbrush.png", "images/shoes_spongebob.png", "images/diaper.png", "images/lunch_bag.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「衣服」在哪裡？",
            item: "衣服",
            audioFile: "audio/question_yifu.mp3",
            correctImage: "images/tshirt_astronaut.png",
            distractors: ["images/backpack_captainamerica.png", "images/diaper.png", "images/bib.png", "images/shorts.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「圍兜」在哪裡？",
            item: "圍兜",
            audioFile: "audio/question_weidou.mp3",
            correctImage: "images/bib.png",
            distractors: ["images/shorts.png", "images/shoes_spongebob.png", "images/tshirt_astronaut.png", "images/cup_horse.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「鞋子」在哪裡？",
            item: "鞋子",
            audioFile: "audio/question_xiezi.mp3",
            correctImage: "images/shoes_spongebob.png",
            distractors: ["images/spoons.png", "images/backpack_captainamerica.png", "images/diaper.png", "images/tshirt_astronaut.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「杯子」在哪裡？",
            item: "杯子",
            audioFile: "audio/question_beizi.mp3",
            correctImage: "images/cup_horse.png",
            distractors: ["images/backpack_captainamerica.png", "images/toothbrush.png", "images/lunch_bag.png", "images/book_squirrel.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「餐袋」在哪裡？",
            item: "餐袋",
            audioFile: "audio/question_candai.mp3",
            correctImage: "images/lunch_bag.png",
            distractors: ["images/toothbrush.png", "images/backpack_captainamerica.png", "images/diaper.png", "images/tshirt_astronaut.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「讀本」在哪裡？",
            item: "讀本",
            audioFile: "audio/question_duben.mp3",
            correctImage: "images/book_squirrel.png",
            distractors: ["images/backpack_captainamerica.png", "images/shoes_spongebob.png", "images/bowls.png", "images/spoons.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「碗」在哪裡？",
            item: "碗",
            audioFile: "audio/question_wan.mp3",
            correctImage: "images/bowls.png",
            distractors: ["images/shorts.png", "images/toy_car.png", "images/towel_blue.png", "images/socks_bunny.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「湯匙」在哪裡？",
            item: "湯匙",
            audioFile: "audio/question_tangchi.mp3",
            correctImage: "images/spoons.png",
            distractors: ["images/socks_bunny.png", "images/shoes_spongebob.png", "images/diaper.png", "images/tshirt_astronaut.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「車子」在哪裡？",
            item: "車子",
            audioFile: "audio/question_chezi.mp3",
            correctImage: "images/toy_car.png",
            distractors: ["images/backpack_captainamerica.png", "images/towel_blue.png", "images/bib.png", "images/shorts.png"],
            isScoredCorrect: false,
            isAttempted: false
        },
        {
            question: "請問「毛巾」在哪裡？",
            item: "毛巾",
            audioFile: "audio/question_maojin.mp3",
            correctImage: "images/towel_blue.png",
            distractors: ["images/backpack_captainamerica.png", "images/shoes_spongebob.png", "images/diaper.png", "images/tshirt_astronaut.png"],
            isScoredCorrect: false,
            isAttempted: false
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0;
    let numOptionsPerQuestion = 2; // Default, will be set by user

    // --- DOM Elements ---
    const startScreenEl = document.getElementById('start-screen');
    const quizContainerEl = document.querySelector('.quiz-container');
    const optionChoiceBtns = document.querySelectorAll('.option-choice-btn');

    const questionTextEl = document.getElementById('question-text');
    const playQuestionAudioBtn = document.getElementById('play-question-audio-btn');
    const imageOptionsContainerEl = document.getElementById('image-options-container'); // Dynamic container
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');

    const questionAudioEl = document.getElementById('question-audio');
    const correctAudioEl = document.getElementById('correct-audio');
    const incorrectAudioEl = document.getElementById('incorrect-audio');

    const currentQInfoEl = document.getElementById('current-q-info');
    const correctAnswersStatsEl = document.getElementById('correct-answers-stats');
    const accuracyRateEl = document.getElementById('accuracy-rate');

    // --- Utility Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // ES6 swap
        }
        return array;
    }

    function playAudio(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(error => console.error("Audio play failed:", error));
    }

    // --- Core Logic Functions ---
    function startGame(selectedNumOptions) {
        numOptionsPerQuestion = parseInt(selectedNumOptions);
        startScreenEl.style.display = 'none';
        quizContainerEl.style.display = 'block';
        // Reset stats if restarting
        currentQuestionIndex = 0;
        correctAnswersCount = 0;
        questionsData.forEach(q => {
            q.isScoredCorrect = false;
            q.isAttempted = false;
        });
        loadQuestion(currentQuestionIndex);
    }

    function updateStatsDisplay() {
        const totalQuestions = questionsData.length;
        const currentQuestionNumberForDisplay = currentQuestionIndex + 1;
        const attemptedQuestionsCount = questionsData.filter(q => q.isAttempted).length;


        currentQInfoEl.textContent = `目前題號: ${currentQuestionNumberForDisplay} / 總題數: ${totalQuestions}`;
        correctAnswersStatsEl.textContent = `答對題數: ${correctAnswersCount}`;

        let accuracy = 0;
        // Accuracy based on questions *attempted* so far.
        if (attemptedQuestionsCount > 0) {
            accuracy = (correctAnswersCount / attemptedQuestionsCount) * 100;
        } else if (currentQuestionNumberForDisplay > 0 && !questionsData[currentQuestionIndex].isAttempted) {
            // If on a new question not yet attempted, show 0% or based on previous
            // For simplicity here, if no attempts, show based on total correct / current q num
             accuracy = (correctAnswersCount / currentQuestionNumberForDisplay) * 100;

        }


        accuracyRateEl.textContent = `答對率: ${accuracy.toFixed(0)}%`;
    }

    function loadQuestion(index) {
        const currentQuestion = questionsData[index];
        questionTextEl.textContent = currentQuestion.question;
        questionAudioEl.src = currentQuestion.audioFile;

        imageOptionsContainerEl.innerHTML = ''; // Clear previous options
        imageOptionsContainerEl.setAttribute('data-options-count', numOptionsPerQuestion);


        // Prepare options: 1 correct, (numOptionsPerQuestion - 1) distractors
        let options = [currentQuestion.correctImage];
        const availableDistractors = [...currentQuestion.distractors]; // Create a copy to shuffle
        shuffleArray(availableDistractors);

        for (let i = 0; i < numOptionsPerQuestion - 1; i++) {
            if (availableDistractors[i]) {
                options.push(availableDistractors[i]);
            } else {
                console.warn(`Not enough unique distractors for question ${index + 1} to fill ${numOptionsPerQuestion} slots. Using duplicates or fewer options.`);
                // Potentially add a placeholder or duplicate if strict number is needed
            }
        }
        shuffleArray(options); // Shuffle the final set of options (correct + distractors)

        options.forEach(imgSrc => {
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('image-container');

            const imgEl = document.createElement('img');
            imgEl.src = imgSrc;
            imgEl.alt = "選項"; // Generic alt, specific item identified by imgSrc comparison

            imgContainer.appendChild(imgEl);
            imgContainer.addEventListener('click', () => handleAnswer(imgSrc, imgContainer));
            imageOptionsContainerEl.appendChild(imgContainer);
        });

        updateNavigationButtons();
        updateStatsDisplay();
        // playQuestionAudio(); // Optional
    }
    
    function playQuestionAudio() {
        if (questionAudioEl.src && questionAudioEl.readyState >= 2) {
             playAudio(questionAudioEl);
        } else if (questionAudioEl.src) {
            questionAudioEl.addEventListener('canplaythrough', () => playAudio(questionAudioEl), { once: true });
        }
    }

    function handleAnswer(selectedImageSrc, selectedContainer) {
        const currentQuestion = questionsData[currentQuestionIndex];

        // Clear borders from all options first
        const allOptionContainers = imageOptionsContainerEl.querySelectorAll('.image-container');
        allOptionContainers.forEach(container => container.classList.remove('correct', 'incorrect'));

        questionAudioEl.pause();
        questionAudioEl.currentTime = 0;

        const isCorrect = selectedImageSrc === currentQuestion.correctImage;

        if (isCorrect) {
            playAudio(correctAudioEl);
            selectedContainer.classList.add('correct');
            if (!currentQuestion.isAttempted) { // Only score if it's the first attempt
                currentQuestion.isScoredCorrect = true;
                correctAnswersCount++;
            }
        } else {
            playAudio(incorrectAudioEl);
            selectedContainer.classList.add('incorrect');
            // if (!currentQuestion.isAttempted) {
                // Student got it wrong on first attempt, no score for this question.
            // }
        }

        if (!currentQuestion.isAttempted) {
            currentQuestion.isAttempted = true; // Mark as attempted
        }
        
        updateStatsDisplay();
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = questionsData.length === 0 || currentQuestionIndex === questionsData.length - 1;
    }

    // --- Event Listeners ---
    optionChoiceBtns.forEach(button => {
        button.addEventListener('click', (e) => {
            startGame(e.target.dataset.options);
        });
    });

    playQuestionAudioBtn.addEventListener('click', playQuestionAudio);

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questionsData.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    // --- Initial Setup ---
    // Quiz does not start automatically. User needs to select options first.
    updateNavigationButtons(); // Disable next if no questions initially
});
