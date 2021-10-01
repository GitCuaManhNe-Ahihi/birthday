
var vainput = document.querySelector('#inputs');
var check = document.querySelector('.btncheck');
var ques = document.querySelector('.ctn-ques');
var sucess= document.querySelector('.cnt-sucess');
var imghp = document.querySelector('.img-happy');
var imgsad = document.querySelector('.img-sad');

check.addEventListener('click',()=>{
    var a =vainput.value
    if(a === "10/10/2001")
    {
        ques.classList.toggle('active')
        sucess.classList.toggle('active')
    }
    else
    {
      imghp.classList.toggle('active')
        imgsad.classList.toggle('active')
    }
})

