// const left = document.getElementsByClassName('.left')
// const right= document.querySelectorAll('#right')
// const slider= document.querySelectorAll('slider')
// const btnnn=document.getElementById('btnn');
// btnnn.addEventListener('click', function() {
//     console.log('Button clicked! You can submit your data here.');
//   });

//   left.addEventListener('click', function() {
//     console.log('Button clicked! You can submit your data here.');
//   });

  var comntToShow = 1;
  

//   var buttons = document.querySelectorAll("#left");

//   // Add event listener to each button
//   buttons.forEach(function(button) {
//       button.addEventListener("click", function() {
//           alert("Button clicked: ");
        
//       });
//   });

function showCmnt(){
    var temp= comntToShow;
    var comments = document.getElementsByClassName('comment');

    // Loop through all elements and set their display property to 'block'
    for (var i = 0; i < comments.length; i++) {
        comments[i].style.display = 'none';
    }
    
    document.getElementById('comment_'+temp.toString()).style.display = 'block';
}


document.getElementById("left").addEventListener("click", function() {
    // alert("Button clicked: ");
    // document.getElementById('comment_1').style.display = 'block';
    if (comntToShow == 1) {
        comntToShow = 3;
    } else if (comntToShow == 2) {
        comntToShow = 1;
    } else if (comntToShow == 3) {
        comntToShow = 2;
    }
    showCmnt();
});




  document.getElementById("right").addEventListener("click", function() {
    // alert("Button clicked: ");
    // document.getElementById('comment_1').style.display = 'block';

    if (comntToShow == 1) {
        comntToShow = 2;
    } else if (comntToShow == 2) {
        comntToShow = 3;
    } else if (comntToShow == 3) {
        comntToShow = 1;
    }
    
    showCmnt();

});

