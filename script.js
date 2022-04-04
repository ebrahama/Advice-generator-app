const adv = document.querySelector("#Adv")
const tex = document.querySelector("#tex")

const fapi = async() => {

    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    adv.textContent = 'ADVICE  # ' + data.slip.id
    tex.textContent = '"  '+ data.slip.advice + '  "'

}

fapi()