
let ctx = document.getElementById('myChart').getContext('2d')
let myChart = new Chart(ctx, {
    type:'pie',
    data:{
        labels:[],
        datasets:[{
            label:'my first chart',
            data: [],
            backgroundColor: [
               '#D4E09B',
               '#F4442E',
               '#9D8DF1',
               '#95F2D9',
               '#bd4089',
               '#E28413',
               '#000022',
               '#E9AFA3',
               '#36A2EB',
               '#82FF9E'

            ],
            borderWidth: 0
        }]
    },
    options:{
        hover:{
            mode:'null'
        },
        tooltips:{
            enabled:false
        },
        legend:{
            display:false
        },
        plugins:{
            labels:{
                render:'label',
                fontColor: '#fff'
            }
        }
        

    

        

    }
})

//spin
let randomNumber = Math.floor(Math.random()*1)+1000
let spinBtn = document.querySelector('.spin')
let circle = document.querySelector('.circle')

spinBtn.addEventListener('click', function(){
    spin()
})

function spin(){
    randomNumber += Math.floor(Math.random()*1)+13000
    circle.style.transform='rotate('+randomNumber+'deg)'
    console.log(randomNumber)
}

//List누르면 모달창 뜨고 Close누르면 모달창 사라짐 
let listAdd = document.querySelector('.list-add')
let close = document.querySelector('.close')
let modal = document.querySelector('.modal')

listAdd.addEventListener('click', function(){
    modal.style.display='block'
})
close.addEventListener('click', function(){
    modal.style.display='none'
})

//지우기 버튼
let insertBtn = document.querySelector('.insert')
let enterText = document.querySelector('.enter-text')
let trash = document.querySelector('.trash')
let list = document.querySelector('.list')
let listArr = []

insertBtn.addEventListener('click', function(){
    list.innerHTML+='<li>'+enterText.value+'<span></span></li>'
    for(i=0; i<document.querySelectorAll('.list li span').length; i++){
        document.querySelectorAll('.list li span')[i].addEventListener('click', function(event){
            event.target.parentNode.style.display='none'
        })
    }
})
trash.addEventListener('click', function(){
    for(i=0; i<document.querySelectorAll('.list li span').length; i++){
        document.querySelectorAll('.list li')[i].style.display='none'
    }
})

//사용자 값 받아서 스핀에 표시



insertBtn.addEventListener('click', function(){
    myChart.data.labels.push(enterText.value)
    myChart.data.datasets[0].data.push(1)
    console.log(myChart.data.labels)
    console.log(myChart.data.datasets[0].data)
    myChart.update()
})







