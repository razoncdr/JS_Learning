
// Set the target text to type
let target = document.querySelector("#target");

let sentences = [
    "Hello, How are you?", 
    "Practice makes a man perfect", 
    "DOM is exciting."
]
let idx = Math.floor(Math.random()*sentences.length);
let curSentence = sentences[idx];
 target.textContent = curSentence;


let startTime = null, endTime = null;
let textArea = document.querySelector('textarea');
let input = document.querySelector('#input');
let finished = false;


input.addEventListener('paste', (e) => e.preventDefault());
input.addEventListener('contextmenu', (e) => e.preventDefault());
input.focus();
console.log(document.activeElement);




input.addEventListener('input', ()=>{
    if(!startTime) startTime = new Date();
    let result = document.querySelector("#result");
    if (!finished && input && input.value === curSentence) {
        endTime = new Date();
        
        let wordCount = curSentence.trim().split(/\s+/).length;
        
        let duration = (endTime - startTime) / 1000; // in seconds
        let speed = curSentence.length / duration;   // characters per second
        let speedWpm = (wordCount/duration)*60;
        result.textContent = 
        `✅ Typing Complete!\n` +
        `⏱️ Time Taken: ${duration.toFixed(2)} seconds\n` +
        `⌨️ Speed: ${speed.toFixed(2)} CPS (Characters Per Second)` +
        '\n'+
        `📝 Speed: ${speedWpm.toFixed(2)} WPM (Words Per Minute)`;
        
        result.style.whiteSpace = "pre-line"; // So \n works in the browser
        result.style.color = "green";
        input.disabled = true;
        finished = true;
    }
    // else if(!finished){
        //         result.textContent = "Not Done";
        //         result.style.color = "red";
        //     }
    })
    
    
    
    
    let restartBtn = document.querySelector("#restart");
    restartBtn.addEventListener("click", ()=>{
    startTime = null;
    endTime = null;
    result.textContent="";
    input.value = "";
    input.disabled = false;
    finished = false;
})