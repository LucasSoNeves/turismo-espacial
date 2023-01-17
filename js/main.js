var botaoExplorar = document.getElementById("explorar");

var marte = document.getElementById("destinosParte1");
var pagMarte = document.getElementById("botMarte");

var lua = document.getElementById("destinosParte2");
var pagLua = document.getElementById("botLua");

var Home = document.getElementById("home");

botaoExplorar.onclick = function() {
    marte.style.display = 'block';
    Home.style.display = 'none';
}

pagLua.onclick = function() {
    lua.style.display = 'block';
    marte.style.display = 'none';
}

pagMarte.onclick = function() {
    marte.style.display = 'block';
    lua.style.display = 'none';
}