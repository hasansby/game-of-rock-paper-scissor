// let image = document.querySelectorAll('.img-item')
// // image[1].addEventListener('click',()=>{
// //     alert('ok')
// // })

// for(let i = 0;i<=image.length-1;i++){
//     image[i].addEventListener('click',()=>{
//         alert('clicked on'+i+'nth')
//     })
// }

let images = document.querySelectorAll('.img-item')
let cpuImages = document.querySelectorAll('.img-cpu-choose')



for(let i=0;i<=images.length-1 ;i++){
    images[i].addEventListener('click',()=>{
        hiddenSelect(i)
        ranNumber = Math.floor((Math.random()*10)/4)
        cpuImages[ranNumber].classList.remove('hidden')
        gamePlan(i,ranNumber)
    })
}

function hiddenSelect(i){
    for(let j =0;j<=images.length-1  ;j++){
        if(j!==i){
            images[j].classList.add("hidden")
        }
    }
}
document.querySelector("#btn").addEventListener("click",()=>{
    for(let i=0;i<=images.length-1 ;i++){
        images[i].classList.remove("hidden")
        cpuImages[i].classList.add("hidden")
    }
})
document.addEventListener("keydown",()=>{
    alert("please choose a weapon")
})

function gamePlan(user,cpu){
    const userPoint = document.querySelector("#user-point")
    const cpuPoint =  document.querySelector("#cpu-point")
    if(user!==cpu){
        if(user==0){
            if(cpu==1){
                userPoint.textContent = Number(userPoint.textContent) +1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }
        }
        if(user==1){
            if(cpu==0){
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }else{
                userPoint.textContent = Number(userPoint.textContent) +1
            }
        }

        if(user==2){
            if(cpu==0){
                userPoint.textContent = Number(userPoint.textContent) +1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML) +1
            }
        }

    }

}


// let images = document.querySelectorAll(".img-item")
// let cpuImages = document.querySelectorAll(".img-cpu-choose")

// for(let i =0 ;i<=images.length-1;i++){
//         hiddenSelect(i)
//         images[i].addEventListener("click",()=>{
//         let ranNumber = Math.floor((Math.random()*10)/4)
//         cpuImages[ranNumber].classList.remove("hidden") 
//         gamePlan(i,ranNumber)
//     })
// }

// function hiddenSelect(i){
//     for(let j = 0 ; j<=images.length-1 ; j++){
//         if(j!==i){
//             images[j].classList.add("hidden")
//         }
//     }
// }

// document.querySelector("#btn").addEventListener("click",()=>{
//     for(let i=0; i<=images.length-1;i++){
//         images[i].classList.remove("hidden")
//         cpuImages[i].classList.add("hidden")
//     }



// })
    


// function gamePlan(user,cpu){
//     let userpoint = document.querySelector("#user-point")
//     let cpuPoint = document.querySelector("#cpu-point")
//     if(user!==cpu){
//         if(user==0){
//             if(cpu==1){
//                 userpoint.textContent = Number(userpoint.textContent)+1
//             }else{
//                 cpuPoint.textContent = Number(cpuPoint.textContent)+1
//             }
//         }
//         if(user==1){
//             if(cpu==0){
//                 cpuPoint.textContent = Number(cpuPoint.textContent)+1
//             }else{
//                 userpoint.textContent = Number(userpoint.textContent)+1
//             }
//         }
//         if(user==2){
//             if(cpu==0){
//                 userpoint.textContent = Number(userpoint.textContent)+1
//             }else{
//                 cpuPoint.textContent = Number(cpuPoint.textContent)+1
//             }

//         }

//     }
// }