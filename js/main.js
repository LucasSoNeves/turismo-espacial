var botaoExplorar = document.getElementById("explorar");

var marte = document.getElementById("destinosParte1");
var pagMarte = document.getElementById("botMarte");

var lua = document.getElementById("destinosParte2");
var pagLua = document.getElementById("botLua");

var europa = document.getElementById("destinosParte3");
var pagEuropa = document.getElementById("botEuropa");

var titan = document.getElementById("destinosParte4");
var pagTitan = document.getElementById("botTitan");

var Home = document.getElementById("home");
var pagHome = document.getElementById("botHome");

botaoExplorar.onclick = function() {
    marte.style.display = 'block';
    Home.style.display = 'none';
}

pagHome.onclick = function() {
    Home.style.display = 'block';
    marte.style.display = 'none';
}

pagLua.onclick = function() {
    lua.style.display = 'block';
    marte.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagMarte.onclick = function() {
    marte.style.display = 'block';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagEuropa.onclick = function() {
    europa.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    titan.style.display = 'none';
}

pagTitan.onclick = function() {
    titan.style.display = 'block';
    europa.style.display = 'none';
    marte.style.display = 'none';
    lua.style.display = 'none';
}