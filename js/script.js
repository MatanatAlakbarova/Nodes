//--------------------------------------------------------------//
document.querySelector(".bars").addEventListener("click",()=>{
    document.querySelector(".nav-links").style.opacity="1"
})
//----------------------------------------------------------------------//
var buttons=document.querySelectorAll(".color-button");
buttons.forEach(btn => {
    btn.addEventListener("click",()=>{
        var boxs= document.querySelectorAll(".boxes");
        boxs.forEach(b => {
            b.style.backgroundColor="gray"          
        });        
        let colorId=btn.getAttribute("data-id")
        let box=document.getElementById(colorId)
        console.log(box);
        box.style.backgroundColor=colorId;            
    })
});
//-----------------------------------------------------------------//



//-------------------------------------------------------------------------------//
document.querySelector(".button1").addEventListener("click",()=>{
    document.querySelector(".box1-img").src="./assets/img/images (1).jpg"
    document.querySelector(".box2-img").src="./assets/img/pexels-photo-580900.jpeg"
    document.querySelector(".box3-img").src="./assets/img/images.jpg"
    document.querySelector(".box4-img").src="./assets/img/download.jpg"
})
document.querySelector(".button2").addEventListener("click",()=>{
    document.querySelector(".box2-img").src="./assets/img/images (1).jpg"
    document.querySelector(".box1-img").src="./assets/img/photo-1536250853075-e8504ee040b9.jpg"
    document.querySelector(".box3-img").src="./assets/img/images.jpg"
    document.querySelector(".box4-img").src="./assets/img/download.jpg"
})
document.querySelector(".button3").addEventListener("click",()=>{
    document.querySelector(".box3-img").src="./assets/img/images (1).jpg"
    document.querySelector(".box1-img").src="./assets/img/photo-1536250853075-e8504ee040b9.jpg"
    document.querySelector(".box2-img").src="./assets/img/pexels-photo-580900.jpeg"
    document.querySelector(".box4-img").src="./assets/img/download.jpg"
})
document.querySelector(".button4").addEventListener("click",()=>{
    document.querySelector(".box4-img").src="./assets/img/images (1).jpg"
    document.querySelector(".box3-img").src="./assets/img/images.jpg"
    document.querySelector(".box2-img").src="./assets/img/pexels-photo-580900.jpeg"
    document.querySelector(".box1-img").src="./assets/img/photo-1536250853075-e8504ee040b9.jpg"
})


