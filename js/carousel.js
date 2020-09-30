const images=[
    {src:'_path1',
    description:'text1'},
    {src:'_path2',
    description:'text2'},
    {src:'_path3',
    description:'text3'}
]

const carousell=document.querySelectorAll('.portfolio-carousell')
const carousellArr=(Array.from(carousell))

const btnLeft=document.querySelector('.portfolio-btn-left')
const btnRight=document.querySelector('.portfolio-btn-right')
const container=document.querySelector('.portfolio-carousell')
const descriptionText=document.querySelector('.portfolio_arrow > p');
    container.style.backgroundColor="black";
    let start=3
    btnLeft.addEventListener('click', function(){

        descriptionText.innerHTML=images[start].description
        
        return start++
    })
    
    


btnRight.addEventListener('click',function(){
    descriptionText.innerHTML=images[start-1].description
        start=start-1
        return start
})

