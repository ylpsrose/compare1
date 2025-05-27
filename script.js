document.addEventListener('DOMContentLoaded', () => {
    const questionsData = [ // Renamed to avoid conflict with a potential 'questions' NodeList
        // Page 1 of questions (PDF page 2)
        {
            question: "請問「書包」在哪裡？",
            item: "書包",
            audioFile: "audio/question_shubao.mp3",
            images: {
                left: "images/shoes_spongebob.png",
                right: "images/backpack_captainamerica.png"
            },
            correct: "right",
            isScoredCorrect: false // Tracks if this question has been scored correctly once
        },
        // Page 2 of questions (PDF page 3)
        {
            question: "請問「尿布」在哪裡？",
            item: "尿布",
            audioFile: "audio/question_niaobu.mp3",
            images: {
                left: "images/diaper.png",
                right: "images/tshirt_astronaut.png"
            },
            correct: "left",
            isScoredCorrect: false
        },
        // Page 3 of questions (PDF page 4)
        {
            question: "請問「牙刷」在哪裡？",
            item: "牙刷",
            audioFile: "audio/question_yashua.mp3",
            images: {
                left: "images/toothbrush.png",
                right: "images/bib.png"
            },
            correct: "left",
            isScoredCorrect: false
        },
        // ... (複製您所有的題目到這裡，並為每個題目物件加上 isScoredCorrect: false)
        // 例如，繼續您的題目列表：
        {
            question: "請問「褲子」在哪裡？",
            item: "褲子",
            audioFile: "audio/question_kuzi.mp3",
            images: { left: "images/shorts.png", right: "images/socks_bunny.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「襪子」在哪裡？",
            item: "襪子",
            audioFile: "audio/question_wazi.mp3",
            images: { left: "images/socks_bunny.png", right: "images/toothbrush.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「衣服」在哪裡？",
            item: "衣服",
            audioFile: "audio/question_yifu.mp3",
            images: { left: "images/backpack_captainamerica.png", right: "images/tshirt_astronaut.png" },
            correct: "right",
            isScoredCorrect: false
        },
        {
            question: "請問「圍兜」在哪裡？",
            item: "圍兜",
            audioFile: "audio/question_weidou.mp3",
            images: { left: "images/bib.png", right: "images/shorts.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「鞋子」在哪裡？",
            item: "鞋子",
            audioFile: "audio/question_xiezi.mp3",
            images: { left: "images/shoes_spongebob.png", right: "images/spoons.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「杯子」在哪裡？",
            item: "杯子",
            audioFile: "audio/question_beizi.mp3",
            images: { left: "images/cup_horse.png", right: "images/backpack_captainamerica.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「餐袋」在哪裡？",
            item: "餐袋",
            audioFile: "audio/question_candai.mp3",
            images: { left: "images/toothbrush.png", right: "images/lunch_bag.png" },
            correct: "right",
            isScoredCorrect: false
        },
        {
            question: "請問「讀本」在哪裡？",
            item: "讀本",
            audioFile: "audio/question_duben.mp3",
            images: { left: "images/book_squirrel.png", right: "images/backpack_captainamerica.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「碗」在哪裡？",
            item: "碗",
            audioFile: "audio/question_wan.mp3",
            images: { left: "images/bowls.png", right: "images/shorts.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「湯匙」在哪裡？",
            item: "湯匙",
            audioFile: "audio/question_tangchi.mp3",
            images: { left: "images/socks_bunny.png", right: "images/spoons.png" },
            correct: "right",
            isScoredCorrect: false
        },
        {
            question: "請問「車子」在哪裡？",
            item: "車子",
            audioFile: "audio/question_chezi.mp3",
            images: { left: "images/toy_car.png", right: "images/backpack_captainamerica.png" },
            correct: "left",
            isScoredCorrect: false
        },
        {
            question: "請問「毛巾」在哪裡？",
            item: "毛巾",
            audioFile: "audio/question_maojin.mp3",
            images: { left: "images/towel_blue.png", right: "images/backpack_captainamerica.png" },
            correct: "left",
            isScoredCorrect: false
        }
    ];

    let currentQuestionIndex = 0;
    let correctAnswersCount = 0; // Total unique correct answers

    const questionTextEl = document.getElementById('question-text');
    const playQuestionAudioBtn = document.getElementById('play-question-audio-btn');
    const imageLeftEl = document.getElementById('image-left');
    const imageRightEl = document.getElementById('image-right');
    const imageLeftContainer = document.getElementById('image-left-container');
    const imageRightContainer = document.getElementById('image-right-container');
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');

    const questionAudioEl = document.getElementById('question-audio');
    const correctAudioEl = document.getElementById('correct-audio');
    const incorrectAudioEl = document.getElementById('incorrect-audio');

    // Stats Elements
    const currentQInfoEl = document.getElementById('current-q-info');
    const correctAnswersStatsEl = document.getElementById('correct-answers-stats');
    const accuracyRateEl = document.getElementById('accuracy-rate');

    function updateStatsDisplay() {
        const totalQuestions = questionsData.length;
        const currentQuestionNumberForDisplay = currentQuestionIndex + 1;

        currentQInfoEl.textContent = `目前題號: ${currentQuestionNumberForDisplay} / 總題數: ${totalQuestions}`;
        correctAnswersStatsEl.textContent = `答對題數: ${correctAnswersCount}`;

        let accuracy = 0;
        if (currentQuestionNumberForDisplay > 0) { // Calculate accuracy based on questions viewed so far
            accuracy = (correctAnswersCount / currentQuestionNumberForDisplay) * 100;
        }
        accuracyRateEl.textContent = `答對率: ${accuracy.toFixed(0)}%`;
    }


    function loadQuestion(index) {
        const currentQuestion = questionsData[index];
        questionTextEl.textContent = currentQuestion.question;
        questionAudioEl.src = currentQuestion.audioFile;
        
        imageLeftEl.src = currentQuestion.images.left;
        imageLeftEl.alt = `左邊選項`; // Simplified alt text
        imageRightEl.src = currentQuestion.images.right;
        imageRightEl.alt = `右邊選項`; // Simplified alt text

        imageLeftContainer.classList.remove('correct', 'incorrect');
        imageRightContainer.classList.remove('correct', 'incorrect');

        updateNavigationButtons();
        updateStatsDisplay(); // Update stats when a new question loads
        // playQuestionAudio(); // Optional: Play audio automatically
    }

    function playAudio(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(error => console.error("Audio play failed:", error));
    }
    
    function playQuestionAudio() {
        if (questionAudioEl.src && questionAudioEl.readyState >= 2) { // Check if audio is ready
             playAudio(questionAudioEl);
        } else if (questionAudioEl.src) {
            questionAudioEl.addEventListener('canplaythrough', () => playAudio(questionAudioEl), { once: true });
        }
    }

    function handleAnswer(selectedOption) {
        const currentQuestion = questionsData[currentQuestionIndex];
        const selectedContainer = selectedOption === 'left' ? imageLeftContainer : imageRightContainer;
        
        // Clear previous borders before applying new one
        imageLeftContainer.classList.remove('correct', 'incorrect');
        imageRightContainer.classList.remove('correct', 'incorrect');
        
        questionAudioEl.pause();
        questionAudioEl.currentTime = 0;

        if (selectedOption === currentQuestion.correct) {
            playAudio(correctAudioEl);
            selectedContainer.classList.add('correct');
            if (!currentQuestion.isScoredCorrect) {
                currentQuestion.isScoredCorrect = true;
                correctAnswersCount++;
            }
        } else {
            playAudio(incorrectAudioEl);
            selectedContainer.classList.add('incorrect');
        }
        updateStatsDisplay(); // Update stats after every attempt
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questionsData.length - 1;
    }

    playQuestionAudioBtn.addEventListener('click', playQuestionAudio);
    imageLeftContainer.addEventListener('click', () => handleAnswer('left'));
    imageRightContainer.addEventListener('click', () => handleAnswer('right'));

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

    // Initial load
    loadQuestion(currentQuestionIndex); // This will also call updateStatsDisplay
});
