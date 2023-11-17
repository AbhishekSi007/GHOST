//elements
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");
//speech Recognition setup

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//sr start
recognition.onstart = function(){
    console.log("vr.active");
};


//sr result
recognition.onresult = function(event){
    let current= event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript =transcript.toLowerCase()
    console.log('my words :${transcript}');
    if(transcript.includes("ghost"))
    {
        readout("Hello master how may i assist you")
    }   
    if(transcript.includes("open youtube"))
    {
        readout("opening youtube master");
        window.open("https://www.youtube.com/")
    }
    if(transcript.includes("open google"))
     {
        readout("Opening Google Search Engine master.");
        window.open("https://www.google.com/")  
     } 
    if(transcript.includes("open gmail"))
     {
        readout("here you go please browse through your mails master.");
        window.open("https://mail.google.com/")
     }
     if(transcript.includes("search for"))
     {
        readout("Here is the result you searched for: ");
        let input =transcript.split("");
        input.splice(0,11);
        input.pop();
        input=input.join("").split(" ").join("+");
        console.log(input);
        window.open('https://www.google.com/search?q='+input);
     }
     if(transcript.includes("play video on"))
     {
        readout("Here is the video you searched for: ");
        let input =transcript.split("");
        input.splice(0,13);
        input.pop();
        input=input.join("").split(" ").join("+");
        console.log(input);
        window.open('https://www.youtube.com/results?search_query='+input);
     }
     
     else
     {
        readout("Sorry master but can you speak again");
     }
};
//sr stop
recognition.onend = function(){
    console.log("vr deactivated");
};


//sr continuous
//recognition.continuous= true;

startBtn.addEventListener("click",()=>{
    recognition.start();
});

stopBtn.addEventListener("click",()=>{
    recognition.stop();
});

//GHOST speech
function readout(message) {
    const speech = new SpeechSynthesisUtterance()
// change voices
    const allVoices = speechSynthesis.getVoices()
    speech.voice = allVoices[1];
    speech.text =message;
    speech.volume = 1
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
};
 
//example
speakBtn.addEventListener("click",() => {
    readout("Hi master Shadow myself Ghost how may     i assist you");
});