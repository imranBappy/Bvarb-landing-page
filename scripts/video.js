(function(){
    const playBtn = document.querySelectorAll('#play-btn')
    playBtn.forEach((e, i) =>{
        e.onclick = () =>{
            const video = playBtn[i].parentNode.childNodes[3];
            playBtn[i].parentNode.childNodes[1].style.display = 'none'
            video.setAttribute('controls', true)
            video.play()
        }
    })
})()