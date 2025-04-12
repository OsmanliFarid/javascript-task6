const bankImgId = document.querySelector("#bankImgId")
const mobileBox = document.querySelector("#mobileBox")
const AtmNumber = 0;
const AtmPin = "";
let arrBox = [
    {
        id:1,
        Number16:12345678,
        pin:1234,
        balance:600,
    },
    {
        id:2,
        Number16:87654321,
        pin:4321,
        balance:600
    }
]

const AtmInputNumber = document.querySelector("#AtmInputNumber")
const AtmInputPin = document.querySelector("#AtmInputPin")
const AtmInputSubmit = document.querySelector("#AtmInputSubmit")
const AtmFunctionBoxs = document.querySelector("#AtmFunctionBoxs")
let arrNew2 = []
AtmInputSubmit.addEventListener("click",(e) =>{
    
    let AtmNumber8 = AtmInputNumber.value
    let AtmNumberPin4 = AtmInputPin.value
    const loginFormBoxs = document.querySelector("#loginFormBoxs")
    
     
    e.preventDefault()
    let mesaj = [];
    let arrBox2 = arrBox.filter((e)=>{
         if(e.Number16 === Number(AtmNumber8) && e.pin === Number(AtmNumberPin4)){
            loginFormBoxs.remove()
            AtmFunctionBoxs.innerHTML = `<div class="AtmFunctionBoxs2">
            <div class="money-box">
                    <button class="AtmFunctionBoxs-button1" id="AtmFunctionBoxsId">money</button>
                </div>
                <div class="deposit-box">
                    <button class="AtmFunctionBoxs-button2">
                        deposit
                    </button>
                </div></div>`
                const AtmFunctionBoxsId = document.querySelector("#AtmFunctionBoxsId")
    AtmFunctionBoxsId.addEventListener('click',() =>{
        AtmFunctionBoxs.innerHTML = ""
        
        
    })
         }
         
        
        
    })
    
    
    
})


bankImgId.addEventListener('click',() =>{
    
    
    mobileBox.classList.add("mobile-box2")
    mobileBox.classList.remove("mobile-box")
    bankImgId.remove()
})