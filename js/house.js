/*start slider */
let images=["./images/slide1.jpg","./images/slide2.jpg","./images/slide3.jpg"];
let index=0;
let image = document.getElementById("slider-image");

image.setAttribute("src", images[index]);

function funBefore (){
    image.setAttribute("src", images[index]);
    console.log("click")
    if(index==0){
        index=3;
    }
    index--;
}
function funAfter (){
    image.setAttribute("src", images[index]);
    index++;
    if(index==3){
        index=0;
    }
}

(function play(){
     setInterval(function(){
        funAfter ();
     },3000)
}());

/*end slider */

/*start menu filtering*/
let items = [
    {name:"paté",
    category:"BreakFast",
    image:"images/break1.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"cheese sandwich",
    category:"BreakFast",
    image:"images/break2.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Seafood",
    category:"Lunch",
    image:"images/lunch1.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Spicy Beef",
    category:"Lunch",
    image:"images/lunch2.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Dinner",
    category:"Dinner",
    image:"images/dinner1.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Mushroom",
    category:"Dinner",
    image:"images/dinner2.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Hot Chocolate",
    category:"Drinks",
    image:"images/drink1.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Iced Cappuccino",
    category:"Drinks",
    image:"images/drink2.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
    {name:"Iced Milky Latte",
    category:"Drinks",
    image:"images/drink3.jpg",
    description:"Some quick example text to build on the card title and make up the bulk"
    },
];

items.forEach((i)=> {
     let card= document.createElement("div");

     card.classList.add("card", i.category , "hide");
     
     let imgcontainer= document.createElement("div");
     imgcontainer.classList.add("imgcontainer");
     let image = document.createElement("img");
     image.setAttribute("src", i.image);
     image.classList.add("imgclass")
     imgcontainer.appendChild(image);
     card.appendChild(imgcontainer);
     

     let container =document.createElement("div");
     container.classList.add("desccontainer");

     let name = document.createElement("h5");
     name.classList.add("item-name");
     name.innerText= i.name;
     container.appendChild(name);

     let description = document.createElement("p");
     description.classList.add("item-desc");
     description.innerText= i.description;
     container.appendChild(description);

     let addcart = document.createElement("button");
     addcart.classList.add("item-add");
     addcart.innerText="add to cart";     
     container.appendChild(addcart);

     card.appendChild(container);

     document.getElementById("items").appendChild(card);
})

var counter = 0;
let count= document.getElementById("count");
let elemetscart= document.querySelectorAll(".item-add");
var toastLiveExample = document.getElementById('liveToast');

elemetscart.forEach((ele)=>{
    ele.addEventListener("click", function(){
         counter= counter+1;
         localStorage.setItem("productscount" , JSON.stringify(counter));
         count.innerText = Number(JSON.parse(localStorage.getItem("productscount")));
         ele.addEventListener('click', (function () {
            var toast = new bootstrap.Toast(toastLiveExample)
            toast.show()
            
        }()))  
        
    })  
      
})


window.onload = () =>{
    filteritems('All');
} 

function filteritems(value) {
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
        if (value == button.innerText){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        }
    })

    let elements = document.querySelectorAll(".card");


elements.forEach((element) => {
    if (value == 'All'){
        element.classList.remove("hide");
    }
    else {
        if (element.classList.contains(value)) {

            element.classList.remove("hide");
        }
        else {
            element.classList.add("hide");
        }
    }
})
}

/*end menu filtering*/
