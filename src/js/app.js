function handleTogglingLayer(togglingLayer) {
    const cords = this.getBoundingClientRect()
    const { width, height } = cords
    const offsetFromLeft = this.offsetLeft

    togglingLayer.style.width = width + "px"
    togglingLayer.style.height = height + "px"
    togglingLayer.style.left = offsetFromLeft + "px"
}

function handleClass(node, className, action = "add") {
    node.classList[action](className)
}

const toggleButtons = document.querySelectorAll(".btn-toggle-js")

toggleButtons.forEach(toggleBtn => {
    const toggleTriggeringElements = toggleBtn.querySelectorAll("span")
    const togglingLayer = toggleBtn.querySelector(".toggling-layer")

    const initiallyActiveElm = toggleBtn.querySelector(".toggle-active") || toggleTriggeringElements[0]

    function handleClick() {
        toggleTriggeringElements.forEach(
            toggleTriggeringElement => handleClass(toggleTriggeringElement, "toggle-active", "remove"))

        handleClass(this, "toggle-active")
        handleTogglingLayer.call(this, togglingLayer)
    }

    toggleTriggeringElements.forEach(toggleTriggeringElement => {

        const featureSection = document.querySelector(".feature")

        toggleTriggeringElement.addEventListener("click", function() {
            handleClick.call(this)

            // your different required action for the elements here

            if (this.dataset.actionType === "less") {
                handleClass(featureSection, "feature--visible", "remove")
                return
            }

            handleClass(featureSection, "feature--visible")
        })
    })

    //    when initially loading
    handleClass(initiallyActiveElm, "toggle-active")
    handleTogglingLayer.call(initiallyActiveElm, togglingLayer)
})

const magnetCursors = document.querySelectorAll(".magnet-cursor")

window.addEventListener("mousemove", function(e) {
    const { clientX, clientY } = e

    magnetCursors.forEach(magnetCursor => {
        magnetCursor.style.top = clientY + "px"
        magnetCursor.style.left = clientX + "px"
    })

    const targetEl = e.target

    if (targetEl.tagName === "BUTTON" || targetEl.parentNode.tagName === "BUTTON" || targetEl.tagName === "A" ||
        targetEl.parentNode.tagName === "A") {
        magnetCursors.forEach(magnetCursor => {
            handleClass(magnetCursor, "invisible")
        })
    } else {
        magnetCursors.forEach(magnetCursor => {
            handleClass(magnetCursor, "invisible", "remove")
        })
    }

})
