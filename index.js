document.addEventListener('DOMContentLoaded', () => {

    // IMPORTANT: In a real application, questions would be fetched from a secure server.
    // The "maintenance team" would edit them in a database, not in this JS file.
    const allQuestions = {
        // Compulsory Subjects
        english: [
            { q: "Which of the following sentences is grammatically impeccable?", o: ["He done it yesterday.", "The committee has submitted their report.", "Neither of the players was injured."], a: 2 },
            { q: "The phrase 'a Herculean task' means...", o: ["A very easy job.", "A task requiring immense strength or effort.", "A job for a hero."], a: 1 },
            { q: "Identify the figure of speech in: 'The wind whispered through the trees.'", o: ["Metaphor", "Simile", "Personification"], a: 2 },
            { q: "Choose the word that is an antonym for 'ephemeral'.", o: ["Transient", "Permanent", "Fleeting"], a: 1 },
            { q: "What is a 'soliloquy' in a play?", o: ["A dialogue between two characters.", "A speech by a character to the audience or themselves, revealing their thoughts.", "The final summary of the plot."], a: 1 },
            { q: "Select the correctly spelled word.", o: ["Accomodate", "Acomodate", "Accommodate"], a: 2 },
            { q: "The idiom 'to burn the midnight oil' means...", o: ["To cause trouble late at night.", "To work or study late into the night.", "To waste resources."], a: 1 },
            { q: "Which prefix would you add to 'legal' to mean 'not legal'?", o: ["Un-", "Il-", "In-"], a: 1 },
            { q: "In the sentence 'The quick brown fox jumps over the lazy dog,' which part of speech is 'quickly' if it were to replace 'quick'?", o: ["Adjective", "Noun", "Adverb"], a: 2 },
            { q: "A 'dystopian' society is characterized by...", o: ["Human misery, oppression, and disease.", "Perfect harmony and happiness.", "Advanced technology and equality."], a: 0 }
        ],
        mathematics: [
            { q: "If a circle has a radius of 5cm, what is its area? (Use π ≈ 3.14)", o: ["78.5 cm²", "31.4 cm²", "15.7 cm²"], a: 0 },
            { q: "Solve for x: 3x - 7 = 2x + 1", o: ["x = 6", "x = -8", "x = 8"], a: 2 },
            { q: "What is the next prime number after 29?", o: ["30", "31", "33"], a: 1 },
            { q: "A car travels 240km in 3 hours. What is its average speed in km/h?", o: ["60 km/h", "80 km/h", "720 km/h"], a: 1 },
            { q: "If log₂(x) = 4, what is the value of x?", o: ["8", "16", "2"], a: 1 },
            { q: "What is the probability of rolling a '4' on a standard six-sided die?", o: ["1/4", "1/6", "4/6"], a: 1 },
            { q: "The sum of angles in a quadrilateral is...", o: ["180°", "360°", "540°"], a: 1 },
            { q: "If f(x) = x² + 2x - 1, find f(3).", o: ["14", "9", "11"], a: 0 },
            { q: "A store offers a 20% discount on an item priced at $150. What is the final price?", o: ["$120", "$130", "$30"], a: 0 },
            { q: "What is the value of ∛125?", o: ["15", "25", "5"], a: 2 }
        ],
        // Science Subjects
        physics: [
            { q: "Which law states that for every action, there is an equal and opposite reaction?", o: ["Newton's First Law", "Newton's Third Law", "Law of Conservation of Energy"], a: 1 },
            { q: "The unit of electrical resistance is...", o: ["Volt", "Ampere", "Ohm"], a: 2 },
            { q: "What phenomenon causes a rainbow?", o: ["Reflection", "Refraction and Dispersion", "Diffraction"], a: 1 },
            { q: "Escape velocity is the speed required to...", o: ["Orbit a planet.", "Break the sound barrier.", "Break free from a celestial body's gravitational pull."], a: 2 },
            { q: "Which of these is a vector quantity?", o: ["Speed", "Mass", "Velocity"], a: 2 },
            { q: "E = mc² relates energy, mass, and...", o: ["The speed of light.", "The force of gravity.", "Electrical charge."], a: 0 },
            { q: "A concave lens is also known as a...", o: ["Converging lens", "Diverging lens", "Plane lens"], a: 1 },
            { q: "The process of a solid turning directly into a gas is called...", o: ["Evaporation", "Condensation", "Sublimation"], a: 2 },
            { q: "What is the primary function of a transformer?", o: ["To store electrical energy.", "To convert AC to DC.", "To change the voltage of an alternating current."], a: 2 },
            { q: "Sound waves travel fastest through...", o: ["Gases", "Liquids", "Solids"], a: 2 }
        ],
        chemistry: [
            { q: "What is the chemical symbol for Gold?", o: ["Ag", "Au", "Gd"], a: 1 },
            { q: "The pH of a neutral solution is...", o: ["0", "7", "14"], a: 1 },
            { q: "Which of these is a noble gas?", o: ["Oxygen", "Hydrogen", "Neon"], a: 2 },
            { q: "The process of splitting a heavy atomic nucleus is called...", o: ["Nuclear Fusion", "Nuclear Fission", "Radioactivity"], a: 1 },
            { q: "What is the most abundant element in the Earth's atmosphere?", o: ["Oxygen", "Carbon Dioxide", "Nitrogen"], a: 2 },
            { q: "A catalyst is a substance that...", o: ["Slows down a reaction.", "Is consumed in a reaction.", "Speeds up a reaction without being consumed."], a: 2 },
            { q: "Which of the following is a hydrocarbon?", o: ["H₂O", "C₂H₅OH (Ethanol)", "CH₄ (Methane)"], a: 2 },
            { q: "The atomic number of an element is determined by the number of...", o: ["Neutrons", "Electrons", "Protons"], a: 2 },
            { q: "Bronze is an alloy of...", o: ["Copper and Zinc", "Copper and Tin", "Iron and Carbon"], a: 1 },
            { q: "What is the main component of natural gas?", o: ["Methane", "Propane", "Butane"], a: 0 }
        ],
        biology: [
            { q: "What is the powerhouse of the cell?", o: ["Nucleus", "Ribosome", "Mitochondrion"], a: 2 },
            { q: "Photosynthesis primarily occurs in the...", o: ["Roots", "Stem", "Chloroplasts of leaves"], a: 2 },
            { q: "Which of these is part of the central nervous system?", o: ["Nerves in the arm", "The brain and spinal cord", "The retina"], a: 1 },
            { q: "What is the largest organ in the human body?", o: ["Liver", "Brain", "Skin"], a: 2 },
            { q: "DNA is an acronym for...", o: ["Deoxyribonucleic Acid", "Diribonucleic Acid", "Deoxyribo Nutrient Acid"], a: 0 },
            { q: "Which blood type is known as the 'universal donor'?", o: ["AB", "O", "A"], a: 1 },
            { q: "What is the primary function of red blood cells?", o: ["Fight infection", "Carry oxygen", "Help blood clot"], a: 1 },
            { q: "Which part of the plant is responsible for absorbing water and nutrients?", o: ["Leaves", "Flowers", "Roots"], a: 2 },
            { q: "A herbivore is an animal that eats...", o: ["Only meat", "Both plants and animals", "Only plants"], a: 2 },
            { q: "The process of evolution by natural selection was proposed by...", o: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur"], a: 1 }
        ],
        // Arts Subjects
        government: [
            { q: "A system of government where the monarch's power is limited by a constitution is called...", o: ["Absolute Monarchy", "Constitutional Monarchy", "Republic"], a: 1 },
            { q: "The legislative branch of government is responsible for...", o: ["Interpreting laws", "Enforcing laws", "Making laws"], a: 2 },
            { q: "Which of the following is a feature of a democratic state?", o: ["Single-party rule", "Rule of law", "Censorship of the press"], a: 1 },
            { q: "A federal system of government is one where power is...", o: ["Concentrated in the central government.", "Shared between central and regional governments.", "Held entirely by regional governments."], a: 1 },
            { q: "The term 'suffrage' refers to...", o: ["The right to vote.", "The suffering of citizens.", "A government petition."], a: 0 },
            { q: "What is an 'oligarchy'?", o: ["Rule by a single person.", "Rule by the people.", "Rule by a small group of powerful people."], a: 2 },
            { q: "The concept of 'separation of powers' is meant to...", o: ["Unify government branches.", "Prevent the abuse of power.", "Make government more efficient."], a: 1 },
            { q: "In a presidential system, the head of government is also...", o: ["The head of the judiciary.", "The head of state.", "The speaker of the legislature."], a: 1 },
            { q: "A country's written set of fundamental principles or established precedents is its...", o: ["Manifesto", "Decree", "Constitution"], a: 2 },
            { q: "The United Nations (UN) was primarily formed to...", o: ["Promote international trade.", "Maintain international peace and security.", "Regulate global currency."], a: 1 }
        ],
        economics: [
            { q: "The law of demand states that, ceteris paribus, as the price of a good increases...", o: ["Quantity demanded increases.", "Quantity demanded decreases.", "Demand remains constant."], a: 1 },
            { q: "What is 'inflation'?", o: ["A decrease in the general price level of goods.", "A period of high unemployment.", "A sustained increase in the general price level of goods."], a: 2 },
            { q: "Opportunity cost is best defined as...", o: ["The price paid for a good.", "The value of the next-best alternative forgone.", "The total cost of production."], a: 1 },
            { q: "Which of the following is a factor of production?", o: ["Money", "Labor", "Finished goods"], a: 1 },
            { q: "A 'monopoly' is a market structure with...", o: ["Many sellers of a similar product.", "A single seller of a unique product.", "A few dominant sellers."], a: 1 },
            { q: "GDP stands for...", o: ["General Domestic Product", "Gross Domestic Product", "Government Development Plan"], a: 1 },
            { q: "A 'bear market' is characterized by...", o: ["Rising stock prices.", "Falling stock prices.", "Stable stock prices."], a: 1 },
            { q: "The central bank of a country is primarily responsible for...", o: ["Collecting taxes.", "Controlling the money supply.", "Funding government projects."], a: 1 },
            { q: "Elasticity of demand measures...", o: ["How much a producer can supply.", "The responsiveness of quantity demanded to a change in price.", "The total demand for a product."], a: 1 },
            { q: "A situation where a country's imports exceed its exports is called a...", o: ["Trade Surplus", "Trade Deficit", "Balanced Trade"], a: 1 }
        ],
        current_affairs: [
            { q: "What organization is primarily focused on global health crises, such as pandemics?", o: ["UNICEF", "WHO (World Health Organization)", "IMF (International Monetary Fund)"], a: 1 },
            { q: "The term 'Brexit' refers to the withdrawal of which country from the European Union?", o: ["Germany", "France", "United Kingdom"], a: 2 },
            { q: "Which tech entrepreneur is associated with SpaceX and Tesla?", o: ["Jeff Bezos", "Bill Gates", "Elon Musk"], a: 2 },
            { q: "The 2024 Summer Olympics are scheduled to be held in which city?", o: ["Los Angeles", "Paris", "Tokyo"], a: 1 },
            { q: "What does the acronym 'AI' stand for in the technology sector?", o: ["Automated Intelligence", "Artificial Intelligence", "Algorithmic Interface"], a: 1 },
            { q: "The Paris Agreement is a landmark international accord to combat...", o: ["Global Terrorism", "Climate Change", "Cybercrime"], a: 1 },
            { q: "Who is the current Secretary-General of the United Nations (as of early 2024)?", o: ["Ban Ki-moon", "Kofi Annan", "António Guterres"], a: 2 },
            { q: "The Suez Canal, a major global trade route, is located in which country?", o: ["Panama", "Egypt", "Turkey"], a: 1 },
            { q: "Which of these is a popular cryptocurrency?", o: ["Swiftcoin", "Bitcoin", "Fedcoin"], a: 1 },
            { q: "The 'G7' is a group of...", o: ["The world's seven largest countries by area.", "Seven leading advanced economies.", "The seven continents."], a: 1 }
        ]
    };

    // DOM Elements
    const pages = document.querySelectorAll('.page');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showLoginLink = document.getElementById('show-login-link');
    const showSignupLink = document.getElementById('show-signup-link');
    const loginError = document.getElementById('login-error');
    
    const studentNameEl = document.getElementById('student-name');
    const studentStreamEl = document.getElementById('student-stream');
    const studentPhotoEl = document.getElementById('student-photo');
    const timerEl = document.getElementById('time');
    const questionNavContainer = document.getElementById('question-nav-container');
    const questionNumberEl = document.getElementById('question-number');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    const resultBox = document.getElementById('result-content');
    const logoutBtn = document.getElementById('logout-btn');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');


    // App State
    let currentUser = null;
    let currentQuestionIndex = 0;
    let examQuestions = [];
    let userAnswers = [];
    let timerInterval;

    // --- UTILITY FUNCTIONS ---
    
    // Simulate a user database using localStorage
    const getUsers = () => JSON.parse(localStorage.getItem('exam_users')) || {};
    const saveUsers = (users) => localStorage.setItem('exam_users', JSON.stringify(users));

    // Simulate an admin results database
    const getAdminResults = () => JSON.parse(localStorage.getItem('exam_admin_results')) || [];
    const saveAdminResults = (results) => localStorage.setItem('exam_admin_results', JSON.stringify(results));

    const showPage = (pageId) => {
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    };

    // --- AUTHENTICATION ---
    
    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('login-page');
    });

    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage('signup-page');
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value.trim();
        const password = document.getElementById('signup-password').value;
        const photoFile = document.getElementById('signup-photo').files[0];
        
        if (!username || !password || !photoFile) {
            alert("All fields are required!");
            return;
        }

        const users = getUsers();
        if (users[username]) {
            alert("Username already exists. Please choose another one.");
            return;
        }

        // Convert image to Base64 to store in localStorage
        const reader = new FileReader();
        reader.onloadend = () => {
            const photoData = reader.result;
            users[username] = { password, photoData, hasTakenExam: false, score: null, stream: null };
            saveUsers(users);
            alert("Sign up successful! Please log in.");
            showPage('login-page');
            signupForm.reset();
        };
        reader.readAsDataURL(photoFile);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;
        const stream = document.querySelector('input[name="stream"]:checked');
        
        loginError.style.display = 'none';

        // Admin Login
        if (username === 'admin' && password === 'admin123') {
            loadAdminPage();
            return;
        }

        if (!stream) {
            loginError.textContent = "Please select your exam stream.";
            loginError.style.display = 'block';
            return;
        }

        const users = getUsers();
        const user = users[username];

        if (!user) {
            loginError.textContent = "Username not found. Please sign up.";
            loginError.style.display = 'block';
            return;
        }
        
        if (user.password !== password) {
            loginError.textContent = "Incorrect password.";
            loginError.style.display = 'block';
            return;
        }

        if (user.hasTakenExam) {
            loginError.textContent = "Sorry, you have already taken the exam. You have to try again next session.";
            loginError.style.display = 'block';
            return;
        }

        // Login successful
        currentUser = { username, stream: stream.value, photoData: user.photoData };
        startExam();
    });

    // --- EXAM LOGIC ---
    
    const startExam = () => {
        // Prepare questions based on stream
        examQuestions = [
            ...allQuestions.english,
            ...allQuestions.mathematics
        ];

        if (currentUser.stream === 'Science') {
            examQuestions.push(...allQuestions.physics, ...allQuestions.chemistry, ...allQuestions.biology);
        } else { // Arts
            examQuestions.push(...allQuestions.government, ...allQuestions.economics, ...allQuestions.current_affairs);
        }

        userAnswers = new Array(examQuestions.length).fill(null);
        currentQuestionIndex = 0;

        // Setup UI
        studentNameEl.textContent = currentUser.username;
        studentStreamEl.textContent = currentUser.stream;
        studentPhotoEl.src = currentUser.photoData;
        
        setupQuestionNavigation();
        displayQuestion(currentQuestionIndex);
        startTimer(3600); // 1 hour = 3600 seconds
        showPage('exam-page');
    };

    const setupQuestionNavigation = () => {
        questionNavContainer.innerHTML = '';
        examQuestions.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.classList.add('nav-btn');
            btn.textContent = index + 1;
            btn.dataset.index = index;
            btn.addEventListener('click', () => {
                currentQuestionIndex = index;
                displayQuestion(currentQuestionIndex);
            });
            questionNavContainer.appendChild(btn);
        });
    };

    const displayQuestion = (index) => {
        const question = examQuestions[index];
        questionNumberEl.textContent = `Question ${index + 1}/${examQuestions.length}`;
        questionTextEl.textContent = question.q;
        optionsContainer.innerHTML = '';

        question.o.forEach((optionText, i) => {
            const optionId = `q${index}_option${i}`;
            const optionDiv = document.createElement('label');
            optionDiv.className = 'option';
            optionDiv.setAttribute('for', optionId);

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question${index}`;
            radio.id = optionId;
            radio.value = i;
            if(userAnswers[index] === i) {
                radio.checked = true;
            }
            
            radio.addEventListener('change', () => {
                userAnswers[index] = i;
                updateQuestionNavStatus(index, true);
            });

            optionDiv.appendChild(radio);
            optionDiv.appendChild(document.createTextNode(optionText));
            optionsContainer.appendChild(optionDiv);
        });

        updateNavButtons();
        highlightCurrentNav();
    };
    
    const updateQuestionNavStatus = (index, answered) => {
        const navBtn = questionNavContainer.querySelector(`[data-index='${index}']`);
        if(answered) {
            navBtn.classList.add('answered');
        } else {
            navBtn.classList.remove('answered');
        }
    };
    
    const highlightCurrentNav = () => {
        const navBtns = questionNavContainer.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => btn.classList.remove('current'));
        const currentBtn = questionNavContainer.querySelector(`[data-index='${currentQuestionIndex}']`);
        if(currentBtn) currentBtn.classList.add('current');
    };

    const updateNavButtons = () => {
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = currentQuestionIndex === examQuestions.length - 1;
    };

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < examQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    });

    submitBtn.addEventListener('click', () => {
        const isSure = confirm("Are you sure you want to submit your exam? You cannot make any more changes.");
        if (isSure) {
            clearInterval(timerInterval);
            calculateAndShowResults();
        }
    });
    
    const startTimer = (duration) => {
        let timer = duration;
        timerInterval = setInterval(() => {
            let hours = parseInt(timer / 3600, 10);
            let minutes = parseInt((timer % 3600) / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            timerEl.textContent = `${hours}:${minutes}:${seconds}`;

            if (--timer < 0) {
                clearInterval(timerInterval);
                alert("Time's up! Your exam will be submitted automatically.");
                calculateAndShowResults();
            }
        }, 1000);
    };


    // --- RESULTS LOGIC ---
    
    const calculateAndShowResults = () => {
        let score = 0;
        examQuestions.forEach((question, index) => {
            if (userAnswers[index] === question.a) {
                score += 2; // 2 marks per question
            }
        });

        const totalMarks = examQuestions.length * 2;
        const percentage = (score / totalMarks) * 100;
        
        displayResults(score, totalMarks, percentage);
        updateUserRecord(score);
    };
    
    const displayResults = (score, totalMarks, percentage) => {
        resultBox.innerHTML = ''; // Clear previous results
        
        const scoreEl = document.createElement('h3');
        scoreEl.className = 'score';
        scoreEl.textContent = `${score} / ${totalMarks} (${percentage.toFixed(1)}%)`;
        
        const messageEl = document.createElement('p');
        messageEl.className = 'message';

        if (percentage >= 50) {
            scoreEl.classList.add('pass');
            messageEl.innerHTML = '<strong>Congratulations! You have passed.</strong><br>You have qualified for the next stage of the admission process.';
        } else {
            scoreEl.classList.add('fail');
            messageEl.innerHTML = '<strong>We regret to inform you that you did not meet the pass mark.</strong><br>Please try again during the next admission session.';
        }
        
        resultBox.appendChild(scoreEl);
        resultBox.appendChild(messageEl);
        showPage('results-page');
    };

    const updateUserRecord = (score) => {
        const users = getUsers();
        if (users[currentUser.username]) {
            users[currentUser.username].hasTakenExam = true;
            users[currentUser.username].score = score;
            users[currentUser.username].stream = currentUser.stream;
            saveUsers(users);

            // If passed, add to admin results
            const percentage = (score / 100) * 100;
            if (percentage >= 50) {
                const adminResults = getAdminResults();
                adminResults.push({
                    username: currentUser.username,
                    stream: currentUser.stream,
                    score: score,
                    percentage: percentage.toFixed(1),
                    grade: getGrade(percentage)
                });
                saveAdminResults(adminResults);
            }
        }
    };

    const getGrade = (percentage) => {
        if (percentage >= 90) return 'A+';
        if (percentage >= 80) return 'A';
        if (percentage >= 70) return 'B';
        if (percentage >= 60) return 'C';
        if (percentage >= 50) return 'D';
        return 'F';
    };
    
    const logout = () => {
        currentUser = null;
        loginForm.reset();
        showPage('login-page');
    };
    
    logoutBtn.addEventListener('click', logout);
    adminLogoutBtn.addEventListener('click', logout);

    // --- ADMIN LOGIC ---

    const loadAdminPage = () => {
        const results = getAdminResults();
        const tableBody = document.querySelector('#admin-results-table tbody');
        tableBody.innerHTML = ''; // Clear existing data

        if (results.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5">No student has passed the exam yet.</td></tr>';
        } else {
            results.forEach(res => {
                const row = `
                    <tr>
                        <td>${res.username}</td>
                        <td>${res.stream}</td>
                        <td>${res.score}</td>
                        <td>${res.percentage}%</td>
                        <td>${res.grade}</td>
                    </tr>
                `;
                tableBody.innerHTML += row;
            });
        }
        showPage('admin-page');
    };

    // --- INITIALIZATION ---
    
    // Initial page to show
    showPage('signup-page');
});