let book=[]
const saveEl=document.getElementById("save-el")
const ulEl=document.getElementById("ul-el")
const inputEl=document.getElementById("input-el")
const delEl=document.getElementById("delete-el")
const saveall=document.getElementById("tab-el")

const local=JSON.parse(localStorage.getItem("book"))


if(local){
   book=local
    render(book)
}


saveall.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
        book.push(tabs[0].url)
        localStorage.setItem("book",JSON.stringify(book))
        render(book)
    })
   
})

saveEl.addEventListener("click", function(){

    book.push(inputEl.value)
    inputEl.value=" "
    localStorage.setItem("book",JSON.stringify(book))
    render(book)
    
})
function render(book){
let items=""
for(let i=0;i<book.length;i++){
    items+=
    `<li>
    <a target='_blank' href='${book[i]}'>
    ${book[i]}
    </a>
    </li>`
}
ulEl.innerHTML=items
} 

delEl.addEventListener("click",function(){
    localStorage.clear()
    book=[]
    ulEl.innerHTML=""
})