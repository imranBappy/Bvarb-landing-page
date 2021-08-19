(function(){

    const scroll_effect = (classNames, top = 1, animate) => {
        window.addEventListener('scroll',()=>{
            const section = document.querySelector(classNames);
            const contentPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / top
            if(contentPosition < screenPosition){
                section.classList.add('animate__animated')
                section.classList.add(animate)
            }else{
                section.classList.remove(animate)
            }
        })
    };
    
    scroll_effect('#introduce-left', 1.5, 'animate__bounceInRight');
    scroll_effect('#introduce-right', 1.5, 'animate__bounceInLeft');
    // scroll_effect('.nft-info', 1.5, 'animate__fadeInLeft');
    // scroll_effect('.nft-img', 1.5, 'animate__fadeInRight');
    scroll_effect('#crypto', 1.5, 'animate__bounce');
    scroll_effect('#testimonial', 1.5, 'animate__pulse');
    scroll_effect('#footer', 1.5, 'animate__swing');
})()