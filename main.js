var SpeechRecognition = window.webkitSpeechRecognition;
//THIS IS A WASTE OF TIME DONT code AI !!!!
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();}
recognition.onresult = function run (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
}
