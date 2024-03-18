const theme = document.querySelector(".theme")
const body = document.querySelector("body")

theme.addEventListener("click", () => {
    body.classList.toggle('dark')
})