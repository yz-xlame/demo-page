window.onload=function(){

  // banner按钮
  var play=document.getElementsByClassName("play")[0];
  var video=play.getElementsByTagName("video")[0];
  play.onclick=function(){
    play.style.display = "none";
    video.currentTime=0;
    video.pause();
  }
  var play_icon=document.getElementsByClassName("caption-icon")[0];
  play_icon.onclick=function(){
    play.style.display = "block";
    video.play();
  }

  //



}