let retrieveRequest = () => {
    let req = {
        method: selectedMethod
    }
    fetch("http://" + httpUrl.value + "/" + httpRequest.value, req)
        .then(res => {
            console.log("fetched!")
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            responseZone.innerHTML = JSON.stringify(data, undefined, 4)
        })
}

let selectMethod = (methodName) => {
    let btn = document.getElementById("methodButton" + methodName)

    for (let btn of methodButtons) {
        btn.classList.remove("enabled")
        btn.classList.add("disabled")
    }

    btn.classList.remove("disabled")
    btn.classList.add("enabled")

    selectedMethod = btn.value
}

let methodButtons = document.getElementsByClassName("methodButton")
let selectedMethod = "GET"

for (let btn of methodButtons) {
    btn.value = btn.innerHTML
    btn.addEventListener("click", () => {
        selectMethod(btn.value)
    })
}

sendIcon.addEventListener("click", () => { retrieveRequest() })
selectMethod("GET")