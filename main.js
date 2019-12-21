var div = document.createElement('div')

div.className = 'demo'

var lastX
var lastY

document.body.appendChild(div)

var dragging = false
div.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function (e) {
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
        var resultY = top + deltaY
        var resultX = left + deltaX
        if (resultX < 0) {
            resultX = 0
        }

        if (resultY < 0) {
            resultY = 0
        }
        div.style.top = resultY + 'px'
        div.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY
    }
}

document.onmouseup = function () {
    dragging = false
}
