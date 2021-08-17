(function(){
    const menu = document.getElementById("menu");
    const overlay = document.querySelector(".nav-overlay");
    const menuOption = document.querySelector('#menu-option');
    menuOption.onclick = ()=>{
        console.log('clicked');
        menu.style.right= '0';
        menu.style.display = 'block';
        overlay.style.display = 'block';
        menu.style.transform= 'translateX(0)'
        menu.style.boxShadow ='0 0 15px rgb(0 0 0 / 20%)'
    }
    window.onclick = function(event) {
    if (event.target == overlay) {
        menu.style.display = "none";
        overlay.style.display = 'none'
    }
    }
})()