let login=document.querySelector(".login")
let input1=document.querySelector(".input1")
let input2=document.querySelector(".input2")

handleSubmit=()=>{
     let email=input1.textContent
     let password=input2.textContent
     console.log(email,password)
     input1.value=""
     input2.value=""
}
login.addEventListener("click",handleSubmit)