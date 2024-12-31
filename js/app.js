const imgbx= document.querySelectorAll('.imgBox');


console.log(imgbx);

// imgbx.addEventListener('click', function(){
//         imgbx.classList.toggle('active');
//     })

imgbx.forEach(popup => popup.addEventListener('click' , function(){
    popup.classList.toggle('active');
}))