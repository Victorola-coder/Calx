let values=document.getElementById("values");
let buttons=document.querySelectorAll("button");
let screenvalues=""
 
for( let i=0;i < buttons.length; i++){
  buttons[i].addEventListener("click",(e)=>{
    let numberEntered=e.target.innerHTML;
    if(numberEntered==="AC"){
        values.value=""
       screenvalues=""
    }else if(numberEntered==="="){
        values.value=eval(screenvalues)
    }
    else{
     screenvalues+=numberEntered
     values.value=screenvalues
    }
  })
}