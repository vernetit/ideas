var arrayLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","nn","o","p","q","r","s","t","u","v","w","x","y","z","espacio"];
ll=[];
lll=[];
var arrayMySound = [];

notesTone=["C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C5","C#5","D6","A3"];

var arrayLetras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","nn","o","p","q","r","s","t","u","v","w","x","y","z","espacio"];

var alfabeto, i, xx;

modo = 1;
alfabeto = [];
keyCodeMinuscula = 97;
keyCodeMayuscula = 65;
aceleration=0;
increment=0;

for (xx = 0; xx <= 35; xx++) {
  alfabeto[xx] = [];
  if(xx==26){
    keyCodeMayuscula=96;
    keyCodeMinuscula=48;

  }
  alfabeto[xx][2] = keyCodeMayuscula; 
  alfabeto[xx][3] = keyCodeMinuscula;
  keyCodeMinuscula++;
  keyCodeMayuscula++;
  alfabeto[xx][4] = 0;
  alfabeto[xx][5] = 0;
  alfabeto[xx][6] = 0;
  alfabeto[xx][7] = 1; //act
  alfabeto[xx][8] = 1; //default
  alfabeto[xx][9] = 0; //max
  alfabeto[xx][10] = 10000; // min
  alfabeto[xx][20] = xx; // number


}

alfabeto[0][0] = "A";
alfabeto[0][1] = "rgb(0,0,180)";
alfabeto[0][2] = 65;

alfabeto[1][0] = "B";
alfabeto[1][1] = "rgb(175,13,102)";
alfabeto[1][2] = 66;

alfabeto[2][0] = "C";
alfabeto[2][1] = "rgb(146,248,70)";
alfabeto[2][2] = 67;

alfabeto[3][0] = "D";
alfabeto[3][1] = "rgb(255,200,47)";
alfabeto[3][2] = 68;

alfabeto[4][0] = "E";
alfabeto[4][1] = "rgb(255,118,0)";
alfabeto[4][2] = 69;

alfabeto[5][0] = "F";
alfabeto[5][1] = "rgb(255,152,213)";
alfabeto[5][2] = 70;

alfabeto[6][0] = "G";
alfabeto[6][1] = "rgb(235,235,222)";
alfabeto[6][2] = 71;

alfabeto[7][0] = "H";
alfabeto[7][1] = "rgb(100,100,100)";
alfabeto[7][2] = 72;

alfabeto[8][0] = "I";
alfabeto[8][1] = "rgb(255,255,0)";
alfabeto[8][2] = 73;

alfabeto[9][0] = "J";
alfabeto[9][1] = "rgb(255,255,150)";
alfabeto[9][2] = 74;

alfabeto[10][0] = "K";
alfabeto[10][1] = "rgb(55,19,112)";
alfabeto[10][2] = 75;

alfabeto[11][0] = "L";
alfabeto[11][1] = "rgb(202,62,94)";
alfabeto[11][2] = 76;

alfabeto[12][0] = "M";
alfabeto[12][1] = "rgb(205,145,63)";
alfabeto[12][2] = 77;


alfabeto[13][0] = "N";
alfabeto[13][1] = "rgb(12,75,100)";
alfabeto[13][2] = 78;


alfabeto[14][0] = "O";
alfabeto[14][1] = "rgb(255,0,0)";
alfabeto[14][2] = 79;

alfabeto[15][0] = "P";
alfabeto[15][1] = "rgb(175,155,50)";
alfabeto[15][2] = 80;

alfabeto[16][0] = "Q";
alfabeto[16][1] = "rgb(185,185,185)";
alfabeto[16][2] = 81;

alfabeto[17][0] = "R";
alfabeto[17][1] = "rgb(37,70,25)";
alfabeto[17][2] = 82;

alfabeto[18][0] = "S";
alfabeto[18][1] = "rgb(121,33,135)";
alfabeto[18][2] = 83;

alfabeto[19][0] = "T";
alfabeto[19][1] = "rgb(83,140,208)";
alfabeto[19][2] = 84;

alfabeto[20][0] = "U";
alfabeto[20][1] = "rgb(0,154,37)";
alfabeto[20][2] = 85;

alfabeto[21][0] = "V";
alfabeto[21][1] = "rgb(178,220,205)";
alfabeto[21][2] = 86;

alfabeto[22][0] = "W";
alfabeto[22][1] = "rgb(169,34,0)";
alfabeto[22][2] = 87;

alfabeto[23][0] = "X";
alfabeto[23][1] = "rgb(0,0,74)";
alfabeto[23][2] = 88;

alfabeto[24][0] = "Y";
alfabeto[24][1] = "rgb(175,200,74)";
alfabeto[24][2] = 89;

alfabeto[25][0] = "Z";
alfabeto[25][1] = "rgb(63,25,12)";
alfabeto[25][2] = 90;


alfabeto[26][0] = "0";
alfabeto[26][1] = "rgb(0,0,180)";
alfabeto[26][2] = 96;

alfabeto[27][0] = "1";
alfabeto[27][1] = "rgb(175,13,102)";
alfabeto[27][2] = 97;

alfabeto[28][0] = "2";
alfabeto[28][1] = "rgb(146,248,70)";
alfabeto[28][2] = 98;

alfabeto[29][0] = "3";
alfabeto[29][1] = "rgb(255,200,47)";
alfabeto[29][2] = 99;

alfabeto[30][0] = "4";
alfabeto[30][1] = "rgb(255,118,0)";
alfabeto[30][2] = 100;

alfabeto[31][0] = "5";
alfabeto[31][1] = "rgb(255,152,213)";
alfabeto[31][2] = 101;

alfabeto[32][0] = "6";
alfabeto[32][1] = "rgb(235,235,222)";
alfabeto[32][2] = 102;

alfabeto[33][0] = "7";
alfabeto[33][1] = "rgb(100,100,100)";
alfabeto[33][2] = 103;

alfabeto[34][0] = "8";
alfabeto[34][1] = "rgb(255,255,0)";
alfabeto[34][2] = 104;

alfabeto[35][0] = "9";
alfabeto[35][1] = "rgb(255,255,150)";
alfabeto[35][2] = 105;


for (xx = 0; xx <= 25; xx++) {
   letra = alfabeto[xx][0];
  letra = letra.toLowerCase();


  ext = "gif", al="";

  if (letra == "á" || letra =="a"){
      letra = "a";
      al = aleatorio(1,4);
  }
  if (letra == "é" || letra =="e"){
    letra = "e";
    al = aleatorio(1,4);
  }
  if (letra == "í"){
    letra = "i";

  }
  if (letra == "ó" || letra =="o"){
    letra = "o";
    al = aleatorio(1,4);
  }
  if (letra == "ú"){
    letra = "u";
    
  }
  if (letra == "ñ"){
    letra = "nn";
    ext = "png";
  }
  if (letra == "s" || letra == "r" || letra == "n"){
    
    al = aleatorio(1,4);
  }
  if (letra == "j" || letra == "k" || letra == "w" || letra == "x" || letra == "z"){
    
    ext = "png";
  }

   //$('<img/>')[0].src = "/emociones/" + letra + al + "." + ext;
   $("#preload77").append(`<img src="${'emociones/' + letra + al + '.' + ext}">`)
}

for (xx = 1; xx <= 4; xx++) {

  /*
$('<img/>')[0].src = "/emociones/a"+xx+".gif";
$('<img/>')[0].src = "/emociones/e"+xx+".gif";
$('<img/>')[0].src = "/emociones/n"+xx+".gif";
$('<img/>')[0].src = "/emociones/o"+xx+".gif";
$('<img/>')[0].src = "/emociones/r"+xx+".gif";
$('<img/>')[0].src = "/emociones/s"+xx+".gif";
*/
  $("#preload77").append(`<img src="${'emociones/a'+xx+'.gif'}">`) 
  $("#preload77").append(`<img src="${'emociones/e'+xx+'.gif'}">`) 
  $("#preload77").append(`<img src="${'emociones/n'+xx+'.gif'}">`) 
  $("#preload77").append(`<img src="${'emociones/o'+xx+'.gif'}">`) 
  $("#preload77").append(`<img src="${'emociones/r'+xx+'.gif'}">`) 
  $("#preload77").append(`<img src="${'emociones/s'+xx+'.gif'}">`) 
   
}

function aleatorio(a,b){
  return Math.round(Math.random()*(b-a)+parseInt(a));
}

l_ant=-1;


function play(x){

  system=n("system");

  if(x==0){
    l_ant=-1;
  }

  myModo=n("myModo")

  for(;;){
    l=_.random(0,25);
    if(myModo==100){ _a=[0,4,8,14,20]; l=_a[_.random(0,_a.length-1)]; }
    letra=alfabeto[l][0].toLowerCase();

    if( myModo==4 && ( letra=="w" || letra=="x" || letra=="z"  || letra=="j"  || letra=="k") ) continue;

    if(l!=l_ant) break;

  }

  num="";

  if(l==0 || l==4 || l==13 || l==14 || l==17 || l==18){
    num=_.random(1,4);
  }
  

  l_ant=l;

  

  if(myModo==4){

     $("#element-move").html(`
      <img src="emociones/${letra+num}.gif" width="84px" height="84px">
    `)


  }
  if(myModo==1 || myModo==100){

     $("#element-move").html(`
      <div style="width: 84px; height: 84px; background-color: ${alfabeto[l][1]};">&nbsp;</div>
    `)
  }

  if(system==1) $("#element-move").hide(); else $("#element-move").show();

 

  setTimeout(function(){ play(1); },n("setAllTo"))


}

var onkeydown = (function (ev) {
 play(1);
});