function putMenu(){
  var path = window.location.pathname;
  var page = path.split("/").pop();
  
  sel=0;
  
  if(page=="index.html") sel=0;
  if(page=="index_movienback.html") sel=1;
  if(page=="index_multimovie.html") sel=2;
  if(page=="index_emdr.html") sel=3;
  if(page=="index_eye.html") sel=4;
  if(page=="index_tracker.html") sel=5;
  if(page=="index_tracker_e.html") sel=6;
  if(page=="index_back.html") sel=7;
  if(page=="figures.html") sel=8;
  if(page=="pao.html") sel=11;
  if(page=="index_movienback2.html") sel=12;
  //if(page=="matrix.html") sel=9;
  if(page=="help.html") sel=10;

  console.log(sel)

  _template = `
    <select id="appSelected" onchange="changeApp();">
      <option value="0">partial movie</option>
     
      <option value="1">movie nback</option>
       
      <option value="2">multimovie</option>
      
      <option value="3">emdr</option>
      
      
      <option value="4">eye</option>
      
      
      <option value="5">tracker</option>

      
      <option value="6">tracker e</option>

      
      <option value="7">nback 2</option>

      <option value="12">movie nback 2</option>

      <!--
      <option value="8">Figures and Colors</option>
      <option value="9">Matrix</option>

      
      <option value="11">Pao</option>

        -->

      <option value="10">Help</option>

    </select>
  `;
  $("#menu-modules").html(_template);
  $("#appSelected").val(sel);
}

function changeApp(){
  // go=n("appSelected");
  go=parseInt($("#appSelected").val());

  if(go==0) window.location.href="index.html";
  if(go==1) window.location.href="index_movienback.html";
  if(go==2) window.location.href="index_multimovie.html";
  if(go==3) window.location.href="index_emdr.html";
  if(go==4) window.location.href="index_eye.html";
  if(go==5) window.location.href="index_tracker.html";
  if(go==6) window.location.href="index_tracker_e.html";
  if(go==7) window.location.href="index_back.html";
  if(go==8) window.location.href="figures.html";
  if(go==9) window.location.href="matrix.html";
  if(go==10) window.location.href="help.html";
  if(go==11) window.location.href="pao.html";
  if(go==12) window.location.href="index_movienback2.html";

}


putMenu();