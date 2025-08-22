const element = document.querySelector('body')
const printTime  =10

const dataArr =[
  [
    { "a": "a" },
    { "b": "b" }
  ],
  [
    { "a": "a" },
    { "b": "b" }
  ],
  [{}]
]

const flatData =  dataArr.flatMap((el)=>el)

flatData.forEach((el)=>{
 const value = Object.values(el)
 console.log(value)   
 const  h2 = document.createElement('h2')
 h2.innerText = value.join("")?value.join(""):"Content not found"
 element.appendChild(h2)
})
