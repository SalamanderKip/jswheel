let labels = ['test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test']
let rotation = {
    start: 0,
    end: 0,
    lock: false
}

createWheel()
createSpinButton()

function createWheel() {
    const wheel = document.createElement('div')
    wheel.id = 'wheel'
    wheel.classList.add('wheel')
    for (let i = 0; i < labels.length; i++) {
        createSegment(i, labels[i], i * 10, wheel)
    }
    wheel.addEventListener('animationed', function () {
        if (rotation.lock) {
            rotation.start = rotation.end
            rotation.lock = false
            wheel.classList.remove('spin')
            console.log('animation end')
            console.log(rotation.start, rotation.end)
        }
    })
    document.body.appendChild(wheel)
}

function createSegment(index, labels, rotation, wheel) {
    const div = document.createElement('div')
    div.innerHTML = labels
    div.classList.add("segment")
    div.style.transform = "rotate(" + rotation + "deg)"
    div.style.zIndex = (index + 1)
    wheel.appendChild(div)
}

function createSpinButton() {
    const div = document.createElement('div')
    div.innerHTML = "Spin"
    div.classList.add("spinbutton")
    document.body.appendChild(div)
    div.addEventListener('click', function () {
        if (!rotation.lock) {
            console.log('click')
            rotation.end = getRandomIntegerBetween(rotation.start + 90, rotation.start + 270)
            rotation.lock = true
            console.log(rotation.start, rotation.end)
            createSpinAnimationClass(rotation.start, rotation.end)
        }
    })
}

function createSpinAnimationClass(startRot, endRot) {
    if (document.getElementById('dynamicCSS')) {
        let style = document.getElementById('dynamicCSS')
        if (!style) {
            style = document.createElement('style')
            style.setAttribute('type', 'text/css')
            style.setAttribute('id', 'dynamicCSS')
        }

        style.innerHTML = '.spin { animation: spinAnimation 1s forwards; transform-origin: 0px 20px; }'
        style.innerHTML += '@keyframes spinAnimation { from {transform: rotate(' + startRot + 'deg);} to {transform: rotate(' + endRot + 'deg)'
        document.getElementsByTagName('head')[0].appendChild(style)
        document.getElementById('wheel').classList.add('spin')
    }
}

function getRandomIntegerBetween(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min)
}

Element.prototype.remove = function () {
    this.parentElement.removeChild(this)
}