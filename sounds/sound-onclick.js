// SIMPLE CLICK

function sound_click() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "click.mp3";
 }
}

else {
{
var audio = document.getElementById("sound_click"); audio.play();
audio.play();
}
}
}

// MARIO POWERINGUP UPGRADE

function sound_poweringup() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "sm-poweringup.mp3";
 }
}

else {
{
var audio = document.getElementById("sound_poweringup"); audio.play();
audio.play();
audio.volume = 0.1;
}
}
}



