const { exec } = require('child_process');


bPauseVideo=0;

function pauseVideo(){

  bPauseVideo=!bPauseVideo;

  if(bPauseVideo){

    document.querySelector("#penguin-sledding").pause();

  }else{

    document.querySelector("#penguin-sledding").play();

  }
}



delayWord=0;
var killW;
bPlayW=0;
arrayWord=[];
pasadaWord=0;


function startWords(x){

  if(x==0){

    bPlayW=!bPlayW;

    if(bPlayW){


    }else{

      clearTimeout(killW);

      return;


    }

    delayWord=_f("delayWord");

    arrayWord=[];
    pasadaWord=0;
    txt=olor;
    arrayWord=txt.split("\n");
    arrayWord=_.shuffle(arrayWord);

  }

  mySay="";

  for(i=0;i<_f("cantidadSay");i++){
    mySay+=arrayWord[pasadaWord]+" ";
    pasadaWord++;


  }

  velocityFlash=_f("velocityFlash");
  
  
   exec(`say -r ${velocityFlash} ${mySay}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`exec error: ${err}`);
        return;
      } //console.log(`Number of files ${stdout}`);
    });

   killW=setTimeout(function(){ startWords(1); },delayWord)




}

var requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame || window.msRequestAnimationFrame || 
                       function(c) {window.setTimeout(c, 15)};

var scene;

var vX=0;
var vY=0;

var kill, kill1;

var estado=0;
var bPause=0;

var myArray=[];
var vMin,vMax;
var autoplay=0;
var autoCorrect=1;

var container = {
  x: 0,
  y: 0,
  z: 0,
  width: 700,
  height: 400,
  depth: 400
};

//create the array of circles that will be animated
var circles = [{
  x: 50,
  y: 100,
  r: 20,
  vx: 10,
  vy: 9,
  color: 125
}, {
  x: 150,
  y: 80,
  r: 20,
  vx: 15,
  vy: 8,
  color: 205
}, {
  x: 90,
  y: 150,
  r: 20,
  vx: 5,
  vy: 15,
  color: 25
}, {
  x: 100,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 200,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
}, {
  x: 500,
  y: 50,
  r: 20,
  vx: 8,
  vy: 10,
  color: 100
},

];


var vX=0;
var vY=0;

var kill, kill1;

var estado=0;
var bPause=0;

var collision=1; //collision on off

var sphere0,sphere1,sphere2,sphere3,sphere4,sphere5,sphere6,sphere7;

/**
   Phoria
   pho·ri·a (fôr-)
   n. The relative directions of the eyes during binocular fixation on a given object
*/

// bind to window onload event
window.addEventListener('load', onloadHandler, false);

var i;

var circleCollisionMax=0.9;
var r,xCamera,yCamera,zCamera,T,pi,myFrame=0,secondCameraEl;

function onloadHandler()


{
  
   $("#myScene").append(`
    <a-entity position="0 0 -5" rotation="0 0 0"
        geometry="primitive: box; height: 0.01; width: 0.01; depth: 0.01;"
        material="color: #147341; roughness: 1.0; metalness: 0.2;" id="target"></a-entity>

  `);

  $("#myScene").append(`

      <a-entity camera look-controls orbit-controls="target: 0 0 -5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 0 5; autoRotate: true; autoRotateSpeed: 1;"></a-entity>


    `);

  /*
      <a-entity id="second-camera" target="#target" distance="1" orbit-controls position="0 1.6 0" camera look-controls>
        
    </a-entity>
  */

  //<a-animation attribute="rotation" dur="6000" fill="forwards" to="0 360 0" repeat="indefinite"></a-animation>

  //secondCameraEl = document.querySelector('#second-camera');
 // secondCameraEl.setAttribute('camera', 'active', true);


 /*

  setInterval(function(){ 

    myFrame+=0.01;
    r=20; T=0.5;
    pi=Math.PI;

     r=5;
  
  xCamera = r * Math.cos(myFrame / T * (2 * pi))
  zCamera = r * Math.sin(myFrame / T * (2 * pi))
  

    secondCameraEl.setAttribute('position', `${xCamera} ${yCamera} ${zCamera}`); 
    console.log(`${xCamera} ${yCamera} ${zCamera}`)


  },100);*/

   // get the canvas DOM element and the 2D drawing context
   // var canvas = document.getElementById('canvas');
   
   // // create the scene and setup camera, perspective and viewport
   // scene = new Phoria.Scene();
   // scene.camera.position = {x:0.0, y:5.0, z:-16.5};
   // scene.perspective.aspect = canvas.width / canvas.height;
   // scene.viewport.width = canvas.width;
   // scene.viewport.height = canvas.height;
   
   // // create a canvas renderer
   // var renderer = new Phoria.CanvasRenderer(canvas);
   
   // // GENERATE TEST ENTITIES
   // // add a grid to help visualise camera position etc.
   // var plane = Phoria.Util.generateTesselatedPlane(8,8,0,25);
   // scene.graph.push(Phoria.Entity.create({
   //    points: plane.points,
   //    edges: plane.edges,
   //    polygons: plane.polygons,
   //    style: {
   //       drawmode: "wireframe",
   //       shademode: "plain",
   //       linewidth: 0.5,
   //       sortmode: "unsorted"
   //    }
   // }));

   //  scene.graph.push(new Phoria.DistantLight());

    
    

 //    lightColor = [50,50,50];

 //    var blueLightObj = Phoria.Entity.create({
 //      points: [{x:0, y:5, z:-8}],
 //      style: {
 //         color: [0,0,255],
 //         drawmode: "point",
 //         shademode: "plain",
 //         linewidth: 5,
 //         linescale: 2
 //      }
 //   });
 //   scene.graph.push(blueLightObj);
  
 // //  var blueLight = Phoria.PointLight.create({
 //  //    position: {x:0, y:2, z:-5},
 //   //   color: [0,0,1]
 //  // });

 //  //////////////////////////////////////////
 //  var blueLight = Phoria.PointLight.create({
 //      position: {x:3, y:5, z:-8}, //x:3
 //      color: lightColor
 //  });

 //  scene.graph.push(blueLight);

   for(i=0;i<circles.length;i++){ 
     circles[i].color="rgb(240,250,42)";


    circles[i].x=_.random(-4.0,3.5);
    circles[i].y=_.random(-1,4.5);
    circles[i].z=_.random(-5.2,-6);
    
    circles[i].collisionDistance=circleCollisionMax;




        /*
     circles[i].vx=rand(0.1,0.25); 
     console.log(circles[i].vx);
     circles[i].vy=rand(0.1,0.25);  
     circles[i].vz=rand(0.1,0.25);  */
      vMin=parseFloat($("#vMin").val())-0.001;
  vMax=parseFloat($("#vMax").val());

  circles[i].decrement=0.08*vMax;

        circles[i].vx=rand(vMin,vMax); 
    circles[i].vy=rand(vMin,vMax); 
    circles[i].vz=rand(vMin,vMax); 

     circles[i].vxBase=circles[i].vx; 
     circles[i].vyBase=circles[i].vy;
     circles[i].vzBase=circles[i].vz;

     circles[i].iVx=circles[i].vx;
     circles[i].iVy=circles[i].vy;
     circles[i].iVz=circles[i].vz;

     circles[i].canCollision=1;
     circles[i].collisionWith=1;
     circles[i].co1llisionCount=0;

     if(_.random(0,1)){ circles[i].vx*=-1; }
     if(_.random(0,1)){  circles[i].vy*=-1; }
     if(_.random(0,1)){  circles[i].vz*=-1; }

     if(_.random(0,1)){

       circles[i].direccion=1;

     }else{
       circles[i].direccion=-1;
     }
      //0.48
      $("#myScene").append(`
      <!-- <a-text value="Now Interactable" position="${circles[i].x+" "+circles[i].y+" "+circles[i].z}" wrap-pixels="" wrpa-count="20" material="color: rgb(0,0,0); transparent: true; opacity: 0.0;" geometry="primitive:sphere" color="${circles[i].color}" id="txt-${i}"></a-text> -->
      <a-sphere  dynamic-body="mass: 0" position="${circles[i].x+" "+circles[i].y+" "+circles[i].z}" color="${circles[i].color}" material="transparent: true; opacity: 1.0;" radius="0.45" wireframe="false" id="sp-${i}" src="img/ball.png"></a-circle>
      `);
       
      // var el = document.getElementById("sp-"+i);
      // el.body.applyImpulse(
      //   /* impulse */        new CANNON.Vec3(0, 1, -1),
      //   /* world position */ new CANNON.Vec3().copy(el.getComputedAttribute('position'))
      // );
     // eval(`

     //  s = Phoria.Util.generateSphere(1, 8, 8)

     //  sphere${i} = Phoria.Entity.create({
     //     points: s.points,
     //     edges: s.edges,
     //     polygons: s.polygons,
     //     style: {
     //        diffuse: 1,
     //        color: [240,250,42],
     //        shademode: "lightsource",
     //        //drawmode: "wireframe",
     //        // color: [0,128,0],
     //        specular: 128
     //     }
     //  });
     //  sphere${i}.scaleN(0.6);
     //  scene.graph.push(sphere${i});

     //  sphere${i}.translateY(circles[${i}].y);sphere${i}.translateX(circles[${i}].x);sphere${i}.translateZ(circles[${i}].z);
     //  `);

   }

   // scene.graph.push(Phoria.DistantLight.create({
   //   // color: [0.5,0.5,1.0],
   //    intensity: 1,
   //    direction: {x:0, y:-1, z:-8}
   // }));


   //console.log(scene.graph);


   // var s = Phoria.Util.generateSphere(1, 24, 48)

   // var sphere = Phoria.Entity.create({
   //    points: s.points,
   //    edges: s.edges,
   //    polygons: s.polygons,
   //    style: {
   //       diffuse: 1,
   //       color: [240,250,42],
   //       // color: [0,128,0],
   //       specular: 128
   //    }
   // });
   // sphere.scaleN(0.75);
   // scene.graph.push(sphere);

  

   // add a light
   // scene.graph.push(Phoria.DistantLight.create({
   //    color: [0.5,0.5,1.0],
   //    intensity: 0.25,
   //    direction: {x:0, y:-1, z:1}
   // }));
   // var visibleLightObj = Phoria.Entity.create({
   //    points: [{x:-3, y:4, z:-5}],
   //    style: {
   //       color: [255,255,255],
   //       drawmode: "point",
   //       shademode: "plain",
   //       linewidth: 5,
   //       linescale: 2
   //    }
   // });
   // scene.graph.push(visibleLightObj);
   // var light = Phoria.PointLight.create({
   //    color: [1, 0.4, 0],
   //    position: {x:-3, y:4, z:-5},
   //    intensity: 0.75,
   //    attenuation: 0.05
   // });
   // visibleLightObj.children.push(light);
   
   var pause = false;
   var fnAnimate = function() {
      
      if (!pause)
      {
         for(i=0;i<circles.length;i++){

           /* eval(`

               sphere${i}.style.color=circles[${i}].color;

               `);*/

            document.getElementById("sp-"+i).setAttribute("color", circles[i].color);

            if(bPause) continue;

            if(circles[i].collisionDistance<circleCollisionMax) circles[i].collisionDistance+=0.05; //0.05

            // if(circles[i].vy<vMax) circles[i].vy+=0.01;
            // if(circles[i].vx<vMax) circles[i].vx+=0.01;
            // if(circles[i].vz<vMax) circles[i].vz+=0.01;

              
             for(j=0;j<circles.length;j++){
              continue;
              if(circles[j].canCollision==1) continue;

              if( Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) + Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) + Math.pow( circles[i].z - circles[j].z, 2) ) >= 1.5  ){
                // console.log("hola")

                //circles[j].canCollision=1;
                //circles[circles[j].collisionWith].canCollision=1;
                // circles[circles[j].collision.canCollision=1;

                // circles[circles[i].collisionWith].vy+=0.5;
                // circles[circles[i].collisionWith].vy+=0.5;

               // circles[circles[i].collisionWith].vy+=0.5;
               // circles[circles[i].collisionWith].vy+=0.5;

                // circles[i].vx=circles[i].vxBase * circles[i].vx>0?1:-1 ;
                // circles[i].vy=circles[i].vyBase *  circles[i].vy>0?1:1 ;

                // circles[i].vx=circles[i].vxBase * circles[i].vx>0?1:-1 ;
                // circles[i].vy=circles[i].vyBase *  circles[i].vy>0?1:1 ;


                //console.log(circles[i].vxBase)




              }else{
                //recupero velocidad

                // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;
                // if(circles[circles[i].collisionWith].vy<circles[circles[i].collisionWith].vyBase) circles[circles[i].collisionWith].vy+=0.5;

                // if(circles[i].xy<circles[i].vxBase) circles[i].vx+=0.5;
                // if(circles[i].vy<circles[i].vyBase) circles[i].vy+=0.5;

              }
            } //for


            if(collision){

                for(j=0;j<8;j++){


                 // if(i==0){
                 //   bBreak=1;
                 //   break;
                 // }

                 // console.log(i);

                 // console.log( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) );

                 // console.log( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) + Math.pow( circles[i].z - circles[j].z, 2) ) );

                 if(j!=i){
                   if( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) + Math.pow( circles[i].z - circles[j].z, 2) ) <= ( ( circles[i].collisionDistance + circles[j].collisionDistance ) / 2 ) /*&& Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) + Math.pow( circles[i].z - circles[j].z, 2) ) >= 0.9 */ ){


                     //if(circles[i].canCollision==0 || circles[j].canCollision==0) continue;

                     //circles[i].canCollision=0;
                     //circles[j].canCollision=0;
                     
                     //circles[i].collisionWith=j;
                     //circles[j].canCollision=i;
                     

                     // //if(_.random(0,13)<13) continue;
                     // // if(_.random(0,5)<4) continue;
                     // if(_.random(0,15)<10) continue;

                     // if(circles[i].vx>0) circles[i].vx = circles[i].vxBase * 0.75; else circles[i].vx = circles[i].vxBase *  -0.75;
                     // if(circles[j].vx>0) circles[j].vx = circles[j].vxBase * 0.75; else circles[j].vx = circles[j].vxBase *  -0.75;

                     // if(circles[i].vy>0) circles[i].vy = circles[i].vyBase * 0.75; else circles[i].vy = circles[i].vyBase *  -0.75;
                     // if(circles[j].vy>0) circles[j].vy = circles[j].vyBase * 0.75; else circles[j].vy = circles[j].vyBase *  -0.75;

                     // circles[i].vy *= 0.9;
                     // circles[j].vx *= 0.9;

                     

                     // circles[i].vx *= 0.9; circles[j].vx *= 0.9;
                     // circles[i].vy *= 0.9; circles[j].vy *= 0.9;
                     // circles[i].vz *= 0.9; circles[j].vz *= 0.9;
                      
                     // if(myRnd==0){ circles[i].vx = -circles[i].vx; circles[j].vx = -circles[j].vx; }
                     // if(myRnd==1){   circles[i].vy = -circles[i].vy; circles[j].vy = -circles[j].vy; }
                     // if(myRnd==1){  circles[i].vz = -circles[i].vz; circles[j].vz = -circles[j].vz; }
                      
                      

                      //console.log(circles[i].vz)

                    // circles[i].decrement=0.095*vMax;
                    // circles[j].decrement=0.095*vMax;

                    // circles[i].decrement=-0.5*vMax;
                    // circles[j].decrement=-0.5*vMax;

                     circles[i].vy = -(circles[i].vy-circles[i].decrement);  circles[j].vy = -(circles[j].vy-circles[j].decrement); 
                     circles[i].vz = -(circles[i].vz-circles[i].decrement); circles[j].vz = -(circles[j].vz-circles[j].decrement); 
                     circles[i].vx = -(circles[i].vx-circles[i].decrement); circles[j].vx = -(circles[j].vx-circles[j].decrement);

                     if(Math.sign(circles[i].vx)==Math.sign(circles[j].vx) && Math.sign(circles[i].vy)==Math.sign(circles[j].vy) && Math.sign(circles[i].vz)==Math.sign(circles[j].vz) ){
                         circles[i].vx*=-1; 
                        circles[i].vy*=-1;
                        circles[i].vz*=-1;

                        //console.log("x and y and z equal")

                     }else if(Math.sign(circles[i].vx)==Math.sign(circles[j].vx) && Math.sign(circles[i].vy)==Math.sign(circles[j].vy) ){
                      circles[i].vx*=-1; 
                      circles[i].vy*=-1; 
                      //console.log("x and y equal")
                     }

                     // if(Math.sign(circles[i].vx)==Math.sign(circles[j].vx)){
                       /*
                        for(;;){
                       
                          circles[i].vx*=multiplo();
                          circles[j].vx*=multiplo();

                          circles[i].vy*=multiplo();
                          circles[j].vy*=multiplo();

                          circles[i].vz*=multiplo();
                          circles[j].vz*=multiplo();

                          if(Math.sign(circles[i].vx)!=Math.sign(circles[j].vx) && Math.sign(circles[i].vy)!=Math.sign(circles[j].vy) && Math.sign(circles[i].vz)!=Math.sign(circles[j].vz)) break;  
                          //if(Math.sign(circles[i].vx)==Math.sign(circles[j].vx)) break;  
                        }*/
                    //  }
                      /*
                        circles[i].vx*=Math.sign(circles[i].vx);
                        circles[i].vy*=Math.sign(circles[i].vy);
                        circles[i].vz*=Math.sign(circles[i].vz);

                        for(;;){
                                                   
                          circles[j].vx*=multiplo();
                          circles[j].vy*=multiplo();          
                          circles[j].vz*=multiplo();

                          if(Math.sign(circles[i].vx)!=Math.sign(circles[j].vx) && Math.sign(circles[i].vy)!=Math.sign(circles[j].vy) && Math.sign(circles[i].vz)!=Math.sign(circles[j].vz)) break;  
                          //if(Math.sign(circles[i].vx)==Math.sign(circles[j].vx)) break;  
                        }
                      */
                      // m=- 1/Math.sqrt( Math.pow( circles[i].x , 2) + Math.pow( circles[i].y , 2) + Math.pow( circles[i].z , 2) ) ;
                      // m1= -1/Math.sqrt( Math.pow( circles[j].x , 2) + Math.pow( circles[j].y , 2) + Math.pow( circles[j].z , 2) ) ;

                      // circles[i].vy = m*(circles[i].vy-circles[i].decrement);  circles[j].vy = m1*(circles[j].vy-circles[j].decrement); 
                      // circles[i].vz = m*(circles[i].vz-circles[i].decrement); circles[j].vz = m1*(circles[j].vz-circles[j].decrement); 
                      // circles[i].vx = m*(circles[i].vx-circles[i].decrement); circles[j].vx = m1*(circles[j].vx-circles[j].decrement);

                      // circles[i].decrement*=0.5;
                      // circles[j].decrement*=0.5;


                     
                     // if(_.random(0,1)){
                     //  circles[i].vx = -circles[i].vx; 
                     //  circles[j].vz = -circles[j].vz;

                     // }else{
                     //  circles[i].vz = -circles[i].vz; 
                     //  circles[j].vx = -circles[j].vx;

                     // }

                     circles[i].collisionDistance-=0.51;
                     circles[j].collisionDistance-=0.51;

                     circles[i].collisionCount++;
                     circles[j].collisionCount++;

                     // if(circles[i].collisionCount%3==0){

                     //  //myRnd=_.random(0,1);

                     //  //if(myRnd==0){  }
                     //  //if(myRnd==1){   circles[i].vy = -circles[i].vy; circles[j].vy = -circles[j].vy; }

                     //  circles[i].vx = -circles[i].vx; circles[j].vx = -circles[j].vx;

                    
                     // }else{
                     //  circles[i].vy = -(circles[i].vy-circles[i].decrement);  circles[j].vy = -(circles[j].vy-circles[j].decrement); 
                     //  circles[i].vz = -(circles[i].vz-circles[i].decrement); circles[j].vz = -(circles[j].vz-circles[j].decrement); 
                     //  circles[i].vx = -(circles[i].vx-circles[i].decrement); circles[j].vx = -(circles[j].vx-circles[j].decrement);


                     // }

                     // if(circles[i].collisionCount>5 && circles[j].collisionCount>5){

                     //  circles[i].collisionCount=0; circles[j].collisionCount=0;

                     //  circles[i].canCollision=0;  circles[j].canCollision=0;

                     //  setTimeout(setCanCollision.bind(null,i,j),1000);
                     // }



                       


                    /*
                    if ( Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) ) > Math.sqrt( Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) ) && Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) ) > Math.sqrt( Math.pow( circles[j].z - circles[circles[j].collisionWith].z, 2) ) ) circles[i].vx = -circles[i].vx; circles[j].vx = -circles[j].vx;

                    if ( Math.sqrt( Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) ) > Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) ) && Math.sqrt( Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) ) > Math.sqrt( Math.pow( circles[j].z - circles[circles[j].collisionWith].z, 2) ) ) circles[i].vy = -circles[i].vy; circles[j].vy = -circles[j].vy;

                    if ( Math.sqrt( Math.pow( circles[j].z - circles[circles[j].collisionWith].z, 2) ) > Math.sqrt( Math.pow( circles[j].x - circles[circles[j].collisionWith].x, 2) ) && Math.sqrt( Math.pow( circles[j].z - circles[circles[j].collisionWith].z, 2) ) > Math.sqrt( Math.pow( circles[j].y - circles[circles[j].collisionWith].y, 2) ) ) circles[i].vz = -circles[i].vz; circles[j].vz = -circles[j].vz;
                    */
                     



                     // if( Math.pow( circles[i].x - circles[j].x, 2) > Math.pow( circles[i].y - circles[j].y, 2) ){
                       // circles[i].vx = -circles[i].vx; circles[j].vx = -circles[i].vx;

                     // }else{

                     //   circles[i].vy = -circles[i].vy;
                     //   circles[j].vy = -circles[i].vy;


                     // }
                     
                     // circles[i].vx = -circles[i].vx;
                     // circles[j].vx = -circles[i].vx;

                     // circles[i].canCollision=0;
                     // circles[j].canCollision=0;
                     
                     // circles[i].collisionWith=j;
                     // circles[j].canCollision=i;     

                   }

                 }
                }//for collision


             }//if collision


               if (circles[i].x + circles[i].vx < -5 || circles[i].x + circles[i].vx > 4.5) {
               circles[i].vx = -circles[i].vx;
               //circles[i].vx = vX;
               }

               if (circles[i].y + circles[i].vy < -1 || circles[i].y + circles[i].vy > 5) {
                 circles[i].vy = -circles[i].vy;
                 //circles[i].vx = vX;
               }

               if (circles[i].z + circles[i].vz < -7 || circles[i].z + circles[i].vz > -4) {
                 circles[i].vz = -circles[i].vz;
                 //circles[i].vx = vX;
               }

            circles[i].x+=circles[i].vx;
            circles[i].y+=circles[i].vy;
            circles[i].z+=circles[i].vz;


            document.getElementById("sp-"+i).setAttribute("position", circles[i].x + " " + circles[i].y + " " + circles[i].z);

            

            // eval(`



            //    sphere${i}.translateY(circles[${i}].vy);sphere${i}.translateX(circles[${i}].vx);sphere${i}.translateZ(circles[${i}].vz);


            // `);


         }
         // rotate local matrix of an object
         //sphere.rotateY(0.5*Phoria.RADIANS);

         // the light position is edited directly via the GUI - update the visible indicator
         // visibleLightObj.points[0].x = light.position.x;
         // visibleLightObj.points[0].y = light.position.y;
         // visibleLightObj.points[0].z = light.position.z;

         // execute the model view 3D pipeline
        // scene.modelView();
         // and render the scene
        // renderer.render(scene);
      }
      
      requestAnimFrame(fnAnimate);
   };
   
   // add GUI controls
   // var gui = new dat.GUI();
   // var f = gui.addFolder('Perspective');
   // f.add(scene.perspective, "fov").min(5).max(175);
   // f.add(scene.perspective, "near").min(1).max(100);
   // f.add(scene.perspective, "far").min(1).max(1000);
   // //f.open();
   // f = gui.addFolder('Camera LookAt');
   // f.add(scene.camera.lookat, "x").min(-100).max(100);
   // f.add(scene.camera.lookat, "y").min(-100).max(100);
   // f.add(scene.camera.lookat, "z").min(-100).max(100);
   // f.open();
   // f = gui.addFolder('Camera Position');
   // f.add(scene.camera.position, "x").min(-100).max(100);
   // f.add(scene.camera.position, "y").min(-100).max(100);
   // f.add(scene.camera.position, "z").min(-100).max(100);
   // f.open();
   // f = gui.addFolder('Camera Up');
   // f.add(scene.camera.up, "x").min(-10).max(10).step(0.1);
   // f.add(scene.camera.up, "y").min(-10).max(10).step(0.1);
   // f.add(scene.camera.up, "z").min(-10).max(10).step(0.1);
   // f = gui.addFolder('Rendering');
   // f.add(sphere.style, "drawmode", ["point", "wireframe", "solid"]);
   // f.add(sphere.style, "shademode", ["plain", "lightsource"]);
   // f.add(sphere.style, "fillmode", ["fill", "filltwice", "inflate", "fillstroke", "hiddenline"]);
   // f.add(sphere.style, "doublesided");
   // f.open();
   // f = gui.addFolder('Light');
   // f.add(light.position, "x").min(-25).max(25).step(0.1);
   // f.add(light.position, "y").min(-25).max(25).step(0.1);
   // f.add(light.position, "z").min(-25).max(25).step(0.1);
   // f.add(light.color, "0").min(0).max(1).step(0.1).name("red");
   // f.add(light.color, "1").min(0).max(1).step(0.1).name("green");
   // f.add(light.color, "2").min(0).max(1).step(0.1).name("blue");
   // f.add(light, "intensity").min(0).max(1).step(0.1);
   // f.add(light, "attenuation").min(0.01).max(0.25).step(0.01);
   // f.open();

   // key binding
   // document.addEventListener('keydown', function(e) {
   //    switch (e.keyCode)
   //    {
   //       case 27:
   //       {
   //          pause = !pause;
   //          break;
   //       }
   //    }
   // }, false);
   
   // start animation
   requestAnimFrame(fnAnimate);
}

function _f(x){

   return parseFloat($("#"+x).val());
}

first=1;

function setCanCollision(x,y){
  console.log (x+ " " + y)
  circles[x].canCollision=1;  circles[y].canCollision=1; 

}

cantidadBolas=0;

var killIntervalView;
bLoaded=0;


function intervalCheck(){

  return;


  if(bLoaded){

/*
    if($("#m0").get(0).currentTime>=arrayIntervalView[pasadas+1]-0.5){

      //$("#screen").css("border-color","green");
    }
*/
    if(document.querySelector("#penguin-sledding").currentTime>arrayIntervalView[pasadas+1]){

      //$("#m0").get(0).currentTime=arrayIntervalView[pasadas];
      document.querySelector("#penguin-sledding").currentTime=arrayIntervalView[pasadas];
      //$("#screen").css("border-color","black");
    }


  }

  setTimeout(function(){  intervalCheck(); },100);

}

intervalCheck();


arrayIntervalView=[];
intervalViewValue=0;
pasadas=0;
var total_time;


function start(opcion=1){
  bAnswer=0;

  if(opcion==0){
     for(i=0;i<circles.length;i++){ $("#t-"+i).remove(); }

    contadorErrores=0;
    contadorRespuestas=0;
    bErrorRespuestas=0;
      

    for(;;){

        
       for(i=0;i<circles.length;i++){
      

          circles[i].x=_.random(-4.0,3.5);
          circles[i].y=_.random(-1,4.5);
          circles[i].z=_.random(-4.2,-6);

        }


        countCollision=0;

        for(i=0;i<circles.length;i++){

          for(j=0;j<circles.length;j++){

            if(i==j) continue;

            if(Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) + Math.pow( circles[i].z - circles[j].z, 2) ) <= circles[i].collisionDistance){
              countCollision++;

            }
          }
        }

        if(countCollision==0) break;


    }

   

    
    
  }

  vMin=parseFloat($("#vMin").val())-0.002;
  vMax=parseFloat($("#vMax").val());
  /*
  if(first)
    scene.graph.splice(2,8);
  else
    scene.graph.splice(3,8);
*/
  first=0;



  //console.log(scene.graph)

  for(i=0;i<circles.length;i++){ 
    // circles[i].color="orange";
    circles[i].color="rgb(240,250,42)";

    // circles[i].vx=_.random(vMin,vMax); 
    // circles[i].vy=_.random(vMin,vMax); 

    circles[i].vx=rand(vMin,vMax); 
    circles[i].vy=rand(vMin,vMax); 
    circles[i].vz=rand(vMin,vMax); 

    circles[i].decrement=0.08*vMax;
    //circles[i].decrement=0;

    circles[i].vxBase=circles[i].vx; 
    circles[i].vyBase=circles[i].vy; 
    circles[i].vzBase=circles[i].vz; 

    circles[i].collisionCount=0;

    //  circles[i].x=_.random(-5.1,3.5);
    // circles[i].y=_.random(-1,4.5);
    // circles[i].z=_.random(-4.2,-8.8);



    // for(;;){

    //   breakTotal=3;


    //   masX=rand(-2,2);
    //   masY=rand(-2,2);
    //   masZ=rand(-2,2);


    //    if (circles[i].x + masX < -7.5+1 || circles[i].x + masX > 7-1) {
    //      //circles[i].vx = -circles[i].vx;
    //      //circles[i].vx = vX;
    //      breakTotal--;
    //    }

    //    if (circles[i].y + masY < -5+1 || circles[i].y + masY > 6-1) {
    //      //circles[i].vy = -circles[i].vy;
    //      //circles[i].vx = vX;
    //      breakTotal--;
    //    }

    //    if (circles[i].z + masZ < -5+1 || circles[i].z + masZ > 5-1) {
    //      //circles[i].vz = -circles[i].vz;
    //      //circles[i].vx = vX;
    //      breakTotal--;
    //    }

    //    if(breakTotal==3) break;


    // }

    // circles[i].x+=masX;
    // circles[i].y+=masY;
    // circles[i].z+=masZ;

      document.getElementById("sp-"+i).setAttribute("position", circles[i].x + " " + circles[i].y + " " + circles[i].z);



    // eval(`

    //   sphere${i}.translateY(masX);sphere${i}.translateX(masY);sphere${i}.translateZ(masZ);

    //   `);


   



     if(_.random(0,1)){ circles[i].vx*=-1; }
     if(_.random(0,1)){  circles[i].vy*=-1; }
     if(_.random(0,1)){  circles[i].vz*=-1; }

     // eval(`

     // s = Phoria.Util.generateSphere(1, 8, 8)

     //  sphere${i} = Phoria.Entity.create({
     //     points: s.points,
     //     edges: s.edges,
     //     polygons: s.polygons,
     //     style: {
     //        diffuse: 1,
     //        color: [240,250,42],
     //        //shademode: "plain",
     //        // color: [0,128,0],
     //        specular: 128
     //     }
     //  });
     //  sphere${i}.scaleN(0.6);
     //  scene.graph.push(sphere${i});

     //  sphere${i}.translateY(circles[${i}].y);sphere${i}.translateX(circles[${i}].x);sphere${i}.translateZ(circles[${i}].z);
     //  `);

   }

  clearTimeout(kill); clearTimeout(kill1);

  cantidadBolas=parseInt($("#cantidadBolas").val());

  //console.log(cantidadBolas);

  // myArray=

  myArray=_.range(0,7);
  myArray=_.shuffle(myArray);
  myArray=_.first(myArray,cantidadBolas);

  bPause=1;


  for(i=0;i<circles.length;i++){

   circles[i].color="rgb(240,250,42)";
   document.getElementById("sp-"+i).setAttribute("src", "img/ball.png");



    x=0;

    // for(;;){

    //   bBreak=0;

    //   circles[i].x=_.random(50,650);
    //   circles[i].y=_.random(50,350);

    //   if(i==0) break;

    //   for(j=i-1;j>=0;j--){
    //     // if(i==0){
    //     //   bBreak=1;
    //     //   break;
    //     // }

    //     // console.log(i);

    //     // console.log( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) );


    //     if( Math.sqrt( Math.pow( circles[i].x - circles[j].x, 2) + Math.pow( circles[i].y - circles[j].y, 2) ) >=80 ){
    //       bBreak=1;

    //     }else{
    //       bBreak=0; break;
    //     }

    //   }

    //   // for(j=i;j>0;j--){
    //   //   if(Math.abs(circles[j].x-circles[i].x)>50 || Math.abs(circles[j].y-circles[i].y)>50){
    //   //     bBreak=1;
    //   //   }else{
    //   //     bBreak=0;
    //   //   }

    //   // if(x==1000) break;
    //   x++;

    //   if(bBreak){ console.log("break");  break; } 
    // }
    

    if(myArray.indexOf(i)!=-1){
      circles[i].color="rgb(255,255,255)";

    //   $("#myScene").append(`
    // <a-entity position="4.5 0 -10" rotation="0 0 0"
    //     geometry="primitive: box; height: 1; width: 1; depth: 1;"
    //     material="color: #147341; roughness: 1.0; metalness: 0.2;" class="bx1"></a-entity>

    //   `);
      document.getElementById("sp-"+i).setAttribute("src", "img/ball4.png");
      // document.getElementById("sp-"+i).setAttribute("color", circles[i].color);
     
      

    }


  }
  kill=setTimeout(function(){
    for(i=0;i<circles.length;i++){ circles[i].color="rgb(240,250,42)"; document.getElementById("sp-"+i).setAttribute("src", "img/ball.png"); }

    // vX=8;
    // vY=10; 
    bPause=0;


  },1000);
   
  kill1=setTimeout(function(){
    // vX=0;
    // vY=0;  
    bPause=1;
    estado=1;

    if(autoplay){
      
      
      setTimeout(function(){ answer(); },0);
      return;
    }

    if(autoCorrect){

      setTimeout(function(){ answer(); },500);

    }


  },parseInt($("#time").val())*1000+_f("preguntaTime")*2/*+1000*/);
}


document.body.onkeyup = function(e){

    console.log(e.keyCode);

    if(e.keyCode == 13){
         if(!bAnswer) return;

       
           contadorErrores++;
            if(contadorErrores==3){
              contadorErrores=0; disminuye();
            }
          setTimeout(function(){
            for(i=0;i<circles.length;i++){
              $("#t-"+i).remove();
            }

            start();


          },500);

          e.preventDefault();
          return;
   
    }

    if(e.keyCode == 78){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin+=0.01;
      vMax+=0.01;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);


      start();


    }
     if(e.keyCode == 80){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin-=0.01;
      vMax-=0.01;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);

      start();

    }
}

function aumenta(){

  multiplicador=2;

  if(cantidadBolas==2) multiplicador=3.5;
  if(cantidadBolas==3) multiplicador=2.5;
  

  vMin=parseFloat($("#vMin").val());
  vMax=parseFloat($("#vMax").val());

  vMin+=( parseFloat($("#cambio").val() ) * multiplicador );
  vMax+=( parseFloat($("#cambio").val() ) * multiplicador );

  $("#vMin").val(vMin);
  $("#vMax").val(vMax);


  start();

}

function disminuye(){

  multiplicador=2;

  if(cantidadBolas==2) multiplicador=3.5;
  if(cantidadBolas==3) multiplicador=2.5;

  vMin=parseFloat($("#vMin").val());
  vMax=parseFloat($("#vMax").val());

  vMin-=( parseFloat($("#cambio").val() ) * multiplicador );
  vMax-=( parseFloat($("#cambio").val() ) * multiplicador );

  $("#vMin").val(vMin);
  $("#vMax").val(vMax);

  start();



}

bAnswer=0;
contadorRespuestas=0;
bErrorRespuestas=0;
contadorErrores=0;

function answer(){

  contadorRespuestas=0;
  bErrorRespuestas=0;

  _a=_.range(1,circles.length+1)
  _a=_.shuffle(_a);

  console.log(_a);
  plusTime=1;

  for(i=0;i<circles.length;i++){
    circles[i].num=_a[i];

    if(!autoplay){
       $("#myScene").append(`
           <a-text value="${circles[i].num}" position="${circles[i].x+" "+(circles[i].y)+" "+(circles[i].z)}"  wrap-pixels="300" wrpa-count="20" material="transparent: true; opacity: 0.0;" geometry="primitive:sphere" color="white" id="t-${i}" class="n-${circles[i].num}"></a-text>


    `);

    }else{
      if(myArray.indexOf(i)!=-1){  circles[i].color=[255,255,255]; document.getElementById("sp-"+i).setAttribute("src", "img/ball3.png"); }
      plusTime=2;


    }
  }
  estado=0;

  bAnswer=1;

  if(autoplay){
      for(i=0;i<circles.length;i++){
          $("#t-"+i).remove();
        }


      setTimeout(function(){ start(); }, _f("preguntaTime")*plusTime);
  }
}

function rand(min,max) {
    // var min = 0.0200,
    //     max = 0.120,
        var highlightedNumber = Math.random() * (max - min) + min;
        return highlightedNumber;
    // alert(highlightedNumber);
}

var xCamera = 0, yCamera=0, zCamera=0, myFrame=0, iniX=0, iniZ=10;
var estadoCamera=0;

function cameraMove(){
  //return;

  myFrame++;
  r=20; T=parseInt($("#camVelocity").val());
  pi=Math.PI;

  /*
  if(scene.camera.up.x.toFixed(1)==1.5){
    estadoCamera=1;
  }
  if(scene.camera.up.x.toFixed(1)==-1.5){
    estadoCamera=0;
  }


  if(estadoCamera==0){
    cambio=+0.1;
     
  }else{
    cambio=-0.1;
    console.log(cambio);
    
  }
  scene.camera.up.x += cambio; 

  console.log(scene.camera.up.x);

  return;*/

  if(tipoCameraVal==1){


    xCamera = r * Math.cos(myFrame / T * (2 * pi))
    zCamera = r * Math.sin(myFrame / T * (2 * pi))
    scene.camera.position = {x:0.0+xCamera, y:5.0+yCamera, z:-5+zCamera};
    //xCamera+=0.5;
    //yCamera+=0.5;
   // scene.camera.position = {x:0.0+xCamera, y:5.0+yCamera, z:-15.0};
    
    //console.log(xCamera+"-"+yCamera);
  }
  if(tipoCameraVal==2){
     // console.log("camera 2");
      xCamera = r * Math.sin(myFrame / T * (2 * pi))
      zCamera = r * Math.cos(myFrame / T * (2 * pi))
      //xCamera+=0.5;
      //yCamera+=0.5;
     // scene.camera.position = {x:0.0+xCamera, y:5.0+yCamera, z:-15.0};
      scene.camera.position = {x:0.0-xCamera, y:5.0+yCamera, z:-5-zCamera};
      //console.log(xCamera+"-"+yCamera);

  }
  if(tipoCameraVal==3){

    r=25; 

    yCamera = r * Math.sin(myFrame / T * (2 * pi))
    zCamera = r * Math.cos(myFrame / T * (2 * pi))

    scene.camera.lookat = {x: 0, y: 0, z: 0};

    scene.camera.position = {x: -15.0-xCamera, y: 10.0+yCamera, z: 10.0-zCamera};
    //xCamera+=0.5;
    //yCamera+=0.5;
    // scene.camera.position = {x:0.0+xCamera, y:5.0+yCamera, z:-15.0};
    

    //console.log(xCamera+"-"+yCamera+"-"+zCamera);

  }
}

var tipoCameraVal=0;
var rrrr,rrrx;
var rndPorcentaje=0;
var perdidas=0;

var killCameraAction;
var killCamera;

function cameraAction(){
  return;
  clearInterval(killCamera);

  tipoCameraVal=parseInt($("#tipoCamera").val());

  if(tipoCameraVal==5)
    tipoCameraVal=_.random(1,3);

  if(tipoCameraVal>0){
        
       killCamera = setInterval(cameraMove,15);

      }else{
        scene.camera.position = {x:0.0+xCamera, y:5.0+yCamera, z:-15.0};
      }
}

/*
$("#myScene").append(`
    <!--<a-box position="-0 0 -10" rotation="0 0 0"
        geometry="height: 1; width: 1; depth: 1;"
        material="color: #147341;" wireframe="true" wireframe-linewidth="2"></a-entity>-->

        <a-entity line="start: -5, -1, -4; end: -5 -1 -8; color: gray"
          line__2="start: -5, 5, -4; end: -5 5 -8; color: gray"
          line__3="start: -5, 5, -4; end: -5 -1 -4; color: gray"
          line__4="start: -5, 5, -8; end: -5 -1 -8; color: gray"
          line__5="start: -5, 5, -8; end: 4.5 5 -8; color: gray"
          line__6="start: -5, -1, -8; end: 4.5 -1 -8; color: gray"
          line__7="start: 4.5, 5, -8; end: 4.5 -1 -8; color: gray"
          line__8="start: 4.5, 5, -8; end: 4.5 5 -4; color: gray"
          line__9="start: 4.5, -1, -8; end: 4.5 -1 -4; color: gray"
          line__10="start: 4.5, 5, -4; end: 4.5 -1 -4; color: gray"></a-entity>

  `);
*/

function putBoxes(){
  $("#myScene").append(`
    <a-entity position="-5 0 -10" rotation="0 0 0"
        geometry="primitive: box; height: 1; width: 1; depth: 1;"
        material="color: #147341; roughness: 1.0; metalness: 0.2;" wireframe="true"></a-entity>

  `);
  $("#myScene").append(`
    <a-entity position="-5 0 -4" rotation="0 0 0"
        geometry="primitive: box; height: 1; width: 1; depth: 1;"
        material="color: #147341; roughness: 1.0; metalness: 0.2;"  class="bx1"></a-entity>

  `);
  $("#myScene").append(`
    <a-entity position="4.5 0 -4" rotation="0 0 0"
        geometry="primitive: box; height: 1; width: 1; depth: 1;"
        material="color: #147341; roughness: 1.0; metalness: 0.2;" class="bx1"></a-entity>

  `);
  $("#myScene").append(`
    <a-entity position="4.5 0 -10" rotation="0 0 0"
        geometry="primitive: box; height: 1; width: 1; depth: 1;"
        material="color: #147341; roughness: 1.0; metalness: 0.2;" class="bx1"></a-entity>

  `);
}

//putBoxes();

$(window).keypress(function(e) {

    // alert(e.keyCode);

    
    if (e.keyCode == 100){
      sessionStorage.clear();
      alert("sesion storage clear")

    }

    if(!bAnswer) return;

    if (e.keyCode == 176){
       contadorErrores++;
        if(contadorErrores==3){
          contadorErrores=0; disminuye();
        }
      setTimeout(function(){
        for(i=0;i<circles.length;i++){
          $("#t-"+i).remove();
        }

        start();


      },500);

      e.preventDefault();
      return;
    }


    _n=e.keyCode-48;
    if(_n<0 || _n>9) return;
    console.log(_n)

    for(i=0;i<circles.length;i++){
      circles[i].num=_a[i];

      // $("#myScene").append(`
      //       <a-text value="${circles[i].num}" position="${circles[i].x+" "+(circles[i].y)+" "+(circles[i].z)}" wrap-pixels="300" wrpa-count="20" material="transparent: true; opacity: 0.0;" geometry="primitive:sphere" color="white" id="t-${i}" class="n-${circles[i].num}"></a-text>

      // `);
      if(circles[i].num==_n){
        if(myArray.indexOf(i)!=-1){ 
          document.getElementsByClassName("n-"+_n)[0].setAttribute("color", "green"); 

        }else{

          bErrorRespuestas=1;
          document.getElementsByClassName("n-"+_n)[0].setAttribute("color", "red");
        }

        contadorRespuestas++;
      }
    
    }
    if(contadorRespuestas==_f("cantidadBolas")){

      if(bErrorRespuestas){
        contadorErrores++;
        if(contadorErrores==3){
          contadorErrores=0; disminuye();
        }
        

      }else{
        aumenta();


      }

      setTimeout(function(){
        for(i=0;i<circles.length;i++){
          $("#t-"+i).remove();
        }

        start();


      },500);
    }

    return;  
   // console.log(e.keyCode);
    /*
    if(e.keyCode == 32){
      event.preventDefault();

      if(estado==0){ start(); }
      if(estado==1){ answer(); } 
       
    }

    if(e.keyCode == 78){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin+=0.25;
      vMax+=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);


      start();


    }
     if(e.keyCode == 80){
      vMin=parseFloat($("#vMin").val());
      vMax=parseFloat($("#vMax").val());

      vMin-=0.25;
      vMax-=0.25;

      $("#vMin").val(vMin);
      $("#vMax").val(vMax);

      start();

    }*/
     if (e.keyCode == 120) { //next
       
     
      

      //for( i=0;i<tamano;i++){
        //console.log(e.which)

        // if(myIndex>=cantidad){
        //   circles[i].number=".";
          
        // }else{
        //   circles[i].number=arrPalabra[myIndex];
        // }
       
        
        

        //circles[i]={};

        // circles[i].x=100;
        // circles[i].y=100;
        // circles[i].r=18;
        // circles[i].vx=8;
        // circles[i].vy=10;

        
        // circles[i].color=abc1[myAbcArray[i]];

        // // if(y==0){ x=cantidadNumerosTotal/*-(masXY<0?0:1)*/; y=cantidadNumerosTotal+1+masXY/*-(masXY<0?0:1)*/; } 
        // // // if(y==0){ y=15-cantidadNumeros+masXY-(masXY<0?0:1); x=cantidadNumerosTotal+1+masXY-(masXY<0?0:1); } 
        // // y--; x--;

        // myIndex++;


        
        
     // }

     goNextPhrase();
     return;

    

    }
    if (e.keyCode == 122) { //prev
      goPrevPhrase();    
    }
    // noMover=1;
    // start();
});


$(document).keydown(function(e) {
  //prevDir=direccion;

  console.log(e.which);
  
  if(!bLoaded) return;

    switch(e.which) {

        case 37: // left

          if(pasadas<1) return;
          
          pasadas--;
          document.querySelector("#penguin-sledding").currentTime=arrayIntervalView[pasadas];

         
          
        break;

         case 90: // left 65
         if(pasadas<1) return;
          pasadas--;
          document.querySelector("#penguin-sledding").currentTime=arrayIntervalView[pasadas];

          
        break;

        case 38: // up
       
          cadena=_.shuffle(cadena2);
        break;

        case 87: // up
          direccion=2;
        break;

        case 88: // right 39
         pasadas++;
         document.querySelector("#penguin-sledding").currentTime=arrayIntervalView[pasadas];
          
        break;

        case 68: // right
           pasadas++;
           document.querySelector("#penguin-sledding").currentTime=arrayIntervalView[pasadas];
        break;

        case 40: // down
         
           $(".myTxt").show();
          
        break;

        case 83: // down
       
          
        break;

        default: return; // exit this handler for other keys


    }

    e.preventDefault(); // prevent the default action (scroll / move caret)
});


function newPlayVelocity(x){

  document.querySelector("#penguin-sledding").playbackRate = parseFloat(x);
}

function newIntervalView(x){

 
 bLoaded=0;


    intervalViewValue=x/1000;
    //countIntervalView=parseInt(total_time/intervalViewValue)
    arrayIntervalView=[];
    count=0;
    //console.log(countIntervalView)
    pasadas=0;
    for(var i=0;i<countIntervalView;i++){

      arrayIntervalView[i]=count;
      count+=intervalViewValue;

      if(count<=n("start-time")){
        pasadas=i;
      }
    }

    bLoaded=1;

   console.log("new Interval")



}


function multiplo(){ return Math.random() < 0.5 ? -1 : 1; }
