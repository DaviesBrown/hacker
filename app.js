const h1 = document.querySelector("h1")
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

h1.onmouseover = event => {
    let iteration = 0
    console.log(event)
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if (index < iteration) {
                return event.target.attributes.data.value[index]
            } else {
                return letters[Math.floor(Math.random() * 26)]
            }
        })
        .join("")
    if (iteration >= event.target.attributes.data.value.length) clearInterval(interval)
    iteration += 1 / 3
    }, 30)
}
