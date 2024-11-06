const color1=document.getElementById('color1');
const color2=document.getElementById('color2');
const color3=document.getElementById('color3');
const color4=document.getElementById('color4');
const color5=document.getElementById('color5');
const color6=document.getElementById('color6');
const color7=document.getElementById('color7');         
const color8=document.getElementById('color8');

color1.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const clss3=document.getElementsByClassName('color-a');
    const c_link=document.getElementsByClassName('c-link');
    console.log(clss2);
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#79bedb';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#79bedb"; 
        clss2[i].style.borderColor='#79bedb'; 
    }
    for(let i=0;i<clss3.length;i++){
        clss3[i].classList.add("color");
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link1');
    }

});
color2.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ff9900';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ff9900";
        clss2[i].style.borderColor='#ff9900';    
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link2');
    }
});
color3.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#8cc739';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#8cc739";
        clss2[i].style.borderColor='#8cc739';    
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link3');
    }
});
color4.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ba6222';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ba6222";
        clss2[i].style.borderColor='#ba6222';    
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link4');
    }
});
color5.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#cc0000';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#cc0000";  
        clss2[i].style.borderColor='#cc0000';  
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link5');
    }
});
color6.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#84596b';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#84596b"; 
        clss2[i].style.borderColor='#84596b';   
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link6');
    }
});
color7.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ff717e';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ff717e";
        clss2[i].style.borderColor='#ff717e';    
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link7');
    }
});
color8.addEventListener("click",()=>{
    const clss=document.getElementsByClassName('color');
    const clss2=document.getElementsByClassName('bg-color');
    const c_link=document.getElementsByClassName('c-link');
    for(let i=0;i<clss.length;i++){
        clss[i].style.color='#ffcd00';
    }
    for(let i=0;i<clss2.length;i++){
        clss2[i].style.backgroundColor="#ffcd00"; 
        clss2[i].style.borderColor='#ffcd00';   
    }
    for(let i=0;i<c_link.length;i++){
        c_link[i].classList.add('c_link8');
    }
});
function ShowWeb(){
    setTimeout(()=>{
        document.querySelector(".wrapper").style.display='block';
        document.querySelector(".loader2").style.display='none';
    
    },2000);
}
$(document).ready(()=>{
    
    $("#id1").click(()=>{
        $("#id1-menu").slideToggle("slow");
        $("#id2-menu").slideUp("slow");
        $("#id3-menu").slideUp("slow");
    });
    $("#id2").click(()=>{
        $("#id2-menu").slideToggle("slow");
        $("#id1-menu").slideUp("slow");
        $("#id3-menu").slideUp("slow");
    });
    $("#id3").click(()=>{
        $("#id3-menu").slideToggle("slow");
        $("#id2-menu").slideUp("slow");
        $("#id1-menu").slideUp("slow");
    });
    
});
AOS.init();

