

const User = {
    "image":"./Imagenes/Perfil.jpg",
    "image2":"./Imagenes/Perfil2.jpg",
    "UserName":"Cheems el programador",
    "Edad":"22 Años",
    "eMail":"lomitodev@hotmail.com",
    "gitLink":"http://github.com/HectorLedezma?tab=repositories",
    "gitName":"DogoService"
};
//import {ProyectData} from "./ProyectData.json"
const Proyectos = {
    "1":{
        "Nombre":"Albión online",
        "DescShort":"Albión online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado",
        "DescLarge":"Albión online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con 5 biomas únicos, todo cuanto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albión , los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases, aventúrate en el mundo abierto frente a los habitantes y las criaturas de Albión , inicia expediciones o adéntrate en mazmorras en las que encontrarás enemigos aún más difíciles, enfréntate a otros jugadores en encuentros en el mundo Abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada, donde podrás construir un hogar cultivar cosechas y criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo, adéntrate ya en el mundo de Albión y escribe tu propia historia.",
        "Imagen":"./Imagenes/Ao.png"
    },
    "2":{
        "Nombre":"DOOM",
        "DescShort":"El juego que corre en cualquie cosa que tenga pantalla.",
        "DescLarge":"En la primera era, en la primera batalla, la primera vez que las sombras se alargaron, solo uno resistió, consumido por el armagedon su alma logro resistir las llamas del infierno quedando demasiado corrupto para la ascensión, escogió la senda del tormento perpetuo, no encontró paz en su voraz odio y con la sangre hirviendo recorrió las llanuras del umbral buscando venganza contra los señores oscuros que tanto daño hicieron, portando la corona de los centinelas de la noche y los demonios que probaron la mordedura de su espada lo llamaron el \"Doom Slayer\"",
        "Imagen":"./Imagenes/T2.jpg"
    },
    "3":{
        "Nombre":"Dudé señor...",
        "DescShort":"Diganos, ¿por que penso que la pequeña Tiffany debia morir?...",
        "DescLarge":"Si, pero Luego ví a la pequeña Tiffany y pensé: Niña blanca de 8 años, en un barrio negro, entre un montón de monstruos, a esta hora de la noche y con libros de física cuántica. Está a punto de hacer algo, hermano, tiene como 8 años, ésos libros son muy avanzados para ella, si me preguntaran yo diría que algo se trae entre manos",
        "Imagen":"./Imagenes/T3.jpg"
    }
}


var ProyectNumber = 0;

function IndexData(){
    let cabeza = document.getElementsByTagName("head")[0].className;
    //console.log(document.getElementsByTagName("html")[0])
    
    if(cabeza === "IndexPage"){
        document.getElementsByName("fotoperfil")[0].src = User.image2;
        document.getElementsByName("fotoperfil")[0].onmouseover = (ev) => {
            ev.preventDefault();
            document.getElementsByName("fotoperfil")[0].src = User.image;  
        }
        document.getElementsByName("fotoperfil")[0].onmouseleave = (ev) => {
            ev.preventDefault();
            document.getElementsByName("fotoperfil")[0].src = User.image2;  
        }

        let botones = document.getElementsByClassName("gitLink");
        for(let i = 0;i< botones.length;i++){
            let clases = botones[i].classList;
            botones[i].onmouseover = (ev) =>{
                clases.replace("btn-colorT","btn-color");
            }
            botones[i].onmouseleave = (ev) =>{
                clases.replace("btn-color","btn-colorT");
            }
        }

        //document.getElementsByName("fotoperfil")[0].src = User.image2;
        document.getElementsByName("Nombre")[0].textContent = User.UserName;
        document.getElementsByName("Age")[0].textContent = User.Edad;
        document.getElementsByName("Mail")[0].textContent = User.eMail;
        document.getElementsByName("github")[0].textContent = User.gitName;
        document.getElementsByName("gitLink")[0].onclick = (ev) => {
            ev.preventDefault();
            window.open(User.gitLink)
        };
        //////////////////////////////////////////////////////////
        
        let box = document.getElementsByName("PBox");
        for(let i = 0;i<box.length;i++){
            let clase = box[i].classList;
            box[i].onmouseover = (ev) => {
                ev.preventDefault();
                clase.add("marcado")
            }
            box[i].onmouseleave = (ev) => {
                ev.preventDefault();
                clase.remove("marcado")
            }
            //console.log(clase);
        }

        document.getElementsByName("P1Name")[0].textContent = Proyectos[1].Nombre;
        document.getElementsByName("P1Resumen")[0].textContent = Proyectos[1].DescShort;
        document.getElementsByName("P1img")[0].src = Proyectos[1]["Imagen"];

        document.getElementsByName("P2Name")[0].textContent = Proyectos[2].Nombre;
        document.getElementsByName("P2Resumen")[0].textContent = Proyectos[2].DescShort;
        document.getElementsByName("P2img")[0].src = Proyectos[2]["Imagen"];

        document.getElementsByName("P3Name")[0].textContent = Proyectos[3].Nombre;
        document.getElementsByName("P3Resumen")[0].textContent = Proyectos[3].DescShort;
        document.getElementsByName("P3img")[0].src = Proyectos[3]["Imagen"];

        document.getElementsByName("PrLink1")[0].onclick = (ev) => {
            ev.preventDefault();
            localStorage.setItem("proyecto",JSON.stringify(Proyectos[1]));
            //open("proyecto.html");
        };
        document.getElementsByName("PrLink2")[0].onclick = (ev) => {
            ev.preventDefault();
            localStorage.setItem("proyecto",JSON.stringify(Proyectos[2]));
            //open("proyecto.html");
        };
        document.getElementsByName("PrLink3")[0].onclick = (ev) => {
            ev.preventDefault();
            localStorage.setItem("proyecto",JSON.stringify(Proyectos[3]));
            //open("proyecto.html");
        };
    }else{
        console.log(localStorage.getItem("proyecto"));
        document.getElementsByName("tituloTexto")[0].textContent = JSON.parse(localStorage.getItem("proyecto")).Nombre;
    }
}


window.onload = IndexData;
