function startScan(){
    const videoContainer = document.getElementById("videoContainer")
    const video = document.getElementById("video")
    const fakeDiv = document.getElementById("fakeDiv")
    alert("One virus was successfully scanned!")
    fakeDiv.style.display = "none"
    videoContainer.style.display = "block"
    video.style.width = "100vw"
    video.play()
}