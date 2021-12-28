window.addEventListener('load', function() {
    
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key="${e.key}"]`)
        const key = this.document.querySelector(`.key[data-key=${e.key}]`)
    
        console.log(audio);
    
        if(!audio) return;
    
        audio.currentTime = 0; //rewind to the start
        audio.play()
        key.classList.add('playing')
    });

    const keys = this.document.querySelectorAll('.key')

    keys.forEach(key => key.addEventListener('transitionend', function (e) {
        if(e.propertyName !== 'transform') return; // skip if it's not a transform
        this.classList.remove('playing') //once its over the transform, we reset the properties
    }))

})
