let answers=['B','B','B','B'];
let a= document.querySelector(".quiz-form");
let b=document.querySelector(".result");
let c = document.querySelector(".p-3");
a.addEventListener("submit",e=>
{
    let score=0;
    e.preventDefault();
    let userAns=[a.q1.value,a.q2.value,a.q3.value,a.q4.value];
    //to check answers 
    userAns.forEach((answer,index)=>{
     if(answer==answers[index])
     {
         score+=25;

     }

    });
     setTimeout(()=>{
         scrollTo(0,0);},3);
   b.classList.remove("d-none");
   //c.textContent=score+"%";
   let output=0;
   const result=setInterval(()=>{
       
       c.textContent=`${output}%`;
       
       if(output==score)
       {
           clearInterval(result);

       }
       output++;
   },10);

    
});