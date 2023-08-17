const product = [
    {
    id: 0,
    image: "image/pokemon-conquest.jpg",
    title: "Pokemon Conquest",
    price: 2.50,
    },
    {
        id: 1,
        image: "image/PokemonSage.png",
        title: "Pokemon Sage",
        price: 2.50,
        },
        {
            id: 2,
            image: "image/Uranium_intro.webp",
            title: "Pokemon Unrainium",
            price: 3.00,
            },
            {
                id: 3,
                image: "image/Sonic fan game.jpg",
                title: "Sonic RPG",
                price: 1.00,
                },
                {
                    id: 4,
                    image: "image/Sonic x fan game.jfifSkyArrow.png",
                    title: "Sky Arroy",
                    price: 1.00,
                    },
                    {
                        id: 5,
                        image: "image/Sonic x fan game.jfif",
                        title: "Sonic X final fantasy",
                        price: 2.00,
                        },
                    ]
const categories = [...new set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById("root").innerHTML = categories.map((item)=>
    {
     var {image, title, price} = item;
      return(
        `<div class='box'>
           <div class='img-box'>
            <img class='images' src=${image}></imag>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>` + 
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" +
            `</div>
            </div>`
      )  
    }).join('')
    
    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
