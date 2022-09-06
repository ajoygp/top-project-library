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

let Book= function(title,author,isRead){
    this.title=title;
    this.author=author;
    this.isRead=isRead;
}

let updateLibrary=function(books){
    container.innerHTML="";
    for(let i in books){
       let bookCard=document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data-index",i);

        let author=document.createElement("p");
        author.classList.add("card-author")
        author.innerText=books[i].author;

        let title=document.createElement("p");
        title.classList.add("card-title")
        title.innerText=books[i].title;

        bookCard.classList.add(books[i].isRead?"read":"not-read");
        

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        container.appendChild(bookCard); 
    }
    
}

//initializing data
for (let i in initialData){
    let newbook= new Book(initialData[i].title,initialData[i].author,initialData[i].isRead);
    library.push(newbook);
}
updateLibrary(library)

let addButton=document.querySelector("#add-button");
let authorInput=document.querySelector("#author-input");
let titleInput=document.querySelector("#title-input");
let isReadInput=document.querySelector("#isread-input");

addButton.addEventListener("click",()=>{
    if(titleInput.value && authorInput.value && isReadInput.value){
        let newBook= new Book(titleInput.value,authorInput.value,isReadInput.value==1?true:false);
        library.push(newBook); 
        updateLibrary(library);
    }
   
})

