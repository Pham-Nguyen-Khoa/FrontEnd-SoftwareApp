
const modalWindow = document.querySelector(".modal-window");
const iframe = modalWindow.querySelector(".modal-window-container  .modalWindow-video-container  .modalWindow-video iframe");
const modalVideo = modalWindow.querySelector(".modal-window-container  .modalWindow-video-container  .modalWindow-video");

const openVideo = () => {
    iframe.src = "https://www.youtube.com/embed/VA8PzkQa8d8"
    
    modalWindow.classList.add("show");
}

const closeModal = () => {
    iframe.src = ""
    modalWindow.classList.remove("show");
}


function closeModalOnOutsideClick(event) {
    if (!modalVideo.contains(event.target)) {
    closeModal();
    }
}