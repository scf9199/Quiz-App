const quizData =[
    {
        question: "Which of the following two layers are in the ISO/OSI reference model but NOT in the Internet protocol stack?",
        a: "MAC Layer and Security Layer",
        b: "Security Layer and Session Layer",
        c: "Session Layer and Presentation Layer",
        d: "Presentation Layer and Security Layer",
        correct: "c",
    },
    {
        question: "The functionality of synchronization, checkpointing, and recovery of data exchange in the ISO/OSI reference model is implemented at?",
        a: "Presentation Layer",
        b: "Session Layer",
        c: "Application Layer",
        d: "Transport Layer",
        correct: "b",
    },
    {
        question: "Fiber optic cable is?",
        a: "Immune to electromagnetic noise",
        b: "Low speed",
        c: "High error rate",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is unguided media?",
        a: "Copper wire",
        b: "Radio",
        c: "Fiber",
        d: "Coax",
        correct: "b",
    },
    {
        question: "What are two key network-core function in the internet?",
        a: "Routing and Forwarding",
        b: "Routing and Link setup",
        c: "Link setup and Link teardown",
        d: "Forwarding and Link teardown",
        correct: "a",
    },
    {
        question: "Which of the following choices represent the top level of the hierarchial internet structure?",
        a: "Google and IXP",
        b: "Tier 1 ISP and content provider network",
        c: "Regional ISP and Tier 1 ISP",
        d: "Regional ISP and access ISP",
        correct: "b"
    },
    {
        question: "What is a self-replicating infection by letting victim hosts PASSIVELY recieve objects that can get itself executed?",
        a: "Virus",
        b: "Worm",
        c: "Spyware",
        d: "All of the above",
        correct: "Worm",
    },
    {
        question: "The major topic in the field of network security include?",
        a: "How to design architectures that are immune to attacks",
        b: "How to defend networks against attacks",
        c: "How bad guys can attack computer networks",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "In PURE client-server architecture, which of the following is NOT correct?",
        a: "server should be always-on host",
        b: "clients may be intermittently connected to the network",
        c: "clients may communicate directly with each other",
        d: "clients may have dynamic IP addresses",
        correct: "c",
    },
    {
        question: "Which of the following choices require that data MUST be delivered with no loss?",
        a: "File transfer, e-mail, web service application",
        b: "File transfer, e-mail, real-time video application",
        c: "File transfer, web service, interactive game applications",
        d: "Text messaging, web service, real-time video applicatioins",
        correct: "a",
    },
    {
        question: "A protocol defines",
        a: "The actions taken on the transmission and/or recipt of messages or other event",
        b: "The order of messages exchanged among network entities",
        c: "The format of messages exchanged among network entites",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "The functionality of encryption and compression in the internet protocol stack is implemented at what layer?",
        a: "Presentation Layer",
        b: "Session Layer",
        c: "Application Layer",
        d: "Transport Layer",
        correct: "Application Layer",
    },
    {
        question: "Which of the following service is provided by TCP",
        a: "Reliable transport, flow contorl, timing",
        b: "Flow control, congestion control, reliable transport",
        c: "Congestion control, reliable transport, security",
        d: "None of the above",
        correct: "b",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
