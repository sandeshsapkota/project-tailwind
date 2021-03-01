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

    const initialActionElement = toggleBtn.querySelector('.toggle-active') || toggleTriggeringElements[0];

    toggleTriggeringElements.forEach(toggleTriggeringElement => {

        toggleTriggeringElement.addEventListener("click", function() {

            toggleTriggeringElements.forEach(
                toggleTriggeringElement => handleClass(toggleTriggeringElement, "toggle-active", "remove"))

            handleClass(this, "toggle-active")
            handleTogglingLayer.call(this, togglingLayer)

        })

    })

    //    when initially loading

    handleClass(initialActionElement, "toggle-active")
    handleTogglingLayer.call(initialActionElement, togglingLayer)
})

