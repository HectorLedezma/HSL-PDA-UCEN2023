const User = {
    "image":"./Perfil.jpg",
    "UserName":"Cheems el programador",
    "Edad":"22 Años",
    "eMail":"lomitodev@hotmail.com",
    "gitLink":"http://github.com/HectorLedezma?tab=repositories",
    "gitName":"ChemmSoft"
};

const Proyectos = {
    "1":{
        "Nombre":"Albión online",
        "DescShort":"Albión online es un mmorpg no lineal",
        "DescLarge":"Albión online es un mmorpg no lineal, en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con 5 biomas únicos, todo cuanto hagas tendrá su repercusión en el mundo, con la economía orientada al jugador de Albión , los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de caballero a mago, o juega como una mezcla de ambas clases, aventúrate en el mundo abierto frente a los habitantes y las criaturas de Albión , inicia expediciones o adéntrate en mazmorras en las que encontrarás enemigos aún más difíciles, enfréntate a otros jugadores en encuentros en el mundo Abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada, donde podrás construir un hogar cultivar cosechas y criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo, adéntrate ya en el mundo de Albión y escribe tu propia historia.",
        "Imagen:":""
    },
    "2":{
        "Nombre":"",
        "DescShort":"",
        "DescLarge":"",
        "Imagen:":""
    },
    "3":{
        "Nombre":"",
        "DescShort":"",
        "DescLarge":"",
        "Imagen:":""
    }
}

function UserData(){
    document.getElementsByName("fotoperfil")[0].src = User.image;
    document.getElementsByName("Nombre")[0].textContent = User.UserName;
    document.getElementsByName("Age")[0].textContent = User.Edad;
    document.getElementsByName("Mail")[0].textContent = User.eMail;
    document.getElementsByName("github")[0].childNodes[1].href = User.gitLink;
    document.getElementsByName("gitLink")[0].textContent = User.gitName;
}
window.onload = UserData;
