window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

const btn=document.getElementById("btn");

btn.addEventListener("click", function(){
   alert("You clicked me");
})