const opt = document.querySelectorAll(".gate-option");
opt.forEach(Opt => {
    Opt.addEventListener("click", () => {
        let list = document.querySelectorAll(".gate")
        list.forEach(item => {
                if (Opt.classList[1] == item.classList[1]) {
                    if(item.hidden) item.hidden = false
                    else item.hidden = true
                
            }})
    })
})
let redirect = (file) => {
    window.location.href = "gates/"+file+".png"
}
const gates = document.querySelectorAll(".gate");
gates.forEach(gate => {
    gate.onclick = () => redirect(gate.classList[2])
})