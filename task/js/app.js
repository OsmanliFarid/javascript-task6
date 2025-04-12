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
    const AtmMoneyfunctionBoxs = document.querySelector("#AtmMoneyfunctionBoxs")
    e.preventDefault()
    
    const arrNew2 = () => {
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
           AtmMoneyfunctionBoxs.innerHTML = `<img src="./images/exit-svgrepo-com.svg" alt="" class="MoneyImg" id="MoneyImg">
           <div class="AtmMoneyBox">
           <button class="AtmFunctionBoxs-button3" id="MoneyExitButton">
                           meblegi cixart
                       </button>
                       <div class="money-box">
                           <h1 class="AtmMoneyTitle" id="AtmMoneyTitle">
                               Balance:
                           </h1>
                           <div class="AtmMoneyBalance" id="AtmMoneyBalance">100</div>
                       </div>
                       <div class="money-box2">
                           <h1 class="AtmMoneyTitle2">
                               cixardilacaq mebleg:
                           </h1>
                           <input type="text" class="AtmMoneyBalanceExit" id="AtmMoneyBalanceExit">
                       </div>
                       
                   </div>`
           
                   
                   const AtmMoneyBalance = document.querySelector("#AtmMoneyBalance")
                   const MoneyExitButton = document.querySelector("#MoneyExitButton")
                   const AtmMoneyBalanceExit = document.querySelector("#AtmMoneyBalanceExit")
                   
                   
                   AtmMoneyBalance.innerText = e.balance
                   const AtmMoneyTitle = document.querySelector("#AtmMoneyTitle")
                   const MoneyImg = document.querySelector("#MoneyImg")
               
                   
                   
                   MoneyExitButton.addEventListener("click",() =>{
                       let mesaj = e.balance - Number(AtmMoneyBalanceExit.value)
                       e.balance = mesaj
                       if(e.balance >= 0){
                           
                           
                       AtmMoneyBalance.innerText = mesaj
                       
                       AtmMoneyTitle.innerText = "yeni balansin:"
                       AtmMoneyBalanceExit.value = ""
                       }else{
                           return alert("pul yoxdu balansda")
                       }
                       
                       
                       
                   })
                   MoneyImg.addEventListener('click',() =>{
                       AtmMoneyfunctionBoxs.innerHTML = `<div class="AtmFunctionBoxs2">
               <div class="money-box">
                       <button class="AtmFunctionBoxs-button1" id="AtmFunctionBoxsId">money</button>
                   </div>
                   <div class="deposit-box">
                       <button class="AtmFunctionBoxs-button2">
                           deposit
                       </button>
                   </div></div>`
                   AtmMoneyfunctionBoxs.innerHTML = ""
                   arrNew2()
                   
                   })
       })    
            }
             
           
           
       })
    }
    arrNew2()
    
     
    
})


bankImgId.addEventListener('click',() =>{
    
    
    mobileBox.classList.add("mobile-box2")
    mobileBox.classList.remove("mobile-box")
    bankImgId.remove()
})

