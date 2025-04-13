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
               const arrBox4 = () =>{
                AtmFunctionBoxs.innerHTML = `<div class="AtmFunctionBoxs2">
               <div class="money-box">
                       <button class="AtmFunctionBoxs-button1 AtmFunctionBoxsId" id="">money</button>
                   </div>
                   <div class="deposit-box">
                       <button class="AtmFunctionBoxs-button2 AtmFunctionBoxs3" id="">
                           deposit
                       </button>
                   </div></div>`
               }
               arrBox4()
                   const AtmFunctionBoxsId = document.querySelector(".AtmFunctionBoxsId")
                   const AtmFunctionBoxs3 = document.querySelector(".AtmFunctionBoxs3")
                   const DepositFunctionBoxs = document.querySelector("#DepositFunctionBoxs")

                    AtmFunctionBoxs3.addEventListener('click',() =>{
                        AtmFunctionBoxs.innerHTML = ""
                        DepositFunctionBoxs.innerHTML = `<img src="./images/exit-svgrepo-com.svg" alt="" class="MoneyImg">
                        <button class="DepositFunctionButton" id="DepositFunctionButton">Deposit</button>
                    <div class="depositFunctionBox">
                        <h1 class="DepositBalanceTitle">Balance:</h1>
                    <div class="DepositBalance" id="DepositBalance"></div>
                    </div>
                    <div class="depositFunctionBox2">
                        <h1 class="DepositBalanceTitle2">Deposit meblegi:</h1>
                    <input type="text" class="depositNewBalance" id="DepositNewBalance">
                    </div>`
                    const DepositBalance = document.querySelector("#DepositBalance")
                    const DepositNewBalance = document.querySelector("#DepositNewBalance")
                    const DepositFunctionButton = document.querySelector("#DepositFunctionButton")
                    const DepositBalanceTitle = document.querySelector('.DepositBalanceTitle')
                    DepositBalance.innerText = e.balance
                    DepositFunctionButton.addEventListener('click',() =>{
                        DepositBalance.innerText = Number(DepositNewBalance.value) + e.balance
                        e.balance = Number(DepositBalance.innerText)
                        DepositBalanceTitle.innerText = "Yeni balans:"
                        DepositNewBalance.value = ""
                        
                    })
                    const MoneyImg2 = document.querySelector(".MoneyImg")
                        MoneyImg2.addEventListener("click",() =>{
                            arrBox4()
                            DepositFunctionBoxs.innerHTML = ""
                            arrNew2()
                        })
                        
    
                       })
                   
       AtmFunctionBoxsId.addEventListener('click',() =>{
           AtmFunctionBoxs.innerHTML = ""
           AtmMoneyfunctionBoxs.innerHTML = `<img src="./images/exit-svgrepo-com.svg" alt="" class="MoneyImg">
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
                   const MoneyImg = document.querySelector(".MoneyImg")
               
                   
                   
                   MoneyExitButton.addEventListener("click",() =>{
                       let mesaj = e.balance - Number(AtmMoneyBalanceExit.value)
                       
                       if(mesaj >= 0){
                        e.balance = mesaj
                           
                       AtmMoneyBalance.innerText = mesaj
                       
                       AtmMoneyTitle.innerText = "yeni balansin:"
                       AtmMoneyBalanceExit.value = ""
                       }else{
                           return alert("pul yoxdu balansda")
                       }
                       
                       
                       
                   })
                   MoneyImg.addEventListener('click',() =>{
                       arrBox4()
                   
                   
                   
                   
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

