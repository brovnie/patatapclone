var circles = [];

function onKeyDown(event){
    
    if(keyData[event.key]){
        
    //find height and width of view port
    var screenSize = new Point(view.size.width, view.size.height);
    //generate random for circle
    var randomPosition = Point.random();
    //generate circles position
    var circlePosition = screenSize * randomPosition;
        
    //create circle
    keyData[event.key].shape;    
    var newShape = new Path.Circle(circlePosition, 500);
    newShape.fillColor = keyData[event.key].color;
    keyData[event.key].sound.play();
    
    //push circle to array
    circles.push(newShape);  
    }
} // end onKeyDown function

function onFrame(event){
    for(var i = 0; i < circles.length; i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(.9);
        
         if(circles[i].area < 1){
        circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
         }
    }
} // end function onFrame

//close div
document.querySelector('a').addEventListener('click',function(e){
   document.querySelector('.info').style.display ="none" ;
});

// shapes:
// new Path.Circle(circlePosition, 500);