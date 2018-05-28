window.onload = function () {
  var images = document.getElementsByTagName('img')
  var selectedImage = null

  for (var i = 0; i < images.length; i++) {
    var img = images[i]
    img.addEventListener('mouseover', function (event) {
      // console.log(event)
      if (selectedImage) { return }
      if (!event.ctrlKey) { return }

      selectedImage = event.target
      selectedImage.style.width = selectedImage.offsetWidth * 3 + 'px'
      selectedImage.style.height = selectedImage.offsetHeight * 3 + 'px'
      selectedImage.style.position = 'fixed'
      // selectedImage.style.transition = '2s'
      selectedImage.style.left = window.innerWidth / 2 - 0.5 * selectedImage.style.width.replace('px', '') + 'px'
      selectedImage.style.top = 0
    }, true)
  }

  /* myMove.addEventListener('mouseover' === 'myMove()')
  function myMove (event) {
    var elem = document.getElementsByTagName('img')
    var pos = 0
    var id = setInterval(frame, 5)
    function frame () {
      if (pos === 350) {
        clearInterval(id)
      } else {
        pos++
        elem.style.top = pos + 'px'
        elem.style.left = pos + 'px'
      }
    }
  } */
  document.addEventListener('keydown', function (event) {
    // console.log(event)
    if (event.keyCode === 27 && selectedImage) {
      selectedImage.style.width = selectedImage.offsetWidth / 6 * 2 + 'px'
      selectedImage.style.height = selectedImage.offsetHeight / 6 * 2 + 'px'
      selectedImage.style.position = 'relative'
      selectedImage.style.left = 0
      selectedImage.style.top = 0
      selectedImage = null
    //  console.log(event)
    }
  }, true)
}
