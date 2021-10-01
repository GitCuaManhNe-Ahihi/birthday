
var vainput = document.querySelector('#inputs');
var check = document.querySelector('.btncheck');
var ques = document.querySelector('.ctn-ques');
var sucess= document.querySelector('.cnt-sucess');
var imghp = document.querySelector('.img-happy');
var imgsad = document.querySelector('.img-sad');
var video = document.querySelector('.video');
var videoo = document.querySelector('#videoo');
var video1 = document.querySelector('#video1');
var video2= document.querySelector('#video2');
var question= document.querySelector('.question');
var containercard = document.querySelector('.container-card')



vainput.addEventListener('focus',()=>{
   video2.play()
   
  })

check.addEventListener('click',(e)=>{
    e.stopPropagation
    var a =vainput.value
    if(a === "10/10/2001")
    {
        ques.classList.add('active')
        sucess.classList.add('active')
        sucess.addEventListener('click',(ev)=>{
            video2.pause()
            ev.stopPropagation
            question.classList.add('active')
            video.classList.add('active')
            videoo.play()
            
            setTimeout(()=>{
                videoo.pause()
                video1.play()
                video.classList.remove('active')
                containercard.classList.add('active')
            },39900)
             }
        )
        
        
    }
    else
    {
      imghp.classList.add('active')
      imgsad.classList.add('active')
      vainput.addEventListener('focus',()=>{
        imgsad.classList.remove('active')
        imghp.classList.remove('active')
       
      })
    }
})

