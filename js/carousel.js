const images=[
    {src:'./Images/Portfolio/lays_Weekender_Header.png',
    company:"Frito Lays",
    product:"Indoor Signage"},

    {src:'./Images/Portfolio/lays_Shelf_Hanger.png',
    company:"Frito Lays",
    product:"Shelf Hanger"},

    {src:'./Images/Portfolio/56144_TostitosWobbler_EN.png',
    company:'Tostitos',
    product:" Wobbler"},

    {src:'./Images/Portfolio/DoritosShlfHang.png',
    company:'Doritos',
    product:"Shelf Hanger"},

    {src:'./Images/Portfolio/medicalAlert_01.png',
    company:'MedicAlert Foundation Canada',
    product:"Brochure"},

    {src:'./Images/Portfolio/56103_BoxTopper-399-1.png',
    company:'PizzaHut',
    product:"Boxtopper"},

    {src:'./Images/Portfolio/56103_BoxTopper-399-2.png',
    company:'PizzaHut',
    product:"Boxtopper"},

    {src:'./Images/Portfolio/HBC_HolidayCharityGala_CounterSign_final.png',
    company:"Hudson's Bay Company",
    product:"Instore POP"},

    {src:'./Images/Portfolio/HBC_HolidayCharityGala_Foamcore_final.png',
    company:"Hudson's Bay Company",
    product:"Instore POP"},

     {src:'./Images/Portfolio/Saks.png',
    company:'SAKS Fifth Avenue',
    product:"Postcard Personalized Mailer"},

    {src:'./Images/Portfolio/56337_HBC_SAKS-1.png',
    company:"Hudson's Bay Company",
    product:"Gift Card"},

    {src:'./Images/Portfolio/BK_EN_Coupon-1.png',
    company:'Burger King',
    product:"Neighbourhood Coupons Mailer"},

    {src:'./Images/Portfolio/FrenchCoupon_CR-HR-1.png',
    company:'Burger King',
    product:"Neighbourhood Coupons Mailer"},

    {src:'./Images/Portfolio/56103_BoxTopper-399-1.png',
    company:"Topper's Pizza",
    product:"Neighbourhood Flyer Mailer"},

    {src:'./Images/Portfolio/Toppers_CeilingDangler7.png',
    company:"Topper's Pizza",
    product:"POP Dangler"}


]



const carousell=document.querySelectorAll('.portfolio-carousell')
const carousellArr=(Array.from(carousell))

const btnLeft=document.querySelector('.portfolio-btn-left')
const btnRight=document.querySelector('.portfolio-btn-right')
const container=document.querySelector('.portfolio-carousell-img')
const company=document.querySelector('.portfolio_company');
const product=document.querySelector('.portfolio_product')
company.textContent=images[0].company
product.textContent=images[0].product
container.style.backgroundImage=`url(${images[0].src})`

let state={
    start:0,
    btnLeftpressed:false,
    btnRightpressed:false,
    counter:0
}


btnLeft.addEventListener('click', function(){
    if(state.counter>0 && state.counter<images.length-1 && !state.btnRightpressed){
        state.start=(images.length-1) - state.counter
        company.textContent=images[state.start].company
        product.textContent=images[state.start].product
        container.style.backgroundImage=`url(${images[state.start].src})`
        state.counter++
        state.btnLeftpressed=true
        console.log(state)
        return state
    }
    else if(state.counter===images.length-1 && !state.btnRightpressed){
        state.counter=0
        state.start=0
        state.btnLeftpressed=true
        company.textContent=images[state.start].company
        product.textContent=images[state.start].product
        container.style.backgroundImage=`url(${images[state.start].src})`
        console.log(state)
        return state
    }
    else if(state.btnRightpressed &&state.start!==0){
        state.start--
        // state.btnRightpressed=false
        company.textContent=images[state.start].company
        product.textContent=images[state.start].product
        container.style.backgroundImage=`url(${images[state.start].src})`
        console.log(state)
    }

    else if(!state.start){
        state.btnRightpressed=false
        state.btnLeftpressed=true
        state.start=(images.length-1) - state.counter
        company.textContent=images[state.start].company
        product.textContent=images[state.start].product
        container.style.backgroundImage=`url(${images[state.start].src})`
        state.counter++
        state.btnLeftpressed=true
        console.log(state)
        return state
    }
})

btnRight.addEventListener('click', function(){
   if(state.counter<images.length-1 && state.start<images.length-1) {
    state.counter++
    state.start++
    state.btnRightpressed=true
    state.btnLeftpressed=false
    company.textContent=images[state.start].company
    product.textContent=images[state.start].product
    container.style.backgroundImage=`url(${images[state.start].src})`
    console.log(state)
   } 
   else if(state.counter===images.length-1 && state.start===images.length-1){
    state.counter=0
    state.start=0
    state.btnRightpressed=true
    state.btnLeftpressed=false
    company.textContent=images[state.start].company
    product.textContent=images[state.start].product
    container.style.backgroundImage=`url(${images[state.start].src})`
    console.log(state)
   }

   else if(state.counter===images.length-1 && state.start!==images.length-1){
    state.counter=state.start
    state.counter++
    state.start++
    company.textContent=images[state.start].company
    product.textContent=images[state.start].product
    container.style.backgroundImage=`url(${images[state.start].src})`
    console.log(state)
   }

//    else if(state.start===images.length && state.counter<images.length){
//     state.counter=0
//     state.start=0
//     company.textContent=images[state.start].company
//     product.textContent=images[state.start].product
//     container.style.backgroundImage=`url(${images[state.start].src})`
//    }

   

})

