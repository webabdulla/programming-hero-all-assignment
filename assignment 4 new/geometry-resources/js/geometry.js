// triangle 

document.getElementById('triangle').addEventListener('click',function() {
    const triangleB = document.getElementById('triangle-b');
    const triangleBString = triangleB.value;
    const newInputTriangle = parseInt(triangleBString);
    console.log(newInputTriangle);

    const triangleH = document.getElementById('triangle-h');
    const triangleHString = triangleH.value;
    const newInputTriangleH = parseInt(triangleHString);
    console.log(newInputTriangleH);


    const calculate = 0.5 * newInputTriangle * newInputTriangleH;
    console.log(calculate);
});

// rectangle
document.getElementById('rectangle').addEventListener('click',function(){
    const rectangleW = document.getElementById('rectangle-w');
    const rectangleWString = rectangleW.value;
    const newInputRectangle = parseInt(rectangleWString);
    console.log(newInputRectangle);

    const rectangleL = document.getElementById('rectangle-l');
    const triangleLString = rectangleL.value;
    const newInputrectangleL = parseInt(triangleLString);
    console.log(newInputrectangleL);

    const calculate = newInputrectangleL * newInputRectangle;
    console.log(calculate);
});


// Parallelogram 
document.getElementById('Parallelogram').addEventListener('click',function(){
    const ParallelogramH = document.getElementById('Parallelogram-h');
    const ParallelogramString = ParallelogramH.value;
    const newInputParallelogramH = parseInt(ParallelogramString);

    const ParallelogramB = document.getElementById('Parallelogram-b');
    const ParallelogramBString = ParallelogramB.value;
    const newInputParallelogramB = parseInt(ParallelogramBString);

    const calculate = newInputParallelogramB * newInputParallelogramH;
    console.log(calculate);
});


// rhombus
document.getElementById('rhombus').addEventListener('click',function(){
    const rhombusD1 = document.getElementById('rhombus-d1');
    const rhombusD1String = rhombusD1.value;
    const newInputrhombusD1 = parseInt(rhombusD1String);

    const rhombusD2 = document.getElementById('rhombus-d2');
    const rhombusD2String = rhombusD2.value;
    const newInputrhombusD2 = parseInt(rhombusD2String);
  

    const calculate = 0.5 * newInputrhombusD1 * newInputrhombusD2;
    console.log(calculate);
});

// Pentagon 
document.getElementById('pentagon').addEventListener('click',function(){
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPString = pentagonP.value;
    const newInputpentagonP = parseInt(pentagonPString);
    
    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBString = pentagonB.value;
    const newInputpentagonB = parseInt(pentagonBString);
    

    const calculate = 0.5 * newInputpentagonP * newInputpentagonB;
    console.log(calculate);
});


// Ellipse 

document.getElementById('pentagon').addEventListener('click',function(){
    const pentagonP = document.getElementById('pentagon-p');
    const pentagonPString = pentagonP.value;
    const newInputpentagonP = parseInt(pentagonPString);
    
    const pentagonB = document.getElementById('pentagon-b');
    const pentagonBString = pentagonB.value;
    const newInputpentagonB = parseInt(pentagonBString);
    

    const calculate = 0.5 * newInputpentagonP * newInputpentagonB;
    console.log(calculate);
});
















// function getNewColor() {
//     let color = "#";
//     const letters = "0123456789ABCDEF";
    
//     for (let i = 0; i<6; i++) {
//       color = color + letters[Math.floor(Math.random() * 16)];
//     }
//     document.body.style.background = color;
//     document.getElementById("triangle");
   
//   }