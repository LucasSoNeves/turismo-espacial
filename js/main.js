var botaoExplorar = document.getElementById("explorar");

var marte = document.getElementById("destinosParte1");
var pagMarte1 = document.getElementById("botMarte1");
var pagMarte2= document.getElementById("botMarte2");
var pagMarte3 = document.getElementById("botMarte3");

var lua = document.getElementById("destinosParte2");
var pagLua = document.getElementById("botLua");
var pagLua2 = document.getElementById("botLua2");
var pagLua3 = document.getElementById("botLua3");

var europa = document.getElementById("destinosParte3");
var pagEuropa = document.getElementById("botEuropa");
var pagEuropa1 = document.getElementById("botEuropa1");
var pagEuropa3 = document.getElementById("botEuropa3");

var titan = document.getElementById("destinosParte4");
var pagTitan = document.getElementById("botTitan");
var pagTitan1 = document.getElementById("botTitan1");
var pagTitan2 = document.getElementById("botTitan2");

var Home = document.getElementById("home");
var pagHome = document.getElementById("botHome");
var pagHome1 = document.getElementById("botHome1");
var pagHome2 = document.getElementById("botHome2");
var pagHome3 = document.getElementById("botHome3");
var pagHome4 = document.getElementById("botHome4");
var pagHome5 = document.getElementById("botHome5");
var pagHome6 = document.getElementById("botHome6");
var pagHome7 = document.getElementById("botHome7");

var Tripulacao1 = document.getElementById("tripulacaoParte1");
var Tripulacao2 = document.getElementById("tripulacaoParte2");
var Tripulacao3 = document.getElementById("tripulacaoParte3");
var Tripulacao4 = document.getElementById("tripulacaoParte4");
var pagTripulacao1 = document.getElementById("botTripulacao");
var pagTripulacao2 = document.getElementById("botTripulacao1");
var pagTripulacao3 = document.getElementById("botTripulacao2");
var pagTripulacao4 = document.getElementById("botTripulacao3");

var Destinos = document.getElementById("botDestinos");
var Destinos1 = document.getElementById("botDestinos1");
var Destinos2 = document.getElementById("botDestinos2");
var Destinos3 = document.getElementById("botDestinos3");

botaoExplorar.onclick = function() {
    marte.style.display = 'block';
    Home.style.display = 'none';
}

pagHome.onclick = function() {
    Home.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagHome1.onclick = function() {
    Home.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagHome2.onclick = function() {
    Home.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagHome3.onclick = function() {
    Home.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagLua.onclick = function() {
    lua.style.display = 'block';
    marte.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagLua2.onclick = function() {
    lua.style.display = 'block';
    marte.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagLua3.onclick = function() {
    lua.style.display = 'block';
    marte.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagMarte1.onclick = function() {
    marte.style.display = 'block';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagMarte2.onclick = function() {
    marte.style.display = 'block';
    lua.style.display = 'none';
    europa.style.display = 'none';
    titan.style.display =' none';
}

pagMarte3.onclick = function() {
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

pagEuropa1.onclick = function() {
    europa.style.display = 'block';
    marte.style.display = 'none';
    lua.style.display = 'none';
    titan.style.display = 'none';
}

pagEuropa3.onclick = function() {
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

pagTitan1.onclick = function() {
    titan.style.display = 'block';
    europa.style.display = 'none';
    marte.style.display = 'none';
    lua.style.display = 'none';
}

pagTitan2.onclick = function() {
    titan.style.display = 'block';
    europa.style.display = 'none';
    marte.style.display = 'none';
    lua.style.display = 'none';
}

pagTripulacao1.onclick = function() {
    Tripulacao1.style.display = 'block';
    marte.style.display = 'none';
}

pagTripulacao2.onclick = function() {
    Tripulacao1.style.display = 'block';
    lua.style.display = 'none';
}

pagTripulacao3.onclick = function() {
    Tripulacao1.style.display = 'block';
    europa.style.display = 'none';
}

pagTripulacao4.onclick = function() {
    Tripulacao1.style.display = 'block';
    titan.style.display = 'none';
}

Destinos.onclick = function() {
    lua.style.display = 'block';
    Tripulacao1.style.display = 'none';
}