function startScan(){
    const videoContainer = document.getElementById("videoContainer")
    const video = document.getElementById("video")
    const fakeDiv = document.getElementById("fakeDiv")
    const text = document.getElementById("textContainer")
    alert("One virus was successfully scanned!")
    text.style.display = "none"
    fakeDiv.style.display = "none"
    videoContainer.style.display = "block"
    videoContainer.style.width = "100vw"
    videoContainer.style.height = "100vh"
    video.style.width = "100vw"
    video.play()
}