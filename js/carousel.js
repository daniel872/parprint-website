const images=[
    {src:'_path1',
    description:'Pepsi POP Display'},
    {src:'_path2',
    description:'Quaker Oats POP'},
    {src:'_path3',
    description:'Burger King DM'},
    {src:'_path4',
    description:'MedicAlert Foundation Canada'},
    {src:'_path5',
    description:'Pizza Hut Signage'},
    {src:'_path6',
    description:"Topper's Pizza POP"},
    {src:'_path7',
    description:'BK Instore Signage'},
    {src:'_path8',
    description:'BK Outdoor Signage'},
    {src:'_path9',
    description:'HBC POP'},
    {src:'_path10',
    description:'SAKS DM'}
]

const carousell=document.querySelectorAll('.portfolio-carousell')
const carousellArr=(Array.from(carousell))

const btnLeft=document.querySelector('.portfolio-btn-left')
const btnRight=document.querySelector('.portfolio-btn-right')
const container=document.querySelector('.portfolio-carousell')
const descriptionText=document.querySelector('.portfolio_arrow > p');
descriptionText.textContent=images[0].description
container.style.backgroundColor="black";
let state={
    start:0,
    btnLeftpressed:false,
    btnRightpressed:false,
    counter:0
}
//     btnLeft.addEventListener('click', function(){
//         if(state.counter<images.length){
//         let start=(images.length-1) - state.counter
//         state.counter++
//         state.btnLeftpressed=true
//         descriptionText.innerHTML=images[start].description
//         console.log(`start este ${start}
//                         counter este ${state.counter} and ${state.btnLeftpressed}`)

//         return state}
//         else if (counter===images.length){
//             counter=0
//             let start=(images.length-1) - counter
//             counter++
//             descriptionText.innerHTML=images[start].description
//             console.log(`start este ${start}
//                             counter este ${counter}`)
//             return counter
//         }
//     })
    
    


// btnRight.addEventListener('click',function(){
//     if(state.counter===0){
//         start=state.counter
//         state.counter++
//         state.btnRightpressed=true;
//         descriptionText.innerHTML=images[start].description
//         console.log(`start este ${start}
//                         counter este ${state.counter}`)
//         return state.counter}

//         else if(state.counter>0 && state.btnRightpressed ){
//                 state.start++
//                 state.counter++
//                 start=state.start
//                 state.btnRightpressed=true;
//                 state.btnLeftpressed=false
//                 descriptionText.innerHTML=images[start].description
//                 console.log(`start este ${start}
//                                 counter este ${state.counter}`)
                
//                 return state
//         }
//         else if (state.counter>=1 && state.btnLeftpressed){
//             let start=images.length - (state.counter-1)
//             descriptionText.innerHTML=images[start].description
//             state.start=start
//             state.btnLeftpressed=false
//             state.btnRightpressed=true
//             console.log(`start este ${start}
//             counter este ${state.counter} and ${state.btnLeftpressed}`)
//             return state
//         }
        
// })

btnLeft.addEventListener('click', function(){
    if(state.counter>=0 && state.counter<images.length-1 && !state.btnRightpressed){
        state.start=(images.length-1) - state.counter
        descriptionText.textContent=images[state.start].description
        state.counter++
        state.btnLeftpressed=true
        console.log(state)
        return state
    }
    else if(state.counter===images.length-1 && !state.btnRightpressed){
        state.counter=0
        state.start=0
        state.btnLeftpressed=true
        descriptionText.textContent=images[state.start].description
        console.log(state)
        return state
    }
    else if(state.btnRightpressed){
        state.start--
        // state.btnRightpressed=false
        descriptionText.textContent=images[state.start].description
        console.log(state)
    }

    else if(!state.start){
        state.btnRightpressed=false
    }
})

btnRight.addEventListener('click', function(){
   if(state.counter<images.length-1 && state.start<images.length-1) {
    state.counter++
    state.start++
    state.btnRightpressed=true
    state.btnLeftpressed=false
    descriptionText.textContent=images[state.start].description
    console.log(state)
   } 
   else if(state.counter===images.length-1 || state.start===images.length-1){
    state.counter=0
    state.start=0
    state.btnRightpressed=true
    state.btnLeftpressed=false
    descriptionText.textContent=images[state.start].description
    console.log(state)
   }

})

