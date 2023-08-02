function setWidthAndHeightInputById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.value;
    const NewElement = parseFloat(elementString);
    return NewElement;
}

function getValueOfGeometryById (elementId){
    const particles = document.getElementById(elementId);
    const particlesString = particles.value;
    const NewParticles = parseFloat(particlesString);
    return NewParticles; 
}


// triangle 
document.getElementById('triangle').addEventListener('click',function() {
   const triangleWidth = setWidthAndHeightInputById('triangle-b');
   const triangleHeight = setWidthAndHeightInputById('triangle-h');

   if(triangleWidth<0 || triangleHeight<0){
    alert('Please provide positive value');
   }

    const calculate = 0.5 * triangleWidth * triangleHeight;
    document.getElementById('new-comment').innerHTML= "Triangle Area :" + calculate+"cm²"
});

// rectangle
document.getElementById('rectangle').addEventListener('click',function(){
    const rectangleWidth = getValueOfGeometryById('rectangle-w');
    const rectangleHeight = getValueOfGeometryById('rectangle-l');

    const calculate = rectangleWidth * rectangleHeight;
    document.getElementById('new-comment1').innerHTML= "Rectangle Area :   "  +  calculate;
});


// Parallelogram 
document.getElementById('Parallelogram').addEventListener('click',function(){
    const parallelogramWidth = getValueOfGeometryById('Parallelogram-b')
    const parallelogramHeight = getValueOfGeometryById('Parallelogram-h')

    const calculate = parallelogramWidth * parallelogramHeight;
    document.getElementById('new-comment2').innerHTML= "Parallelogram Area :   "  +  calculate;
});


// rhombus
document.getElementById('rhombus').addEventListener('click',function(){
   const rhombusHeight = setWidthAndHeightInputById('rhombus-d1');
   const rhombusWidth = setWidthAndHeightInputById('rhombus-d2');
  

    const calculate = 0.5 * rhombusHeight * rhombusWidth;
    document.getElementById('new-comment3').innerHTML= "Rhombus Area :   "  +  calculate;
});

// Pentagon 
document.getElementById('pentagon').addEventListener('click',function(){
    const pentagonP = setWidthAndHeightInputById('pentagon-p') 
    const pentagonB = setWidthAndHeightInputById('pentagon-b');
  
    const calculate = 0.5 * pentagonP * pentagonB;
    document.getElementById('new-comment4').innerHTML= "Pentagon Area :   "  +  calculate;
});


// Ellipse 

document.getElementById('ellipse').addEventListener('click',function(){
   const ellipseA = getValueOfGeometryById('ellipse-a');
   const ellipseB = getValueOfGeometryById('ellipse-b');
    

    const calculate = 3.1416 * ellipseA * ellipseB;
    document.getElementById('new-comment5').innerHTML= "Ellipse Area :   "  +  calculate;
});












