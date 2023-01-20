var Corpo = document.getElementById("corpo");

Corpo.style.overflow = 'hidden';

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
var pagHome8 = document.getElementById("botHome8");
var pagHome9 = document.getElementById("botHome9");
var pagHome10 = document.getElementById("botHome10");

var Tripulacao1 = document.getElementById("tripulacaoParte1");
var Tripulacao2 = document.getElementById("tripulacaoParte2");
var Tripulacao3 = document.getElementById("tripulacaoParte3");
var Tripulacao4 = document.getElementById("tripulacaoParte4");
var pagTripulacao1 = document.getElementById("botTripulacao");
var pagTripulacao2 = document.getElementById("botTripulacao1");
var pagTripulacao3 = document.getElementById("botTripulacao2");
var pagTripulacao4 = document.getElementById("botTripulacao3");
var pagTripulacao5 = document.getElementById("botTripulacao4");
var pagTripulacao6 = document.getElementById("botTripulacao5");
var pagTripulacao7 = document.getElementById("botTripulacao6");

var Destinos = document.getElementById("botDestinos");
var Destinos1 = document.getElementById("botDestinos1");
var Destinos2 = document.getElementById("botDestinos2");
var Destinos3 = document.getElementById("botDestinos3");
var Destinos4 = document.getElementById("botDestinos4");
var Destinos5 = document.getElementById("botDestinos5");
var Destinos6 = document.getElementById("botDestinos6");

var Tecnologia = document.getElementById("botTecnologias");
var Tecnologia1 = document.getElementById("botTecnologias1");
var Tecnologia2 = document.getElementById("botTecnologias2");
var Tecnologia3 = document.getElementById("botTecnologias3");
var Tecnologia4 = document.getElementById("botTecnologias4");
var Tecnologia5 = document.getElementById("botTecnologias5");
var Tecnologia6 = document.getElementById("botTecnologias6");
var Tecnologia7 = document.getElementById("botTecnologias7");

var pagTecnologia = document.getElementById("fundoDoBotaoTecnologia");
var pagTecnologia1 = document.getElementById("fundoDoBotaoTecnologia1");
var pagTecnologia2 = document.getElementById("fundoDoBotaoTecnologia2");

var pagTecnologia3 = document.getElementById("fundoBotoesInativos");
var pagTecnologia4 = document.getElementById("fundoBotoesInativos1");
var pagTecnologia5 = document.getElementById("fundoBotoesInativos2");
var pagTecnologia6 = document.getElementById("fundoBotoesInativos3");
var pagTecnologia7 = document.getElementById("fundoBotoesInativos4");
var pagTecnologia8 = document.getElementById("fundoBotoesInativos5");

var MostrarTecnologia1 = document.getElementById("tecnologiaParte1");
var MostrarTecnologia2 = document.getElementById("tecnologiaParte2");
var MostrarTecnologia3 = document.getElementById("tecnologiaParte3");

var pagEngenheiraInicial = document.getElementById("tripulacaoParte1");
var pagComandante = document.getElementById("tripulacaoParte2");
var pagPiloto = document.getElementById("tripulacaoParte3")
var pagEspecialista = document.getElementById("tripulacaoParte4")

var Engenheira = document.getElementById("engenheira1");
var Engenheira1 = document.getElementById("engenheira2");
var Engenheira2 = document.getElementById("engenheira3");

var Piloto = document.getElementById("piloto");
var Piloto1 = document.getElementById("piloto1");
var Piloto2 = document.getElementById("piloto3");

var Especialista = document.getElementById("especialista");
var Especialista1 = document.getElementById("especialista1");
var Especialista2 = document.getElementById("especialista2");

var Comandante = document.getElementById("comandante");
var Comandante1 = document.getElementById("comandante2");
var Comandante2 = document.getElementById("comandante3");

var fundoBotaoTripulacao = document.getElementById("fundoBotaoTripulacao");

var Lista = document.getElementById("lista");
var Lista1 = document.getElementById("lista1");
var Lista2 = document.getElementById("lista2");
var Lista3 = document.getElementById("lista3");
var Lista4 = document.getElementById("lista4");

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

pagHome4.onclick = function() {
    Home.style.display = 'block';
    Tripulacao1.style.display = 'none';
}

pagHome5.onclick = function() {
    Home.style.display = 'block';
    Tripulacao2.style.display = 'none';
}

pagHome6.onclick = function() {
    Home.style.display = 'block';
    Tripulacao3.style.display = 'none';
}

pagHome7.onclick = function() {
    Home.style.display = 'block';
    Tripulacao4.style.display = 'none';
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

Comandante.onclick = function() {
    pagComandante.style.display = 'block';
    pagEngenheiraInicial.style.display = 'none';
    pagEspecialista.style.display = 'none';
    pagPiloto.style.display = 'none';
}

Comandante1.onclick = function() {
    pagComandante.style.display = 'block';
    pagEngenheiraInicial.style.display = 'none';
    pagEspecialista.style.display = 'none';
    pagPiloto.style.display = 'none';
}

Comandante2.onclick = function() {
    pagComandante.style.display = 'block';
    pagEngenheiraInicial.style.display = 'none';
    pagEspecialista.style.display = 'none';
    pagPiloto.style.display = 'none';
}

Especialista.onclick = function() {
    pagEspecialista.style.display = 'block';
    pagEngenheiraInicial.style.display = 'none';

    Lista1.style.marginRight = '660px';
}

Especialista1.onclick = function() {
    pagEspecialista.style.display = 'block';
    pagComandante.style.display = 'none';

    Lista1.style.marginRight = '660px';
}

Especialista2.onclick = function() {
    pagEspecialista.style.display = 'block';
    pagPiloto.style.display = 'none';

    Lista1.style.marginRight = '660px';
}

Piloto.onclick = function() {
    pagPiloto.style.display = 'block';
    pagEngenheiraInicial.style.display = 'none';

    Lista.style.marginRight = '660px';
}

Piloto1.onclick = function() {
    pagPiloto.style.display = 'block';
    pagComandante.style.display = 'none';

    Lista.style.marginRight = '660px';
}

Piloto2.onclick = function() {
    pagPiloto.style.display = 'block';
    pagEspecialista.style.display = 'none';

    Lista.style.marginRight = '660px';
}

Engenheira.onclick = function() {
    pagEngenheiraInicial.style.display = 'block';
    pagEspecialista.style.display = 'none';
    pagPiloto.style.display = 'none';
    pagComandante.style.display = 'none';
}

Engenheira1.onclick = function() {
    pagEngenheiraInicial.style.display = 'block';
    pagComandante.style.display = 'none';
    pagPiloto.style.display = 'none';
}

Engenheira2.onclick = function() {
    pagEngenheiraInicial.style.display = 'block';
    pagPiloto.style.display = 'none';
}

fundoBotaoTripulacao.onclick = function() {
    pagEngenheiraInicial.style.display = 'block';
    pagComandante.style.display = 'none';
}

Tecnologia.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    marte.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia1.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    lua.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia2.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    europa.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia3.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    titan.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia4.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    Tripulacao1.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia5.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    Tripulacao2.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia6.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    Tripulacao3.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

Tecnologia7.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    Tripulacao4.style.display = 'none';

    Lista2.style.marginRight = '660px';
}

pagTripulacao5.onclick = function() {
    Tripulacao1.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
    MostrarTecnologia2.style.display = 'none';
    MostrarTecnologia3.style.display = 'none';
}

pagTripulacao6.onclick = function() {
    Tripulacao1.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
    MostrarTecnologia2.style.display = 'none';
    MostrarTecnologia3.style.display = 'none';
}

pagTripulacao7.onclick = function() {
    Tripulacao1.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
    MostrarTecnologia2.style.display = 'none';
    MostrarTecnologia3.style.display = 'none';
}

pagTecnologia3.onclick = function() {
    MostrarTecnologia2.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';

    Lista3.style.marginRight = '660px';
}

pagTecnologia4.onclick = function() {
    MostrarTecnologia3.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
}

pagTecnologia5.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    MostrarTecnologia2.style.display = 'none';
}

pagTecnologia6.onclick = function() {
    MostrarTecnologia3.style.display = 'block';
    MostrarTecnologia2.style.display = 'none';
}

pagTecnologia7.onclick = function() {
    MostrarTecnologia1.style.display = 'block';
    MostrarTecnologia3.style.display = 'none';
}

pagTecnologia8.onclick = function() {
    MostrarTecnologia2.style.display = 'block';
    MostrarTecnologia3.style.display = 'none';
}

Destinos4.onclick = function() {
    lua.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
}

Destinos5.onclick = function() {
    lua.style.display = 'block';
    MostrarTecnologia2.style.display = 'none';
}

Destinos6.onclick = function() {
    lua.style.display = 'block';
    MostrarTecnologia3.style.display = 'none';
}

pagHome8.onclick = function() {
    Home.style.display = 'block';
    MostrarTecnologia1.style.display = 'none';
}

pagHome9.onclick = function() {
    Home.style.display = 'block';
    MostrarTecnologia2.style.display = 'none';
}

pagHome10.onclick = function() {
    Home.style.display = 'block';
    MostrarTecnologia3.style.display = 'none';
}