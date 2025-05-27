document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Page 1 of questions (PDF page 2)
        {
            question: "請問「書包」在哪裡？",
            item: "書包",
            audioFile: "audio/question_shubao.mp3",
            images: {
                left: "images/shoes_spongebob.png",
                right: "images/backpack_captainamerica.png"
            },
            correct: "right"
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
            correct: "left"
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
            correct: "left"
        },
        // Page 4 of questions (PDF page 5)
        {
            question: "請問「褲子」在哪裡？",
            item: "褲子",
            audioFile: "audio/question_kuzi.mp3",
            images: {
                left: "images/shorts.png",
                right: "images/socks_bunny.png"
            },
            correct: "left"
        },
        // Page 5 of questions (PDF page 6)
        {
            question: "請問「襪子」在哪裡？",
            item: "襪子",
            audioFile: "audio/question_wazi.mp3",
            images: {
                left: "images/socks_bunny.png", // Note: this image is repeated
                right: "images/toothbrush.png" // Note: this image is repeated
            },
            correct: "left"
        },
        // Page 6 of questions (PDF page 7)
        {
            question: "請問「衣服」在哪裡？",
            item: "衣服",
            audioFile: "audio/question_yifu.mp3",
            images: {
                left: "images/backpack_captainamerica.png", // Repeated
                right: "images/tshirt_astronaut.png" // Repeated
            },
            correct: "right"
        },
        // Page 7 of questions (PDF page 8)
        {
            question: "請問「圍兜」在哪裡？",
            item: "圍兜",
            audioFile: "audio/question_weidou.mp3",
            images: {
                left: "images/bib.png", // Repeated
                right: "images/shorts.png" // Repeated
            },
            correct: "left"
        },
        // Page 8 of questions (PDF page 9)
        {
            question: "請問「鞋子」在哪裡？",
            item: "鞋子",
            audioFile: "audio/question_xiezi.mp3",
            images: {
                left: "images/shoes_spongebob.png", // Repeated
                right: "images/spoons.png"
            },
            correct: "left"
        },
        // Page 9 of questions (PDF page 10)
        {
            question: "請問「杯子」在哪裡？",
            item: "杯子",
            audioFile: "audio/question_beizi.mp3",
            images: {
                left: "images/cup_horse.png",
                right: "images/backpack_captainamerica.png" // Repeated
            },
            correct: "left"
        },
        // Page 10 of questions (PDF page 11)
        {
            question: "請問「餐袋」在哪裡？",
            item: "餐袋",
            audioFile: "audio/question_candai.mp3",
            images: {
                left: "images/toothbrush.png", // Repeated
                right: "images/lunch_bag.png"
            },
            correct: "right"
        },
        // Page 11 of questions (PDF page 12)
        {
            question: "請問「讀本」在哪裡？",
            item: "讀本",
            audioFile: "audio/question_duben.mp3",
            images: {
                left: "images/book_squirrel.png",
                right: "images/backpack_captainamerica.png" // Repeated
            },
            correct: "left"
        },
        // Page 12 of questions (PDF page 13)
        {
            question: "請問「碗」在哪裡？",
            item: "碗",
            audioFile: "audio/question_wan.mp3",
            images: {
                left: "images/bowls.png",
                right: "images/shorts.png" // Repeated
            },
            correct: "left"
        },
        // Page 13 of questions (PDF page 14)
        {
            question: "請問「湯匙」在哪裡？",
            item: "湯匙",
            audioFile: "audio/question_tangchi.mp3",
            images: {
                left: "images/socks_bunny.png", // Repeated
                right: "images/spoons.png" // Repeated
            },
            correct: "right"
        },
        // Page 14 of questions (PDF page 15)
        {
            question: "請問「車子」在哪裡？",
            item: "車子",
            audioFile: "audio/question_chezi.mp3",
            images: {
                left: "images/toy_car.png",
                right: "images/backpack_captainamerica.png" // Repeated
            },
            correct: "left"
        },
        // Page 15 of questions (PDF page 16)
        {
            question: "請問「毛巾」在哪裡？",
            item: "毛巾",
            audioFile: "audio/question_maojin.mp3",
            images: {
                left: "images/towel_blue.png",
                right: "images/backpack_captainamerica.png" // Repeated
            },
            correct: "left"
        }
    ];

    let currentQuestionIndex = 0;
    let answerGiven = false; // To prevent multiple clicks/audio plays for one question

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

    function loadQuestion(index) {
        answerGiven = false;
        const currentQuestion = questions[index];
        questionTextEl.textContent = currentQuestion.question;
        questionAudioEl.src = currentQuestion.audioFile;
        
        imageLeftEl.src = currentQuestion.images.left;
        imageLeftEl.alt = `左邊選項: ${currentQuestion.item === currentQuestion.images.left ? currentQuestion.item : '另一樣物品'}`;
        imageRightEl.src = currentQuestion.images.right;
        imageRightEl.alt = `右邊選項: ${currentQuestion.item === currentQuestion.images.right ? currentQuestion.item : '另一樣物品'}`;

        // Reset feedback borders
        imageLeftContainer.classList.remove('correct', 'incorrect');
        imageRightContainer.classList.remove('correct', 'incorrect');

        updateNavigationButtons();
        // Optionally, autoplay question audio or wait for button click
        // playQuestionAudio(); // Uncomment if you want it to play automatically
    }

    function playAudio(audioElement) {
        audioElement.currentTime = 0; // Rewind to start
        audioElement.play().catch(error => console.error("Audio play failed:", error));
    }
    
    function playQuestionAudio() {
        if (questionAudioEl.src) {
            playAudio(questionAudioEl);
        }
    }

    function handleAnswer(selectedOption) {
        if (answerGiven) return; // If an answer was already processed for this question, do nothing
        answerGiven = true;

        const currentQuestion = questions[currentQuestionIndex];
        const selectedContainer = selectedOption === 'left' ? imageLeftContainer : imageRightContainer;
        
        // Stop any playing question audio
        questionAudioEl.pause();
        questionAudioEl.currentTime = 0;

        if (selectedOption === currentQuestion.correct) {
            playAudio(correctAudioEl);
            selectedContainer.classList.add('correct');
        } else {
            playAudio(incorrectAudioEl);
            selectedContainer.classList.add('incorrect');
            // Optionally highlight the correct one too
            // const correctContainer = currentQuestion.correct === 'left' ? imageLeftContainer : imageRightContainer;
            // setTimeout(() => correctContainer.classList.add('correct'), 300); // Slight delay
        }

        // Allow navigating to next question after a short delay
        // setTimeout(() => {
        //     if (currentQuestionIndex < questions.length - 1) {
        //         // nextBtn.disabled = false; // Enable next button if not already
        //     }
        // }, 500); // Adjust delay as needed
    }

    function updateNavigationButtons() {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === questions.length - 1;
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
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Initial load
    loadQuestion(currentQuestionIndex);
});