let library=[];
let initialData=[
    {title:"The Divine Comedy"
    ,author:"Dante Alighieri"
    ,isRead:false},

    {title:"Time Machine"
    ,author:"H.G. Wells"
    ,isRead:true
    },

    {title:"Ben Hur"
    ,author:"Lewis Wallace"
    ,isRead:true
    },

    {title:"Adventures of Tom Sawyer"
    ,author:"Mark Twain"
    ,isRead:true
    },

    {title:"Canterbury Tales"
    ,author:"Chaucer"
    ,isRead:false
    }]



let container=document.querySelector(".container");


class Book{
    constructor(title,author,isRead){
        this.title=title;
        this.author=author;
        this.isRead=isRead;
    }
    toggleRead=function(){
        this.isRead=!this.isRead;
    }

}


let removeBook=function(index){
    library.splice(index,1);
    renderLibrary(library);
}

let renderLibrary=function(books){
    container.innerHTML="";
    for(let i in books){
       let bookCard=document.createElement("div");
        bookCard.classList.add("book-card");
        

        let author=document.createElement("p");
        author.classList.add("card-author");
        author.innerText=books[i].author;

        let title=document.createElement("p");
        title.classList.add("card-title");
        title.innerText=books[i].title;

        let removeButton=document.createElement("button");
        removeButton.classList.add("remove-button");
        removeButton.innerText="X"
        removeButton.setAttribute("data-index",i);
        removeButton.addEventListener("click",()=>{
            removeBook(removeButton.dataset.index);
        })

        let toggleRead=document.createElement("button");
        toggleRead.classList.add("toggle-read");
        
        toggleRead.addEventListener("click",()=>{
            books[i].toggleRead()
            renderLibrary(library);


        })
        
        toggleRead.innerText=books[i].isRead?"Mark Unread":"Mark Read";
        bookCard.classList.add(books[i].isRead?"read":"not-read");
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(removeButton); 
        bookCard.appendChild(toggleRead); 
        container.appendChild(bookCard); 
    }
    
}



//initializing data
for (let i in initialData){
    let newbook= new Book(initialData[i].title,initialData[i].author,initialData[i].isRead);
    library.push(newbook);
}
renderLibrary(library)

let addButton=document.querySelector("#add-button");
let authorInput=document.querySelector("#author-input");
let titleInput=document.querySelector("#title-input");
let isReadInput=document.querySelector("#isread-input");


addButton.addEventListener("click",()=>{
    if(titleInput.value && authorInput.value && isReadInput.value){
        let newBook= new Book(titleInput.value,authorInput.value,isReadInput.value==1?true:false);
        library.push(newBook); 
        renderLibrary(library);
    }
   
})



 


