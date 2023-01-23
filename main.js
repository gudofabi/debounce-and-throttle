const input = document.querySelector("input")

const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

// update debounce text
const updateDebounceText = decounce(text => {
// const updateDebounceText = decounce(() => {
    debounceText.textContent = text
    // incrementCount(debounceText) // increment function
})

// update throttle text
const updateThrottleText = throttle(text => {
// const updateThrottleText = throttle(() => {
    throttleText.textContent = text
    // incrementCount(throttleText)
})

input.addEventListener("input", e => {
    // default
    defaultText.textContent = e.target.value

    // decounce
    updateDebounceText(e.target.value)

    // throttle
    updateThrottleText(e.target.value)

})

function decounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
        clearTimeout(timeout); // must clear the timeout to run the cb one time
        timeout = setTimeout(() => { // delay the callback
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeOutFunc = () => {
            if(waitingArgs == null) {
                shouldWait = false
            } else {
                cb(...waitingArgs)
                waitingArgs = null
                setTimeout(timeOutFunc, delay)
            }
        }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        cb(...args)
        shouldWait = true

        setTimeout(timeOutFunc, delay)
    }
}

// Mouse movement
// document.addEventListener("mousemove", e => {
//     incrementCount(defaultText)
//     updateDebounceText()
//     updateThrottleText()
// })

function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1
}