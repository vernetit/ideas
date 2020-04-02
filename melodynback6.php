<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
  <title>Melody N-back 6</title>

   <meta name="description" content="N-back Music Ear Training">
    <meta name="keywords" content="dual n-back, ear training, working memory">

  <script src='js/jquery.min.js'></script>
  <script src="js/underscore-min.js"></script>  
  <!-- <script src="js/Tone.min.js"></script> -->

  <!-- <script src="js/midi/Base64binary.js" type="text/javascript"></script> -->
  <script src="js/midi/Base64binary.js" type="text/javascript"></script> 
  <script src="js/midi/WebAudioAPI.js" type="text/javascript"></script>
  
  <script src="js/midi/audioDetect.js" type="text/javascript"></script>
  <script src="js/midi/gm.js" type="text/javascript"></script>
  <script src="js/midi/loader.js" type="text/javascript"></script>
  <script src="js/midi/plugin.audiotag.js" type="text/javascript"></script>
  <script src="js/midi/plugin.webaudio.js" type="text/javascript"></script>
  <script src="js/midi/plugin.webmidi.js" type="text/javascript"></script>

  
 <!-- <script src="js/midi/dom_request_xhr.js" type="text/javascript"></script> -->
  <script src="js/midi/dom_request_script.js" type="text/javascript"></script>

  <style type="text/css">

    #canvas {
        height: 400px;
        display:table;
        width:100%;
        z-index: 500;
        
    }

    #canvas11 {

        height:100%;
        display:table-cell;
        vertical-align:middle;
        text-align:center;
        z-index: 1000;
        /*height: 60px;*/
       
        /*width: 60px;*/

    }
    #cnv {

        height:100%;
        display:table-cell;
        vertical-align:middle;
        text-align:center;
        z-index: 1000;
        /*height: 60px;*/
       
        /*width: 60px;*/

    }
    #controls-r{



    }
    #controls-l{


    }

        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            padding: 12px 16px;
           
        }
        .dropdown:hover .dropdown-content {
            display: block;
        }

        #footer {
            position:fixed;
            left: 0px;
            bottom: 0px;
            background-color: gray;
        }


      </style> 
      <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-45359665-5', 'auto');
      ga('send', 'pageview');

    </script>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div id="controls">
<b><span style="font-size: 40px" id="logo-span" class="hide-on-play">𝄞</span> <!--<span style="font-size: 40px">𝄢</span>--></b> 
<a href="#" id="mas" style="text-decoration:none; color: #7D0552;" class="hide-on-play"><b>+</b></a> 
<b><span id="cantidadBack">2</span></b>
<a href="#" id="menos"  style="text-decoration:none; color: #7D0552;" class="hide-on-play"><b>-</b></a>
<b class="back-b">Back</b>&nbsp;
<b>
 <a href="#" id="start" onclick="play(-1)" id="play-btn1" style="text-decoration: none; color: black;" class="hide-on-play">▶</a>
 <a href="#" id="stop1" style="text-decoration: none; color: black;">■</a>
</b>
<span id="tono-span">
  <select id="tone-sel" style="display:none;">
    <option value="-1" selected>random</option>
    <option value="0">C</option>
    <option value="1">C#</option>
    <option value="2">D</option>
    <option value="3">D#</option>
    <option value="4">E</option>
    <option value="5">F</option>
    <option value="6">F#</option>
    <option value="7">G</option>
    <option value="8">G#</option>
    <option value="9">A</option>
    <option value="10">A#</option>
    <option value="11">B</option>
    <option value="12">C</option>
    <option value="13">Db</option>
    <option value="14">D</option>
    <option value="15">Eb</option>
    <option value="16">E</option>
    <option value="17">F</option>
    <option value="18">Gb</option>
    <option value="19">G</option>
    <option value="20">Ab</option>
    <option value="21">A</option>
    <option value="22">Bb</option>
    <option value="23">B</option>
  </select>
</span>
<span id="scale-span" style="/*display:none;*/" class="hide-on-play"></span>
<span id="max-span" class="hide-on-play">
  <select id="max-interval-sel" style="/*display:none;*/">
    <option value="1">m2</option>
    <option value="2">M2</option>
    <option value="3">m3</option>
    <option value="4">M3</option>
    <option value="5" selected>P4</option>
    <option value="6">A4</option>
    <option value="7">P5</option>
    <option value="8">m6</option>
    <option value="9">M6</option>
    <option value="10">m7</option>
    <option value="11">M7</option>
    <option value="12">P8</option>
    <option value="13">m9</option>
    <option value="14">M9</option>
    <option value="15">m10</option>
    <option value="16">M10</option>
    <option value="17">P11</option>
    <option value="18">A11</option>
    <option value="19">P12</option>
    <option value="20">m13</option>
    <option value="21">M13</option>
    <option value="22">m14</option>
    <option value="23">M14</option>
    <option value="24">P15</option>
  </select>
</span>
<span id="quantity-notes-span" class="hide-on-play">
  <select id="quantity-notes-sel">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
    <option value="13">13</option>
    <option value="14">14</option>
    <option value="15">15</option>
    <option value="16">16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="19">19</option>
    <option value="20"  selected>20</option>
    <option value="21">21</option>
    <option value="22">22</option>
    <option value="23">23</option>
    <option value="24">24</option>
    <option value="25">25</option>
    <option value="26">26</option>
    <option value="27">27</option>
    <option value="28">28</option>
    <option value="29">29</option>
    <option value="30">30</option>
    <option value="31">31</option>
    <option value="32">32</option>
    <option value="33">33</option>
    <option value="34">34</option>
  </select>
</span>
<span id="delay-note-span"  class="hide-on-play">
  <select id="delay-note-sel">
    <option value="50">0.05</option>
    <option value="100">0.1</option>
    <option value="150">0.15</option>
    <option value="200">0.2</option>
    <option value="250" selected>0.25</option>
    <option value="300">0.3</option>
    <option value="400">0.4</option>
    <option value="500">0.5</option>
    <option value="600">0.6</option>
    <option value="700">0.7</option>
    <option value="800">0.8</option>
    <option value="900">0.9</option>
    <option value="1000">1</option>
  </select>
</span>
<span id="voice-span">
  <select id="voice-sel" onchange="actualizaVoice();" style="display:none;">
    <option value="1" selected>1 voice</option>
    <option value="2">2 voices</option>
  </select>
</span>
 <span>

  <select id="timeValue" style="/*width: 30px;*/" class="hide-on-play">
    <option value="10">0.1s</option>
    <option value="1000">1s</option>
    <option value="1500">1.5s</option>
    <option value="2000">2</option>
    <option value="2500">2.5s</option>
    <option value="3000" selected>3s</option>
    <option value="3500">3.5s</option>
    <option value="4000">4s</option>
    <option value="4500">4.5s</option>
    <option value="5000">5s</option>
    <option value="5500">5.5s</option>
    <option value="6000">6s</option>
  </select>

  <!-- <input type="text" value="3000" id="timeValue" style="width: 30px;" class="hide-on-play"> -->

 </span>

 <span style="/*display:none;*/">

 </span>
 <select id="tricky" style="width: 45px; display:none;">
    <option value="0" selected>no tricky</option>
    <option value="12">12%</option>
    <option value="25">25%</option>
    <option value="37">37%</option>
    <option value="50">50%</option>
</select>
  <div id="stats-1" style="display: inline;">
 [<span id="pasadas">20</span>]&nbsp;



 <span class="oke">[<span id="ok">0</span>&nbsp;|&nbsp;</span>
 <span class="oke"><span id="error">0</span>]&nbsp;</span>
 </div>

 <span style="display:none;"> %: <input type="text" value="20" id="rndPorcentaje" style="width: 25px;">&nbsp; <!--deffault: 20--> </span>

<span style="display:none;">

rhythm <input type="checkbox" onclick="bRitmo=!bRitmo" checked>

loop <input type="checkbox" onclick="bLoop=!bLoop"1>

</span>

<? /*include "otherNback.php"; */ ?>
<a href="#" onclick="alert('Melody N-Back 6\To learn the n-back trainning please find Brain Workshop tutorial in Google.\nThis software is experimental and may contain errors.\nLicense: MIT\nSource Code: https://github.com/vernetit/ideas/blob/master/melodynback6\nrobertchalean@gmail.com');" class="hide-on-play">?</a>
&nbsp;<div class="fb-share-button" data-href="http://competicionmental.appspot.com/melodynback" data-layout="button_count" style="float: right;"></div>
</div>


<!-- <input type="button" value="Sound" id="mySnd"> -->


<div style=""   id="controls-l"></div>
<div id="cnv111">
  <div id="canvas" style=" height: 600px; background-color: white; z-index: 1000;"> <!-- #eee;" > -->
     <center>
       <table border="1" id="myTable">
         <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d00"></div></td>
           <td  style="width: 290px;"><div id="d10"></div></td>
           <td  style="width: 290px;"><div id="d20"></div></td>
         </tr>
          <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d01"></div></td>
           <td  style="width: 290px;"><div id="d11"></div></td>
           <td  style="width: 290px;"><div id="d21"></div></td>
         </tr>
          <tr style="height: 190px;">
           <td  style="width: 290px;"><div id="d02"></div></td>
           <td  style="width: 290px;"><div id="d12"></div></td>
           <td  style="width: 290px;"><div id="d22"></div></td>
         </tr>
       </table>
     </center>
  </div>
</div>
<div style="" id="controls-r"></div>
<!--
  <div id="resultsList"></div>
  <br><input type="button" name="" value="clear" id="clearResultsList">
</div>
-->
 <!-- Fin Canvas - Resultados -->
<div style="clear: both"></div>
<!-- Botonera -->
<br>
<center>
<div id="controls-div" style="width:700px;">
<input type="button" value="A: Position Match" id="pm" style="font-size: 20px; zoom: 1.2;">

<!--
<input type="button" value="S: vis and n-vis" id="vvm" style="">
<input type="button" value="D: vis and n-audio" id="vam" style="">
<input type="button" value="J: audio and n-vis" id="avm" style="">
<input type="button" value="F: Color Match" id="cm" style="">
<input type="button" value="J: Image Match" id="im" style="">
-->

<input type="button" value="L: Sound Match" id="sm" style="font-size: 20px; zoom: 1.2;">
<input type="button" value="N: Next" id="next-btn" style="display:none;">
</div>
</center>

<div style="clear: both"></div>
<div id="results"></div>
<br>
<div id="preload"></div>

<div id="footer" style="height: 120px; width:100%;">

<div style="float: left; width: 50%; height: 80px;" id="footer-l"><br><center>L</center></div>
<div style="float: left; width: 50%; height: 80px;" id="footer-r"><br><center>R</center></div>
  
</div>

<script type="text/javascript">

arrMidi="C C# D D# E F F# G G# A A# B";
arrMidi=arrMidi.split(" ");

libMidi={};
oct=1;
index=9;

for(i=21;i<=108;i++){

  libMidi[arrMidi[index]+oct]=i;

  index++;

  if(index==12){ index=0; oct++; }
}

console.log(libMidi)


function playNote(note,off,velocity=127){

  //off=0;

  //panToRight();

   var delay = 0; // play one note every quarter second
     // var note = 51; // the MIDI note
      //var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);
      MIDI.noteOn(0, note, velocity, delay);
      MIDI.noteOff(0, note, delay + (off/1000));
}


loaded=0;

window.onload = function () {
  MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {
      loaded=1;
      var delay = 0; // play one note every quarter second
      //var note = 51; // the MIDI note
      // var note = 48; // the MIDI note
      //21 la 
       var note = 21; // the MIDI note
      // var note = 108; // the MIDI note 21 to 108
      var velocity = 127; // how hard the note hits
      // play the note
      MIDI.setVolume(0, 127);
      MIDI.noteOn(0, note, velocity, delay);
      MIDI.noteOff(0, note, delay + .5);
    }
  });
};

bLoop=0;

$("#footer").hide();

/*
$.getScript("js/Tone.min.js");

//create a synth and connect it to the master output (your speakers)
//Tone.Transport.setBpm(130);
var synth = new Tone.Synth();
//var synth = new Tone.MembraneSynth();
var synth1 = new Tone.Synth();
//var panner = new Tone.Panner(-1).toMaster();
panner = new Tone.Panner(0).toMaster();
panner1 = new Tone.Panner(-1).toMaster();
panner2 = new Tone.Panner(1).toMaster();
*/

multiplo=1;
multiploBefore=1;

bRitmo=1;



function actualizaVoice(){

  v=n("voice-sel");
  console.log(v);

  if(v==1){
    $("#quantity-notes-sel").val("4");
    $("#footer-l").hide();
    $("#pm").hide();
    $("#footer-r").html("<br><center>Melody</center>");
    $("#footer-r").css("width","100%");
  }

  if(v==2){
    //$("#quantity-notes-sel").val("2");
    $("#footer-l").show();
    $("#pm").show();
    $("#footer-l").html("<br><center>A</center>");
    $("#footer-r").html("<br><center>L</center>");
    $("#footer-l").css("width","50%");
    $("#footer-r").css("width","50%");
  }
}


//var synth = new Tone.Synth().connect(panner);

//play a middle 'C' for the duration of an 8th note

arr=[-1,0,1];
arr1=["C","D","E","F","G","A","B"]; // D#
allNotes=[];

//tonoArray=[0,1,2,3,4,5,6,7,8,9,10,11,]

z=0;
level=3;
for(let i=0;;){

  sostenido="";
  if(i>0 && allNotes[i-1].length==2 && allNotes[i-1]!="E"+level && allNotes[i-1]!="B"+level && i%12!=0){
    sostenido="#";
  }

  allNotes[i]=arr1[z]+sostenido+level;

  if(sostenido=="#" || allNotes[i]=="E"+level || allNotes[i]=="B"+level)
    z++;

  if(z==7){
    z=0;
    level++;
  }

  if(level==8) break;

  i++;

  if(i==200) break;


}
console.log(allNotes)



//Tone.Panner(-1);
$("#mySnd").click(function(){

  //synth.triggerAttackRelease("C4", "8n").connect(panner);


  
  rndSound();
  
  
})

function rndSound(){
   p=parseInt(arr[_.random(0, 2)]);
   panner2= new Tone.Panner(p).toMaster();
    

    //synth.triggerAttackRelease(arr1[_.random(0,arr1.length-1)]+""+_.random(1,4), "8n").connect(panner2);
    synth.triggerAttackRelease(_.random(20,7000), "8n").connect(panner2);

    //p=parseInt(arr[_.random(0, 2)]);
    //panner2= new Tone.Panner(p).toMaster();

    //synth.triggerAttackRelease(arr1[_.random(0,arr1.length-1)]+""+_.random(1,4), "8n").connect(panner2);

    setTimeout(function(){ rndSound(); },500);

}

//setTimeout(function(){synth.triggerAttackRelease("C5", "8n");},1000);

// rndSound();

var selScale2=0;
function createMelody(){

  scaleNotes=[];
  scaleIntervals=[];
  selScale=n("selected-scale");
  if(selScale==-1){
    if(currentPasada==0){
      selScale=_.random(0,arrayScales.length-1); 
      selScale2=selScale;
    }
    else
      selScale=selScale2
  }
  scaleForm=arrayScales[selScale][1];

  //console.log(arrayScales[selScale][0]);

  arrayScaleForm=scaleForm.split(" ");

  //detecto intervalos de la escala
  for(let i=0;i<arrayScaleForm.length;i++){

    if(arrayScaleForm[i]=="1/2") d=1;
    if(arrayScaleForm[i]=="1") d=2;
    if(arrayScaleForm[i]=="1½") d=3;
    if(arrayScaleForm[i]=="2") d=4;

    scaleIntervals[i]=d;

  }

  firstNote=n("tone-sel");
  if(firstNote==-1){
    firstNote=_.random(0,23);
  }
  if(firstNote>=12) firstNote-=12;

  //2,2,1,2,2,2, 1
  //      a b


  //saco las notas de la escala
  var level=0, next=-1, firstNext=-1;

  for(let i=0,x=0,z=0;i<allNotes.length;i++){
    if(i>=firstNote){
      if(x==0 || i==next || i==firstNext){
        if(i==firstNext){
          z=0;
        }
        if(x==0 || i==firstNext){
          firstNext=i+12;
        }
        
        scaleNotes[x]=allNotes[i];
        x++;
        if(z<scaleIntervals.length){
          next=i+scaleIntervals[z];
          z++;
        }
        
      }
    }
  }

  rnd=_.random(0,scaleNotes.length-1)
  firstNote=scaleNotes[rnd];
  maxInterval=n("max-interval-sel");
  maxCantidadNotas=n("quantity-notes-sel");

  myMelody="";
  myMelody+=firstNote+" ";
  arrMelody=[];
  arrMelody[0]=firstNote;

  z=1; 
  for(let i=0; i<maxCantidadNotas-1;i++){
    x=0;
    for(;;){

      num=_.random(1,maxInterval);
      if(_.random(0,1)) 
        next=rnd+num;
      else
        next=rnd-num;

      if(next>=0 && next<=scaleNotes.length && typeof scaleNotes[next] !== "undefined" && arrMelody[z-1]!=scaleNotes[next]){

          if(getDistance(arrMelody[z-1],scaleNotes[next])<=maxInterval){
            //console.log("pass");
            break;
          }
        
      }

      if(x>=100){
        next=_.random(0,scaleNotes.length-1);
        console.log("prevent error");

        break;
      }
      x++;


    }

    myMelody+=scaleNotes[next]+" ";
    arrMelody[z]=scaleNotes[next];
    z++;
  }

  //genero melodía



  //alert(scaleIntervals);
  //alert(scaleNotes);
  //alert(myMelody);

  //console.log(myMelody);

  return myMelody;
}

currentMelody="";
melodyIndex=0;
melodyIndex1=0;
melodyArray=[];
melodyArray1=[];
finishMelody=0;

arrayRitmo=[];
arrayRitmo1=[];

arrayRitmo2D=[];
arrayRitmo2D1=[];

total_time=0;

//este es el que se usa
function playMelody(x,_y){


  if(x==0){
    console.log(_y);

    melodyArray=[];

    /*
    currentMelody=x;
    melodyArray=[];*/
   
    melodyIndex=0;
    melodyArray=_y.split(" ");

   
     

  }

  //console.log(melodyArray[melodyIndex])

  //console.log("hola")

  // multiplo=1;
  // if(bRitmo && _.random(0,1) ){ multiplo=0.5; /*console.log("multiplo"); */} 
  
  if(x==0){
  
   // synth1.triggerAttackRelease("A4", n("delay-note-sel")/1000 * arrayRitmo1[melodyIndex] ).connect(panner2);

  }
  // synth.triggerAttackRelease(melodyArray[melodyIndex].toString(), n("delay-note-sel")/1000 * arrayRitmo1[melodyIndex] ).connect(panner);  
  
  playNote( libMidi[ melodyArray[melodyIndex] ]  , n("delay-note-sel")/1000 * arrayRitmo1[melodyIndex] ,127);

  melodyIndex++;

  if(melodyIndex<melodyArray.length-1){

    
    setTimeout(function(){
    
      playMelody(1,"");


    },n("delay-note-sel") * arrayRitmo1[melodyIndex-1] )
    /*
    setTimeout(function(index){
      return function() {  console.log(voiceSelected); playMelody(1,"",voiceSelected); }
    }(voiceSelected), n("delay-note-sel"));*/


  }
}
function playMelody1(x,_y){


  if(x==0){
    melodyArray1=[];

    console.log(_y);

    /*
    currentMelody=x;
    melodyArray=[];*/
   
    melodyIndex1=0;
    melodyArray1=_y.split(" ");
    console.log(melodyArray1);

    // arrayRitmo2D=[];

   
     
  }

  //console.log(melodyArray[melodyIndex])

  // multiplo=1;
  // if(bRitmo && _.random(0,1) ){ multiplo=0.5; console.log("multiplo"); } 
  
  //synth1.triggerAttackRelease(melodyArray1[melodyIndex1].toString(), n("delay-note-sel")/1000 * arrayRitmo[melodyIndex1] ).connect(panner1);     
  //synth1.triggerAttackRelease(melodyArray1[melodyIndex1], "8n").connect(panner1);     

  playNote( libMidi[ melodyArray[melodyIndex] ]  ,n("delay-note-sel")/1000 * arrayRitmo[melodyIndex1], 127 );

  melodyIndex1++;

  if(melodyIndex1<melodyArray1.length-1){

    
    setTimeout(function(){
    
      playMelody1(1,"");


    },n("delay-note-sel") * arrayRitmo[melodyIndex1-1] )
    /*
    setTimeout(function(index){
      return function() {  console.log(voiceSelected); playMelody(1,"",voiceSelected); }
    }(voiceSelected), n("delay-note-sel"));*/


  }
}
function playMelody2(x,y){

  if(x==0){


    /*
    currentMelody=x;
    melodyArray=[];*/
   
    melodyIndex=0;
    melodyArray=y.split(" ");
    console.log(melodyArray);
     

  }

  //console.log(melodyArray[melodyIndex])
  
  //synth.triggerAttackRelease(melodyArray[melodyIndex], n("delay-note-sel")/1000 * arrayRitmo1[melodyIndex] ).connect(panner2);     
  playNote( libMidi[ melodyArray[melodyIndex] ]  ,currentDelayRitmo/1000,127);

  melodyIndex++;

  if(melodyIndex<melodyArray.length-1){

    
    setTimeout(function(){
    
      playMelody2(1,"");


    },n("delay-note-sel")  * arrayRitmo1[melodyIndex-1]  )
    /*
    setTimeout(function(index){
      return function() {  console.log(voiceSelected); playMelody(1,"",voiceSelected); }
    }(voiceSelected), n("delay-note-sel"));*/


  }
}


$("#resultsList").hide();

$("#loading").hide();
//$("#controls-div").hide();
$("#stop1").hide();
$("#clearResultsList").hide();


function n(x){ return parseInt($("#"+x).val()); }

bMobile=0;
if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
  bMobile=1;
  $(".fb-share-button").hide();
} 


arrayImages=[];
arrayImages1=[];
arrayImages2=[];
arrayPreloadImages=[];

zPreload=0;
imgLoadedCount=0;

bOnGame=0;

var tcAct=0;
var cAct=0, iAct=0, sAct=1;
var salidas = [], salidas1 = [],cantidadBack=2, pasadas=36, currentPasada=0;
var bIntroducir=0, bIntroducir1=0, bIntroducir2=0, bIntroducir3=0, bIntroducir4=0, bIntroducir5=0;
var ok=0, ok1=0, ok2=0, ok3=0, ok4=0, ok5=0;
var error=0 , error1=0, error2=0, error3=0, error4=0, error5=0, mismo=0,mismo1=0, mismo2=0,mismo3=0,mismo4=0,mismo5=0;
var killInterval,myInterval,killCamera;
var bOk=0,bOk1=0,bOk2=0,bOk3=0,bOk4=0,bOk5=0;
var arrayImagenes=[];
var acumuladorSuma=0;

function actualizarOk(){
  $("#ok").html(parseInt(ok)+parseInt(ok1)+parseInt(ok2)+parseInt(ok3));
}

function actualizarErrores(){
  $("#error").html(parseInt(error)+parseInt(error1)+parseInt(error2)+parseInt(error2));
}

var perdidas=0;
var cantidadElementos=3;
var cantidadLoci=2;

var bVariable=1;
var currentVariable=1;
var realCantidadBack=1;
var sel=0;
var max=0;
var kill2;
var kill3;
var time;
var bMismo=0;
var posibleMismo="";
var tricky=37;
var melodyArrayTotal=[];

var synth,synth1,panner,panner1,panner2;

function waitThenRun(objectToWaitFor, callback) {
    var interval = setInterval(function() {
        if (window[objectToWaitFor] == 1) {
            clearInterval(interval);
            callback();
        }
    });            
}


ritmoArrayTotal=[];


function play(_xxx){

  
  if(_xxx==-1){

     //$.getScript("js/Tone.min.js");
    //var script = document.createElement('script');
    //script.setAttribute('type', 'text/javascript');
    //script.setAttribute('src', 'js/Tone.min.js');
    //document.head.appspotendChild(script);

    if(!loaded) $("#d11").html("<center>Loading...</center>");

    $(".hide-on-play").hide();

    waitThenRun("loaded", function() {
      $("#d11").html("");
      play(0);

    });

    //setTimeout(function(){  },100);

    return;
  }

  if(_xxx==0){

    if(bOnGame)
      return;

    $(".hide-on-play").hide();

    if(!bMobile) $("#stats-1").css("float","right");

    ritmoArrayTotal=[];

    //create a synth and connect it to the master output (your speakers)
    //Tone.Transport.setBpm(130);
    //synth = new Tone.Synth();
    //var synth = new Tone.MembraneSynth();
    //synth1 = new Tone.Synth();
    //var panner = new Tone.Panner(-1).toMaster();
    //panner = new Tone.Panner(0).toMaster();
    //panner1 = new Tone.Panner(-1).toMaster();
    //panner2 = new Tone.Panner(1).toMaster();

    $("#d11").html("");

    bVariable=n("isVariable");
    tricky=n("tricky")

    arrayRitmo2D=[];
    arrayRitmo2D1=[];

    cantidadElementos=n("cantidadElementos");
    cantidadLoci=n("cantidadLoci");

    realCantidadBack=parseInt($("#cantidadBack").html());
    //console.log(realCantidadBack);

    cantidadBack=realCantidadBack;
    currentVariable=cantidadBack;

    $("#stop1").show();

    $("#resultsList").hide();
    
    bOnGame=1;

    imgLoadedCount=0;

    //$("#preload").show(); 
      //$("#loading").show(); 
      //$("#controls-div").hide();

      rndPorcentaje=parseInt($("#rndPorcentaje").val());

    salidas=[]; 
     salidas1=[]; 
  

    currentPasada=0;
    pasadas = 20 + (cantidadBack-1) * 6;  

    ok=0; ok1=0; ok2=0; ok3=0; ok4=0; ok5=0;
    error=0; error1=0; error2=0; error3=0; error4=0; error5=0;

    myInterval=parseInt($("#timeValue").val());
    myInterval1=parseInt($("#timeValue1").val());

    clearTimeout(killInterval); 
    
    clearInterval(kill2); 
    clearInterval(kill3); 

    bOk=0; bOk1=0; bOk2=0; bOk3=0; bOk4=0; bOk5=0;
    mismo=0; mismo1=0; mismo2=0; mismo3=0; mismo4=0; mismo5=0;

    arrayImages=[];
    arrayImages1=[];
    arrayPreloadImages=[];

    zPreload=0;
    imgLoadedCount=0;

    $("#error").html(parseInt(error)+parseInt(error1));
    $("#ok").html(parseInt(ok)+parseInt(ok1));
    $("#results").html(""); 

    melodyArrayTotal=[];
    

    for(i=0;i<8;i++){

      for(;;){

        new_melody=createMelody();

        if(i==0){
          break;
        }else{
          bSeguir=0;
          for(j=0;j<melodyArrayTotal.length;j++){
            if(j!=i && new_melody==melodyArrayTotal[j]){ bSeguir=1; }
          }//for

        }//if 

        if(!bSeguir) break;

      }//for(;;)

      melodyArrayTotal[i]=new_melody;

    }
    console.log(melodyArrayTotal);

    ritmoArrayTotal=[];
    

    for(i=0;i<8;i++){

      new_ritmo=[];

      for(j=0;j<n("quantity-notes-sel");j++){
        if(_.random(0,1)) new_ritmo[j]=1; else new_ritmo[j]=0.5;
      }

      ritmoArrayTotal[i]=_.extend(new_ritmo);

    }

    console.log(ritmoArrayTotal);

    t_ini = Date.now();

     //arrayImages1=[0,1,2,3,4,5,6,7,8,9];

  }//end x==0

  _maxCantidadNotas=n("quantity-notes-sel");

  bOnGame=1; 

  bIntroducir=0; bIntroducir1=0; bIntroducir2=0; bIntroducir3=0; bIntroducir4=0; bIntroducir5=0;  

   //position match error
   
   if(currentPasada>cantidadBack && bOk==0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack;

      if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
        //console.log("e pm");
         error++;
          $("#pm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#pm").css("color","black"); },300);
      }
   }
   bOk=0;
   

   //sound match error
   if(currentPasada>cantidadBack && bOk1==0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack;

      if(salidas1[_s]==salidas1[_b]){
         error1++;
         $("#sm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#sm").css("color","black"); },300);
      }
   }
   bOk1=0;


  //Loci match error
  /*
  if(currentPasada>cantidadBack && bOk==0){

      _s=currentPasada-1;
      _b=currentPasada-1-cantidadBack;

      comparar=-1; comparar1=-1; comparar2=-1;

      if(cantidadLoci==2)
       comparar=salidas[_b][1];

     if(cantidadLoci==3){
       comparar=salidas[_b][1];
       comparar1=salidas[_b][2];
     }

     if(cantidadLoci==4){
       comparar=salidas[_b][1];
       comparar1=salidas[_b][2];
       comparar2=salidas[_b][3];
     }

     if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==comparar && salidas[_s][2]==comparar1 && salidas[_s][3]==comparar2){
        //console.log("e pm");
         //error++;
         $("#pm").css("color","red");
         actualizarErrores();
         setTimeout(function(){ $("#pm").css("color","black"); },500);
     }
    }
  bOk=0;

  //Number match error
  if(currentPasada>cantidadBack && bOk1==0 && sAct>0){

    _s=currentPasada-1;
    _b=currentPasada-1-cantidadBack;

    comparar=-1; comparar1=-1; comparar2=-1; comparar3=-1; comparar4=-1; comparar5=-1; comparar6=-1;

     if(cantidadElementos==2)
       comparar=salidas1[_b][1];

     if(cantidadElementos==3){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
     }

     if(cantidadElementos==4){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
     }

     if(cantidadElementos==5){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
     }

     if(cantidadElementos==6){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
     }

     if(cantidadElementos==7){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
       comparar5=salidas1[_b][6];
     }

    if(cantidadElementos==8){
       comparar=salidas1[_b][1];
       comparar1=salidas1[_b][2];
       comparar2=salidas1[_b][3];
       comparar3=salidas1[_b][4];
       comparar4=salidas1[_b][5];
       comparar5=salidas1[_b][6];
       comparar6=salidas1[_b][7];
     }

    if(salidas1[_s][0]==salidas1[_b][0] && salidas1[_s][1]==comparar && salidas1[_s][2]==comparar1 && salidas1[_s][3]==comparar2 && salidas1[_s][4]==comparar3  && salidas1[_s][5]==comparar4  && salidas1[_s][6]==comparar5  && salidas1[_s][7]==comparar6){
       error1++;
       $("#sm").css("color","red");
       actualizarErrores();
       setTimeout(function(){ $("#sm").css("color","black"); },500);
    }
  }*/
  bOk1=0;

  if(pasadas==0){
    t_fin = Date.now();
   

     $("#stop1").hide();
     //$("#resultsList").show();

      total_p = ok + error;
      total_s =  ok1 + error1;
      total_i = ok2 + error2;
      total_c = ok3 + error3;
      //tc  
      total_va = ok4 + error4;
      total_av = ok5 + error5;


      total_ps = total_p + total_s + total_i + total_c + total_va + total_av;
      total_ok = ok + ok1 + ok2 + ok3 + ok4 + ok5;

      if(total_ps==0)
        total_ps=1;

      porcentaje_ok = (total_ok * 100)/total_ps;
      porcentaje_ok = Math.round(porcentaje_ok);

      //agregarResultado(cantidadBack,porcentaje_ok);

      recomendacion="Same level";
      if(porcentaje_ok>=75){
         recomendacion="Level augmented";
         cantidadBack++;
         pasadas = 20 + (cantidadBack-1) * 6;
         $("#cantidadBack").html(cantidadBack);
         $("#pasadas").html(pasadas);
      
      }
      if(porcentaje_ok<75 && porcentaje_ok>=50){
         recomendacion="Keep on the same level";
         perdidas=0;
      }
      if(porcentaje_ok<50){
         perdidas++;
         recomendacion="If persist in this Score is recomended decrease the level. Low score count: " + perdidas; //decrease
      }

      //ok=1; ok1=1; ok2=1; ok3=1; error=1; error1=1; error2=1; error3=1;  

      positionTxt = ""; soundTxt = ""; imageTxt= ""; colorTxt=""; vaTxt=""; avTxt="";
      if(ok!=0 || error!=0){

        positionTxt="Position: "+ok+"-"+error;

      }
      if(ok1!=0 || error1!=0){

        soundTxt="Sound: "+ok1+"-"+error1;

      }

       if(ok2!=0 || error2!=0){

        imageTxt="images: "+ok2+"-"+error2;
      }
      if(ok3!=0 || error3!=0){

        colorTxt = "colors: "+ok3+"-"+error3;
      }
      if(ok4!=0 || error4!=0){

        vaTxt = "vis & n-audio: "+ok4+"-"+error4;
      }
      if(ok5!=0 || error5!=0){

        avTxt = "audio & n-vis: "+ok5+"-"+error5;
      }
      sumaTxtTxt="";
      if(iAct==4){
        sumaTxtTxt=" Sum of numbers= " + acumuladorSuma + "<br>";
      }


     t_dif = t_fin - t_ini;
     total_time+=t_dif;


      txt=/*"<h3>Results</h3>" +*/ positionTxt + " " + soundTxt + " " + imageTxt + " " + colorTxt + " " + vaTxt + " " + avTxt + "<br>" + sumaTxtTxt +
         "Score: "+ porcentaje_ok + "%<br>" /*+ recomendacion*/ + " [" + getDuration(total_time) + "]";

      // $("#results").html(txt);
      $("#d11").html(txt);

      $(".hide-on-play").show();
      if(bMobile) $("#scale-span").hide();
      if(!bMobile) $("#stats-1").css("float","");

      //$("#canvas").html(`<div id="canvas11">Hello!<br>Here the instructions of the original nback game to guide you in locinback: <a href="http://brainworkshop.sourceforge.net/tutorial.html">http://brainworkshop.sourceforge.net/tutorial.html</a></div>`);

      bOnGame=0;

      //$("html, body").animate({ scrollTop: $(document).height() }, 1000);

      //limpiar();

       clearTimeout(killInterval);
      clearTimeout(kill2);
      clearTimeout(kill3);

      if(bLoop){
        setTimeout(function(){
          play(0);
        },7000);
      }

      return;

   }

   /*
    if(bVariable==1){
    
      currentVariable=_.random(1,realCantidadBack);
      //console.log(realCantidadBack);
      cantidadBack=currentVariable;

    }*/

    /*

   _r=_.random(1,100);
   //console.log(_r);

   //Position
  
   _txt="misma";
   if(currentPasada>cantidadBack && _r<=rndPorcentaje){
      _poner = currentPasada-cantidadBack;
      __x=salidas[_poner][0];
      __y=salidas[_poner][1];
  
      mismo++;
     
   }else{
      _txt="random";
   

      for(;;){
       
         __x = _.random(0,2);
         __y = _.random(0,2);
         
         
         if(__x!=1 || __y!=1){
            if(currentPasada>cantidadBack){

               if(__x!=salidas[currentPasada-cantidadBack][0] && __y!=salidas[currentPasada-cantidadBack][1]){
                  break;
               }
            }else{

              
               if(currentPasada>0){
                   if(_x!=salidas[currentPasada-1][0] && _y!=salidas[currentPasada-1][1] && _z!=salidas[currentPasada-1][2])
                     break;

               }
               if(currentPasada==0)
                  break; 


            }
              
         }
         
       // break;
      }//for  
   }//currentPasada>cantidadBack
   */


   /////////////////////////////////////////////////////////////////////////////

    //Sound 0
  _r=_.random(1,100);;
  _txt="misma";

  //Position
   _txt="misma";
   if((currentPasada>( /*viejoPasadas + */cantidadBack)  && _r<=rndPorcentaje)/* || currentPasada==2 */){
      _poner = currentPasada-cantidadBack;

      __x=salidas[_poner][0];
      __y=salidas[_poner][1];
  
      mismo++;
     
   }else{
      _txt="random";  

      _count=0;

      for(;;){
       
         __x = _.random(0,2);
         __y = _.random(0,2);

          if(_.random(1,100)<=tricky && tricky!=0 && cantidadBack!=1 && currentPasada-2>=0){
            rnd_position=_.random(currentPasada-2,currentPasada-1)
            __x=salidas[rnd_position][0];
            __y=salidas[rnd_position][1];
            console.log("tricky n-back A");
          }

         if(__x == 1 && __y==1) continue;

         // console.log(__x+"-"+__y)

         //console.log(_count);

         _count++;

         if(_count==100) break;
                  
         if(__x!=1 || __y!=1){
            if( currentPasada > ( /* viejoPasadas +*/ cantidadBack)  ){
              // console.log(currentPasada-cantidadBack+""+cantidadBack)
              // console.log(currentPasada-1)

              //console.log(currentPasada+"-"+cantidadBack+"-"+viejoPasadas)

               if( ( __x!=salidas[currentPasada-cantidadBack][0] || __y!=salidas[currentPasada-cantidadBack][1] ) && ( __x!=salidas[currentPasada-1][0] || __y!=salidas[currentPasada-1][1] )  ){
                  break;
               }
            }else{

               /*
               if(currentPasada>0){
                   if(_x!=salidas[currentPasada-1][0] && _y!=salidas[currentPasada-1][1] && _z!=salidas[currentPasada-1][2])
                     break;

               }
               if(currentPasada==0)*/

                if(currentPasada==0 /*|| ( __x!=salidas[currentPasada-1][0] && __y!=salidas[currentPasada-1][1] ) */)
                  break; 


            }
              
         }
         
       // break;
      }//for  
   }//currentPasada>cantidadBack

   //Sound 1
  _r=_.random(1,100);;
  _txt="misma";

  if((currentPasada>cantidadBack && _r<=rndPorcentaje)/* || currentPasada==2*/){

    _poner = currentPasada-cantidadBack;

    _myImagen1=salidas1[_poner];

    arrayRitmo1=[];
    arrayRitmo1 = _.extend(arrayRitmo2D1[_poner]);
    arrayRitmo2D1[currentPasada] = _.extend(arrayRitmo1);
      
    mismo1++; bMismo=1;

    //console.log("vis & n-vis: " + _myImagen + "-" + _myImagen2 + "-" + _myImagen3);   
   }else{//currentPasada>cantidadBack
      _txt="random";
      
      contador=0;

       

       /*
        for(i=0;i<_maxCantidadNotas;i++){
          if(bRitmo){
            multiplicar=1;
            rnd_test=_.random(0,1);
            //if(rnd_test==0) multiplicar=0.5;
            // if(rnd_test==1) multiplicar=0.25;
            
            arrayRitmo1[i]=multiplicar;

          }else{
            arrayRitmo1[i]=1;
            

          }
        }*/
         


      /*
      bMismo=0;

      _pon = currentPasada-cantidadBack;

      if(currentPasada>cantidadBack)
        posibleMismo = salidas1[_pon];
      else
        posibleMismo = _.random(0,9)+""+_.random(0,9);*/


      for(;;){
          myRnd=_.random(0,7);
         _myImagen1=melodyArrayTotal[myRnd];

         arrayRitmo2D1[currentPasada]=[];

        arrayRitmo2D1[currentPasada]=_.extend(ritmoArrayTotal[myRnd]);

        arrayRitmo1=_.extend(ritmoArrayTotal[myRnd]);


          if(_.random(1,100)<=tricky && tricky!=0 && cantidadBack!=1 && currentPasada-2>=0){
            _myImagen1=salidas1[_.random(currentPasada-2,currentPasada-1)];
          
            console.log("tricky n-back L");
          }




         //checkear
         if(currentPasada>cantidadBack){
            if(!(_myImagen1===salidas1[currentPasada-cantidadBack])){
              break; 

            }
                      
         }else{
               break;

         }
          
           //break;
      }//for  
   }//currentPasada>cantidadBack


    
   //salidas[currentPasada]=[];

   //console.log(salidas[currentPasada])
/*
   salidas[currentPasada][0] = __x;
   salidas[currentPasada][1] = __y;
*/
   //console.log(currentPasada+"-"+__x+"-"+__y+"-"+ salidas[currentPasada][1]);
   //console.log(salidas[currentPasada][1]);

   /*
   salidas1[currentPasada]=[];*/

    salidas[currentPasada]=[];

   //console.log(salidas[currentPasada])


   /*if(empezar)*/ delaySalida=300;

   salidas[currentPasada][0] = __x;
   salidas[currentPasada][1] = __y;

  $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html(`<center><b><span style="font-size: 50px;">O</span></b></center>`);


   salidas1[currentPasada]=_myImagen1;

   // console.log(arrayRitmo2D);
   // console.log(_myImagen);

   //if(n("voice-sel")==1){
   // console.log("voice 1");

    playMelody(0,_myImagen1);

   //}
    

  

  if(n("voice-sel")==2){
    //console.log(_myImagen+"-"+_myImagen1)
   
   // playMelody1(0,_myImagen);
   // playMelody2(0,_myImagen1);

  }
  


   /*
  bRespuesta=0;
  test=0;
  

  at=n("at-sel");
  //test=0;

  max=n("milis-val");

  time=n("tt"+(test+1));

  p="+";

  $("#d"+ salidas[currentPasada][0] + "" + salidas[currentPasada][1] ).html("<center><b>"+p+"</b></center>");

  kill2=setTimeout(function(){ muestra(); },300);*/
    
   bIntroducir=1; bIntroducir1=1; bIntroducir2=1; bIntroducir3=1;  bIntroducir4=1;  bIntroducir5=1;
   pasadas--;

   $("#pasadas").html(pasadas);

  killInterval = setTimeout(function(){ currentPasada++; play(1);},myInterval);
  kill4=setTimeout(function(){ limpiar(); },myInterval-500);
   

}//en play()


function limpiar(){
  
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      $(`#d${j}${i}`).html("");
    }
  }

}

$(document).keypress(function(e) {
  //console.log("");

  console.log("key" + e.which);

  if(!bOnGame) return;

    
    if(e.which==97){

         if(bIntroducir){
            
            if(currentPasada+1>cantidadBack){
                console.log("A");
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
                  bOk=1;
                  ok++;
                  $("#ok").html(ok);
                  actualizarOk();
                  $("#pm").css("color","green");
                  //console.log("ok");

                  
                }else{
                  $("#pm").css("color","red");

                  console.log("error");
                  error++;
                  bOk=1;
                  //$("#error").html(error);
                  actualizarErrores();

                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir=0;
         setTimeout(function(){ $("#pm").css("color","black"); },300);
      }
      

       //Number letter L
       if(e.which==108){

         if(bIntroducir1 && sAct>0){
            
            
            if(currentPasada+1>cantidadBack){
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas1[_s]==salidas1[_b]){
                  bOk1=1;
                  ok1++;
                  //$("#ok").html(parseInt(ok)+parseInt(ok1));
                  actualizarOk();
                  $("#sm").css("color","green");
                  //console.log("ok-s");

                  
                }else{
                  $("#sm").css("color","red");

                  //console.log("error-s");
                  error1++;
                  bOk1=1;
                  //$("#error").html(parseInt(error)+parseInt(error1));
                  actualizarErrores();


                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir1=0;
         setTimeout(function(){ $("#sm").css("color","black"); },300);
       }//wiich l

  //console.log(e.which);
});//on keypress


$("#mas").click(function(){
      cantidadBack++;
      pasadas = 20 + (cantidadBack-1) * 6;
      $("#cantidadBack").html(cantidadBack);
      $("#pasadas").html(pasadas);
      clearTimeout(killInterval);
      clearTimeout(kill2);
    clearTimeout(kill3);
      perdidas=0;
      

   });
   $("#menos").click(function(){
      if(cantidadBack==1)
         return;
       perdidas=0;
      cantidadBack--;
      pasadas = 20 + (cantidadBack-1) * 6;
      $("#cantidadBack").html(cantidadBack);
      $("#pasadas").html(pasadas);
      clearTimeout(killInterval);
      clearTimeout(kill2);
    clearTimeout(kill3);

   });

   //Match Buttons

   $("#pm, #footer-l").click(function(){
     

    if(bIntroducir){
            
            if(currentPasada+1>cantidadBack){
                console.log("A");
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas[_s][0]==salidas[_b][0] && salidas[_s][1]==salidas[_b][1]){
                  bOk=1;
                  ok++;
                  $("#ok").html(ok);
                  actualizarOk();
                 // $("#pm").css("color","green");
                  //console.log("ok");

                  
                }else{
                 // $("#pm").css("color","red");

                  console.log("error");
                  error++;
                  bOk=1;
                  //$("#error").html(error);
                  actualizarErrores();

                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir=0;
         setTimeout(function(){ $("#pm").css("color","black"); },300);
  

   });

   $("#sm, #controls-r, #footer-r").click(function(){


         if(bIntroducir1){
            
            if(currentPasada+1>cantidadBack){
               //console.log(bIntroducir);
                _s=currentPasada;
                _b=currentPasada-cantidadBack;

                if(salidas1[_s]==salidas1[_b]){
                  bOk1=1;
                  ok1++;
                  //$("#ok").html(parseInt(ok)+parseInt(ok1));
                  actualizarOk();
                  $("#sm").css("color","green");
                  //console.log("ok-s");

                  
                }else{
                  $("#sm").css("color","red");

                  //console.log("error-s");
                  error1++;
                  bOk1=1;
                  //$("#error").html(parseInt(error)+parseInt(error1));
                  actualizarErrores();


                } //si coincide
            }//pasadas>cantidadBack
         }//bIntroducir
         bIntroducir1=0;
         setTimeout(function(){ $("#sm").css("color","black"); },300);

});

$("#stop1").click(function(){
    $(".hide-on-play").show();
    if(!bMobile) $("#stats-1").css("float","");
    if(bMobile) $("#scale-span").hide();
    $("#stop1").hide();
    clearTimeout(killInterval);
    clearTimeout(kill2);
    clearTimeout(kill3);
    bOnGame=0;

});



if(bMobile==1){

    _ww=$(window).width();
    _wh=$(window).height();

    $("#logo-span").html(``);
    //$("#logo-span").hide()
    $(".back-b").html("")

    $("#canvas").css("margin-top","10px");

     $("#stats-1").css("float","right");
   

    $("#controls-div").hide();

    if(_ww<=1000){
      $("#footer").show();
      $("#scale-span").hide();
      $("#myTable td").css("width", "90px");
      $("#myTable tr").css("height", "90px");

      
    }else{
      _cw = (_ww - canvas.width)/2-20;

      imagenDimension=500;

     //$("#controls-l").css("width",_cw+"px"); 
     $("#controls-l").css("width","70px"); 
     $("#controls-l").css("height",_wh+"px"); 
     $("#controls-l").css("display","flex");  
     //$("#controls-l").css("z-index","10000");

      //$("#controls-r").css("width",_cw+"px"); 
      $("#controls-r").css("width","70px"); 
      $("#controls-r").css("height",_wh+"px"); 
      $("#controls-r").css("display","flex"); 
     // $("#controls-r").css("z-index","10000");
      
      
      $("#controls-l").html(`<div style="align-self: center; margin-left: 30%;">A</div>`);
      $("#controls-r").html(`<div style="align-self: center; margin-left: 40%;">S</div>`);

     // $("#controls-l").hide();

      $("#cnv111").css("float","left");


    }
    
}

function getDistance(x,y){

  x1=0;
  for(let i=0;i<allNotes.length;i++){
    if(allNotes[i]==x){
      x1=i; break;
    }

  }
  x2=0;
  for(let i=0;i<allNotes.length;i++){
    if(allNotes[i]==y){
      x2=i; break;
    }
  }

  //console.log(x1-x2);

  return Math.abs(x1-x2);
}

arrayScales=[
["Major","1 1 1/2 1 1 1"],
["Pentatonic Major","1 1 1½ 1"],
["Blues Major","1½ 1 ½ ½ 1"],
["Minor","1 ½ 1 1 ½ 1"],
["Melodic Minor","1 ½ 1 1 1 1"],
["Armonic Minor","1 ½ 1 1 ½ 1½"],
["Pentatonic Minor","1½ 1 1 1½"],
["Blues Minor","1½ 1 ½ ½ 1½"],
["Augmented","1½ ½ 1½ ½ 1½"],
["Be-Bop","1 1 1½ 1 1 ½ ½"],
["Chromatic","½ ½ ½ ½ ½ ½ ½ ½ ½ ½ ½"],
["Whole-Half","1 ½ 1 ½ 1 ½ 1"],
["Half-Whole","½ 1 ½ 1 ½ 1 ½"],
["Whole Tone","1 1 1 1 1"],
["Augmented fifth","1 1 ½ 1 ½ ½ 1"],
["Algerian","1 ½ 1½ ½ ½ 1½"],
["Arabian","1 1 ½ ½ 1 1"],
["Balinese","½ 1 2 ½"],
["Bartok","1 1 1 ½ 1 ½"],
["Byzantine","½ 1½ ½ 1 ½ 1½"],
["Chinese","1 1 1½ 1"],
["Egyptian","1 1½ 1 1½"],
["Enigmatic","½ 1½ 1 1 1 ½"],
["Spanish","½ 1½ ½ 1 ½ 1"],
["Spanish 8 Tone","½ 1 ½ ½ ½ 1 1"],
["Ethiopian","1 ½ 1 1 ½ 1"],
["Gypsy","½ 1½ ½ 1 1 ½"],
["Hungarian Gypsy","1 ½ 1½ ½ ½ 1"],
["Hindu","1 1 ½ 1 ½ 1"],
["Iwato","½ 2 ½ 2"],
["Japanese","½ 2 1 ½"],
["Javanese","½ 1 1 1 1 ½"],
["Jewish","½ 1½ ½ 1 ½ 1"],
["Hawaiian","1 ½ 1 1 1 1"],
["Hirajoshi","1 ½ 2 ½"],
["Hungarian Minor","1 ½ 1½ ½ ½ 1½"],
["Hungarian Major","1½ ½ 1 ½ 1 ½"],
["Kumoi","½ 2 1 ½"],
["Leading Whole Tone","1 1 1 1 1 ½"],
["Mohammedan","1 ½ 1 1 ½ 1½"],
["Mongolian","1 1 1½ 1"],
["Neapolitan Minor","½ 1 1 1 ½ 1½"],
["Neapolitan Major","½ 1 1 1 1 1"],
["Oriental","½ 1½ ½ ½ 1½ ½"],
["Overtone","1 1 1 ½ 1 ½"],
["Pelog","½ 1 2 1½"],
["Persian","½ 1½ ½ ½ 1 1½"],
["Ionian","1 1 ½ 1 1 1"],
["Dorian","1 ½ 1 1 1 ½"],
["Phrygian","½ 1 1 1 ½ 1"],
["Lydian","1 1 1 ½ 1 1"],
["Mixolydian","1 1 ½ 1 1 ½"],
["Aeolian","1 ½ 1 1 ½ 1"],
["Locrian","½ 1 1 ½ 1 1"],
["Ionian Harmonic","1 ½ 1 1 ½ 1½"],
["Locrian Nat 6 Mode","½ 1 1 ½ 1½ ½"],
["Major Sharp 5 Mode","1 1 ½ 1½ ½ 1"],
["Dorian Sharp 4 Mode","1 ½ 1½ ½ 1 ½"],
["Phrygian Major Mode","½ 1½ ½ 1 ½ 1"],
["Lydian Sharp 2 Mode","1½ ½ 1 ½ 1 1"],
["Superlocrian Double Flat 7 Mode","½ 1 ½ 1 1 ½"],
["Jazz Minor Mode","1 ½ 1 1 1 1"],
["Dorian b2 Minor Mode","½ 1 1 1 1 1"],
["Lydian Augmented Minor Mode","1 1 1 1 ½ 1"],
["Lydian Flat 7 Minor Mode","1 1 1 ½ 1 ½"],
["Mixolydian Flat 6 Minor Mode","1 1 ½ 1 ½ 1"],
["Locrian Sharp 2 Minor Mode","1 ½ 1 ½ 1 1"],
["Super Locrian Minor Mode","½ 1 ½ 1 1 1"],
["Pentatonic Majeur Mode","1 1 1½ 1"],
["Pentatonic Majeur Mode 2","1 1½ 1 1½"],
["Pentatonic Majeur Mode 3","1½ 1 1½ 1"],
["Pentatonic Majeur Mode 4","1 1½ 1 1"],
["Pentatonic Dominant Mode","1 1 1½ 1½"],
["Pentatonic Minor Mode","1½ 1 1 1½"],
["Altered Pentatonic Mode","½ 1½ 1½ 1"],
["Blues Mode","1½ 1 ½ ½ 1"],
["Major Arpeggio","2 1½"],
["Minor Arpeggio","1½ 2"],
["Major 7th Major Arpeggio","2 1½ 2"],
["Major 7th Minor Arpeggio","2 1½ 1½"],
["Minor 7th Major Arpeggio","1½ 2 2"],
["Minor 7th Minor Arpeggio","1½ 2 1½"],
["Major 9th Arpeggio","1 1 1½ 1½"],
["Minor 9th Arpeggio","1 ½ 2 1½"],
["Major 11th Arpeggio","1 1 ½ 1 1½"],
["Minor 11th Arpeggio","1 ½ 1 1 1½"],
["Major 13th Arpeggio","1 1 ½ 1 1 1½"],
["Minor 13th Arpeggio","1 ½ 1 1 1 ½"],
["Augmented Arpeggio","2 2"],
["Disminished Arpeggio","1½ 1½ 1½"]
];

poner=`<select id="selected-scale" style="width: 100px;"><option value="-1">random</option>`;
for(let i=0;i<arrayScales.length;i++){

  sel="";
  if(i==0){
    sel="selected";

  }
  poner+=`<option value="${i}" ${sel}>${arrayScales[i][0]}</option>`


}
poner+=`</select>`
$("#scale-span").html(poner);



//createMelody();
//playMelody(0,createMelody())


// $("#timeValue").val("")
// $("#menos").click();
// $("#rndPorcentaje").val("50");

// a=[1,2,3]
// b=_.extend(a)
// console.log(b)
$("#pm").show();
$(".fb-share-button").hide();
$("#quantity-notes-sel").val("5");
$("#voice-sel").val("2");
actualizaVoice();


var t_ini;
var t_fin;
var t_dif;

var getDuration = function(millis){
  var dur = {};
  var units = [
      {label:"ms",    mod:1000},
      {label:"s",   mod:60},
      {label:"m",   mod:60},
      {label:"h",     mod:24},
      {label:"d",      mod:31}
  ];
  // calculate the individual unit values...
  units.forEach(function(u){
      millis = (millis - (dur[u.label] = (millis % u.mod))) / u.mod;
  });
  // convert object to a string representation...
  var nonZero = function(u){ return dur[u.label]; };
  dur.toString = function(){
      return units
          .reverse()
          .filter(nonZero)
          .map(function(u){
              return dur[u.label] + " " + (dur[u.label]==1?u.label.slice(0,-1):u.label);
          })
          .join(', ');
  };
  return dur;
};
</script>
<script src="js/midi/soundfont.js" type="text/javascript"></script> 
</body>
</html>
