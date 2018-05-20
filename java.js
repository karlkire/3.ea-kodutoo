window.onload = function () {
  // valid koik pildid
  // foreach pildidi ja igale pildile lisa eventlistener
  /* var srcList = $('img').map(function () {
    return this.src
  }).get() */
  // var ctrlKey = String.fromCharCode(keyPress)
  // const ctrlKey = String.fromCharCode(event.buttonPress)
  var images = document.getElementsByTagName('img')
  // console.log(images)
  // var srcList = []
  // for (var i = 0; i < images.length; i++) {
  //  srcList.push(images[i].src)
  // }
  for (var i = 0; i < images.length; i++) {
    var img = images[i]
    img.addEventListener('mouseover', function (event) {
      // console.log(event)
      if (!event.ctrlKey) { return }
      // const letter = String.fromCharCode(event.which)
      var el = event.target
      el.style.width = el.offsetWidth * 1.5 + 'px'
      el.style.height = el.offsetHeight * 1.5 + 'px'

      el.style.position = 'fixed'
      el.style.transition = '2s'
      // el.style.left = event.x + el.offsetWidth * 0.5 + 'px' // hiire koordinaadid
      // el.style.top = event.y + el.offsetHeight * 0.5 + 'px'
      el.style.left = window.innerWidth / 2 - 0.5 * el.style.width.replace('px', '') + 'px'
      el.style.top = 0
      console.log(event)
    }, true)

    //document.addEventListener('keyDown', function (event) {
    this.document.addEventListener("keyDown", checkKeyPress, false)
    function checkKeyPress(key){
        if(key.keyCode == "17"){
      //const CrtlKey = String.fromCharCode(17)
      // const ctrlKey = String.fromCharCode(event.keyDown)
      // if (!event.ctrlKey) { return }
      // alert('CrtlKey')

      // console.log(event)
        var el = event.target
        if (event.ctrlKey) {
        //alert("ctr key was pressed during the click");

        el.style.width = el.offsetWidth / 3 * 2 + 'px'
        el.style.height = el.offsetHeight / 3 * 2 + 'px'
        el.style.position = 'relative'
        el.style.left = 0
        el.style.top = 0
        }
      }, true)
    }
  }
}
// Image.addEventListener(onmouseover, src('img')[, large]);

// var img = document.getElementById('image-hover')