
const menu = document.querySelector("#menu")

const iconMenu = document.querySelector("#icon_menu")

iconMenu.addEventListener("click", function(){
    menu.classList.toggle("activo")
})
   
const shoppingCartShow = document.querySelector(".shoppingCart")   
const iconCerrar = document.querySelector(".icon_cerrar")

iconCerrar.addEventListener("click", function(){
    shoppingCartShow.classList.toggle("show_shopping_cart")
})

const iconCartMostrar = document.querySelector(".icon_cart_mostrar")
iconCartMostrar.addEventListener("click", function(){
    shoppingCartShow.classList.toggle("show_shopping_cart")
})

const products = [
    {
        id:0,
        name: "Aceite Dorado Hidratante Facial",
        info:" Frasco de 100 ml",
        precio:12,
        stock:10,
    },
    {
        id:1,
        name: "Crema Protectora Antiedad",
        info:"Tubo de 40ml",
        precio:8,
        stock:8,
    },
    {
        id:2,
        name: "Crema Hidratante Protectora",
        info:"Tarro 50 ml",
        precio:6,
        stock:5,
    },
    {
        id:3,
        name: "Limpiador Facial Solido suave",
        info:"100 gr",
        precio:7,
        stock:8,
    },
    {
        id:4,
        name: "Mini mascarilla Extra Ligth para Rostro",
        info:"35 ml",
        precio:7,
        stock:12,
    },
    {
        id:5,
        name: "Balsamo botanico Rich Extra Light",
        info:"100 ml",
        precio:3.9,
        stock:10,
    },
    {
        id:6,
        name: "Leche solar en spray FPS 30",
        info:"Frasco spray 150 ml",
        precio:9,
        stock:15,
    },
    {
        id:7,
        name: "Tratamiento Facial Reparador  ",
        info:"Piel Exfoliada",
        precio:24.5,
        stock:6,
    },
    {
        id:8,
        name: "Sérum Fortalecedor Diario Anti-polución",
        info:"Anti-Polución",
        precio:29.4,
        stock:6,
    },
    {
        id:9,
        name: "Gel Fresco Hidratante Anti-fatiga Ojos",
        info:"tubo de 200ml",
        precio:11.9,
        stock:9,
    },
    
    
    
]

const cart = {};
const favoritosLi = document.querySelector(".favoritos_li")
const cartMainBox = document.querySelector(".cart_main_box")



function printFavoritos(){
    let html = "";

    for (let i = 0; i < products.length; i++) {
        html+= `
        <div class="product swiper-slide" id=${products[i].id}>
                        <div class="product_img">
                            <img class="images_product" src="./images/p${i}.webp" alt="productoa">
                        </div>
                        <div class="product_text">
                            <p>${products[i].name}</p>
                            <div class="info">
                                <p class="light">${products[i].info}</p>
                                <p class="precio">${products[i].precio}$us</p>
                                <p class="stock" >${products[i].stock}</p>
                            </div>
                            
                        </div>
                        <button class="añadir_cart">AÑADIR A MI CESTA</button>
                    </div>
        `    
    }
    
    favoritosLi.innerHTML = html;
}
printFavoritos()

favoritosLi.addEventListener('click', function(e){
    
    if(e.target.classList.contains("añadir_cart")){
        const id = parseInt(e.target.parentElement.id);
        
        let currentFavoritos = null;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id===id) {
            currentFavoritos = products[i]
            break;
         }
        }
        if (cart[currentFavoritos.id]) {
            if(cart[id].stock > cart[id].amount){
                cart[id].amount++;
            }else{
                alert("No tenemos disponibilidad")
            }

            
        }else {
            cart[currentFavoritos.id] = currentFavoritos
            cart[currentFavoritos.id].amount = 1
        }
        
        countCart()
        printTotal ()
        printCart()
    }
})

function countCart(){
    const countCart = document.querySelector(".count_cart");
    countCart.textContent = Object.values(cart).length;
}

function printTotal (){
    const arrayCarrito = Object.values(cart)
    console.log(arrayCarrito );
        let suma = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        suma+= (arrayCarrito[i].amount * arrayCarrito[i].precio)
        
    }
    total.textContent = suma;
}

 function printCart(){
    const arrayCart = Object.values(cart)

    let html = "";

    for (let i = 0; i < arrayCart.length; i++) {
    html+= `
        <div class="cart_main" >
            <div class="cart_main_products">
                <div class="cart_main_img">
                    <img src="./Images/p${i}.webp" alt="img_p0">
                </div>
                <div class="cart_main_info">
                    <div class="info_detalle">
                        <p>${arrayCart[i].name}</p>
                        <p>${arrayCart[i].precio}$us</p>
                        <p>${arrayCart[i].stock} unid.</p>
                    </div>
                    <div class="info_btn">
                        <div class="info_btn_box" id="${arrayCart[i].id}">
                            <img class="btn_rest" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAENJREFUSEtjZKAxYKSx+QyjFhAM4dEgGg0igiFAUAGuVPSfoE7sCjDMGzALyPQAprbRjEYwKEeDaDSICIYAQQU0T0UAw9sCGchp4KEAAAAASUVORK5CYII="/>
                            <span class="amount">${arrayCart[i].amount}</span>
                            <img class="btn_add" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcylBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC"/>
                            <img class="btn_del" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJ9JREFUSEvt1csRwjAMRdGTSigB6IQSSAeUQCdQAp0AHZBKYFjwCzFyMgmbREuP5l3p2ZYKA0cxsL4cwBq7RCEl9r+KjAALHIMulzilcuqAa0+WPXX/DuipgZdM6g66WvWlNw7Ao8u6bU3nnSyaAI1P/93vyaIRWNRmAGZ/tAtmbZRxxn1BfURq2K2wxTwTUmGDQy4gUzdOi3ZyrBBk3AB+wyoZJl1mqQAAAABJRU5ErkJggg=="/>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
        
    `;
    
    }
    
    cartMainBox.innerHTML = html;
    
 }
 
 const cartMainBoxBtn = document.querySelector(".cart_main_box")
 cartMainBoxBtn.addEventListener("click", function(e){
    if (e.target.classList.contains("btn_rest")) {
        const id = e.target.parentElement.id
        if(cart[id].amount===1){
            const res = confirm("seguro quieres eliminar este producto")
            if(res){
                delete cart[id]; 
            }
            
        }else{
            cart[id].amount--;
        }
    }
    if (e.target.classList.contains("btn_add")) {
        const id = e.target.parentElement.id
        if(cart[id].stock > cart[id].amount){
            cart[id].amount++;
        }else{
            alert("No tenemos disponibilidad")
        }
                
    }
    if (e.target.classList.contains("btn_del")) {
        const id = e.target.parentElement.id
        delete cart[id];
    }
    countCart()
    printTotal ()
    printCart()
    
 })

 const total = document.querySelector(".total")
 
 

 