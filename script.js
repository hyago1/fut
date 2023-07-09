   
let baseOfPlayers;
let playersList;
// variaveis
var passes = 0;
var chutes = 0;
var gols = 0;
var passes2 = 0;
var chutes2 = 0;
var gols2 = 0;
var id
var Vez = 1;
let GER1 = 0;
let GER2 = 0;
var chancesDeChutes1ger = 8;
var chancesDeChutes2ger = 8;

let time1 = []
let time2 = []

let start = false

var listaDeJogadores = document.getElementById("lista")

gerarList()
function gerarList() {

    listaDeJogadores.innerHTML = ""
    fetch('/database.json')
    .then(response => {
     return response.json()  
    }
   ).then((json) =>{
    baseOfPlayers = json
    playersList = baseOfPlayers
    playersList.forEach((element ,index)=> {

    id = index
    var card = `    
    <li  >
    <div class="boxPlayer" id="${index}" onclick="criarTime(${index},1)">
    <div  class="spansOfPlayers" >
    <div>  <span>Nome: </span>
    <span id="namePlayer">${element.name}</span><br>
    <span>Pos: ${element.pos}</span></div></div>
  
    
   <span  id="ger">${element.ger}</span><br>
   </div>
    <div id="btn${index}" class="btn">
    <button id="btnDelete${index}" onclick="esquecer(${index},1)">X</button>
    </div>
    </div>
    </li>`
    

    listaDeJogadores.innerHTML += card
   
});
   })
    

}



function esquecer(id, funcao) {
  var idAux


    if (Vez == 1) {
        for (let i = 0; i <= time1.length; i++) {
if (funcao == 1) {
    if (time1[i].name == baseOfPlayers[id].name) {
        idAux = i
        break
    }     
}
else{
    if (time1[i].name == playersList[id].name) {
        idAux = i
        break
    }
}
         
        }

        time1.splice(idAux , 1)   
        var jogador = document.getElementById(id)
        jogador.style.backgroundColor = '#0a516d'
        var btnDelete = document.getElementById("btnDelete"+id)
        btnDelete.style.display = "none";


    }
    else{
        for (let i = 0; i <= time2.length; i++) {
            if (funcao == 1) {
                if (time2[i].name == baseOfPlayers[id].name) {
                    idAux = i
                    break
                }     
            }
            else{
                if (time2[i].name == playersList[id].name) {
                    idAux = i
                    break
                }
            }
                     
                    }
        time2.splice(idAux , 1)
        var jogador = document.getElementById(id)
        jogador.style.backgroundColor = '#0a516d'
        var btnDelete = document.getElementById("btnDelete"+id)
        btnDelete.style.display = "none";
    
    }
    atualizarListaDeJogadores()


}

function criarTime(id, funcao) {

    console.log("id da funcao criar -- "+id);
    console.log(funcao);
    console.log(playersList[id].name);
    if (!start) {
             if (time1 == false) {
            
          
                changeColorBox('rgb(45, 250, 18)',id)
                if (time1.length < 11) {
                    if (funcao == 1) {
                          time1.push(baseOfPlayers[id])  
                    }else{
                        time1.push(playersList[id])  
                    }
                  
              
        
                atualizarListaDeJogadores()
                             
                }
            
      
        }else {
            if(!auxSearch(id)){
        
                if (Vez == 1) {
                    changeColorBox('rgb(45, 250, 18)',id)
                    if (time1.length < 11) {
                        if (funcao == 1) {
                        time1.push(playersList[id])  
                        }else{
                            time1.push(playersList[id])  
                        }
            
                                 
                    }
                    if (time1.length == 11) {
            
            
                        Vez = 2
            
                    }
                } else {
                    changeColorBox( 'rgb(250, 111, 18)',id)
            
            
                    if (time2.length < 11) {
                        if (funcao == 1) {
                        time2.push(playersList[id])
                        }else{
                            time2.push(playersList[id])  
                        }
            
                    }
                    if (time2.length == 11) {
                        start =  true
                        somarGer()
                    }
                }
                
    atualizarListaDeJogadores()
            }
            else{alert("nao pode")}
        }
    }
    else{
        alert("Impossivel selecionar mais jogadores")
    }

   



   



    console.log(time1);

    console.log(time2);
}

function somarGer() {
    time1.forEach(element => {
        GER1 += element.ger
    });
    time2.forEach(element => {
        GER2 += element.ger
    });
    GER1 / time1.length
    GER2 / time2.length
    console.log(GER1);
    console.log(GER2);
    gerarPassesEChancesDeChutes()
}

function gerarPassesEChancesDeChutes() {

    time1.forEach(element => {
        if (element.ger >= 90 && element.pos == 'A') {
            passes += getRandomInt(15,30)
            chutes += getRandomInt(2,6)
        
            
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'A') {
            passes += getRandomInt(10,25)
            chutes += getRandomInt(1,3)
            chancesDeChutes1ger += 0.5
        } else if (element.ger < 86 && element.pos == 'A') {
            passes += getRandomInt(5,20)
        }


        if (element.ger >= 90 && element.pos == 'M') {
            passes += getRandomInt(20,40)
            chutes += getRandomInt(2,4)
        

        } else if (element.ger < 90 &&element.ger >= 86 &&element.pos == 'M') {
            passes += getRandomInt(15,35)
            chutes += getRandomInt(1,3)
         
        } else if (element.ger < 86 && element.pos == 'M') {
            passes += getRandomInt(8,25)
        }


        if (element.ger >= 90 && element.pos == 'Z') {
            passes += getRandomInt(10,20)
            chutes += getRandomInt(1,2)
        
        
        } else if (element.ger < 90  && element.ger >= 86 && element.pos == 'Z') {
            passes += getRandomInt(5,16)
        
        } else if (element.ger < 86 && element.pos == 'Z') {
            passes += getRandomInt(2,10)
        
           
        }

        if (element.ger >= 90 && element.pos == 'G') {
            passes += getRandomInt(5,15)
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'G') {
            passes += getRandomInt(5,10)
        
        } else if (element.ger < 86 && element.pos == 'G') {
            passes += getRandomInt(5,10)
        
        }
     
    });

    time2.forEach(element => {
        if (element.ger >= 90 && element.pos == 'A') {
            passes2 += getRandomInt(15,30)
            chutes2 += getRandomInt(2,6)
        
            
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'A') {
            passes2 += getRandomInt(10,25)
            chutes2 += getRandomInt(1,3)
        
        } else if (element.ger < 86 && element.pos == 'A') {
            passes2 += getRandomInt(5,20)
        }


        if (element.ger >= 90 && element.pos == 'M') {
            passes2 += getRandomInt(20,40)
            chutes2 += getRandomInt(2,4)
        

        } else if (element.ger < 90 &&element.ger >= 86 &&element.pos == 'M') {
            passes2 += getRandomInt(15,35)
            chutes2 += getRandomInt(1,3)
        
        } else if (element.ger < 86 && element.pos == 'M') {
            passes2 += getRandomInt(8,25)
        }


        if (element.ger >= 90 && element.pos == 'Z') {
            passes2 += getRandomInt(10,20)
            chutes2 += getRandomInt(1,2)
        
        
        } else if (element.ger < 90  && element.ger >= 86 && element.pos == 'Z') {
            passes2 += getRandomInt(5,16)
        
        } else if (element.ger < 86 && element.pos == 'Z') {
            passes += getRandomInt(2,10)
        
           
        }

        if (element.ger >= 90 && element.pos == 'G') {
            passes2 += getRandomInt(5,15)
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'G') {
            passes2 += getRandomInt(5,10)
        
        } else if (element.ger < 86 && element.pos == 'G') {
            passes2 += getRandomInt(5,10)
        
        }
     
    });






    gerarGols(chutes, chutes2)
}



function gerarGols(chutes, chutes2) {




    gols += (chutes * getRandomInt(8,15)) / 100;
    gols2 += (chutes2 * getRandomInt(8,15)) / 100;


    mostrar()

}

function mostrar() {
    var gol = document.getElementById('gols')
    var passe = document.getElementById('passes')
    var chute = document.getElementById('chutes')
    var gol2 = document.getElementById('gols2')
    var passe2 = document.getElementById('passes2')
    var chute2 = document.getElementById('chutes2')

    gol.textContent = Math.round(gols);
    passe.textContent = passes;
    chute.textContent = Math.round(chutes);

    gol2.textContent = Math.round(gols2);
    passe2.textContent = passes2;
    chute2.textContent = Math.round(chutes2);


}

function atualizarListaDeJogadores() {
    var numOfPlayers1 = 1;
    var numOfPlayers2 = 1;
    var listaJ1 = document.getElementById("jogadoresTime1")
    var listaJ2 = document.getElementById("jogadoresTime2")

    
          listaJ1.innerHTML =""
    
      
        listaJ2.innerHTML =""
    var procurar = document.getElementById('procurar')
   
    procurar.value = ""
    

  
          time1.forEach(element => {
    listaJ1.innerHTML +=`<li class="players">${element.name} - <span> ${numOfPlayers1}</span></li>`
    numOfPlayers1++
    
  });
  
    time2.forEach(element => {
    listaJ2.innerHTML +=`<li class="players">${element.name} - <span> ${numOfPlayers2}</span></li>`
    numOfPlayers2++

});
       
listaJ1.lastChild.scrollIntoView();
listaJ2.lastChild.scrollIntoView();


        


}
function changeColorBox(c , id) {
 
    var jogador = document.getElementById(id)
    jogador.style.backgroundColor = c
    var btnDelete = document.getElementById("btnDelete"+id)
    btnDelete.style.display = "block"
  

}

function auxSearch(id) {

var idAux = false



if (Vez == 1) {
        for (let i = 0; i < time1.length; i++) {
        if (time1[i].name == playersList[id].name) {
            idAux = true
            break
        }
        
    }
}else{
    for (let i = 0; i < time2.length; i++) {
        if (time2[i].name == playersList[id].name) {
            idAux = true
            break
        }
        
    }
}

    return idAux
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function procurar(a) {
  
   if (a == "") {
       gerarList();
   }
   else{
           listaDeJogadores.innerHTML = ""
var jogadoresComDaBusca = baseOfPlayers.filter((teste,index)=> teste.name.toLocaleLowerCase().includes(a));
console.log(jogadoresComDaBusca);
playersList = jogadoresComDaBusca

jogadoresComDaBusca.forEach((element ,index) => {


    var card = `    
    <li  >
    <div class="boxPlayer" id="${index}" onclick="criarTime(${index},2)">
    <div  class="spansOfPlayers" >
    <div>  <span>Nome: </span>
    <span id="namePlayer">${element.name}</span><br>
    <span>Pos: ${element.pos}</span></div></div>
  
    
   <span  id="ger">${element.ger}</span><br>
   </div>
    <div id="btn${index}" class="btn">
    <button id="btnDelete${index}" onclick="esquecer(${index},2)">X</button>
    </div>
    </div>
    </li>`
    

    console.log(jogadoresComDaBusca);
    listaDeJogadores.innerHTML += card
  
});
   }


  
  
}




