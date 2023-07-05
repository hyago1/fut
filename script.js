let baseOfPlayers =
    [
        {
            name: "messi",
            ger: 91,
            pos: 'M'
        },
        {
            name: "salah",
            ger: 89,
            pos: 'A'
        },
        {
            name: "neymar",
            ger: 90,
            pos: 'M'
        },
        {
            name: "van dijk",
            ger: 89,
            pos: 'Z'
        },
        {
            name: "foden",
            ger: 88,
            pos: 'M'
        },
        {
            name: "pedri",
            ger: 87,
            pos: 'M'
        },
        {
            name: "martinez",
            ger: 90,
            pos: 'G'
        },
        {
            name: "lukaku",
            ger: 88,
            pos: 'A'
        },
        {
            name: "rudger",
            ger: 89,
            pos: 'Z'
        },

        {
            name: "cr7",
            ger: 89,
            pos: 'A'
        },
        {
            name: "vini junior",
            ger: 92,
            pos: 'A'
        },
        {
            name: "mbappe",
            ger: 92,
            pos: 'A'
        },
        {
            name: "benzemar",
            ger: 91,
            pos: 'A'
        },
        {
            name: "halland",
            ger: 92,
            pos: 'A'
        },
        {
            name: "Grealish",
            ger: 89,
            pos: 'M'
        },
        {
            name: "rodrygo",
            ger: 89,
            pos: 'A'
        },
        {
            name: "rashford",
            ger: 86,
            pos: 'A'
        },
        {
            name: "bruno fernandes",
            ger: 85,
            pos: 'M'
        },
        {
            name: "modric",
            ger: 89,
            pos: 'M'
        },
        {
            name: "kross",
            ger: 88,
            pos: 'M'
        },
        {
            name: "de bruyne",
            ger: 90,
            pos: 'M'
        },
        
        {
            name: "kanté",
            ger: 90,
            pos: 'M'
        },
        {
            name: "di maria",
            ger: 88,
            pos: 'A'
        },
        {
            name: "mané",
            ger: 90,
            pos: 'A'
        },    
        {
            name: "sergio ramos",
            ger: 88,
            pos: 'Z'
        },
        {
            name: "koulibali",
            ger: 89,
            pos: 'Z'
        },
        
        {
            name: "casemiro",
            ger: 89,
            pos: 'Z'
        },
        
        {
            name: "marquinhos",
            ger: 90,
            pos: 'Z'
        },
        
        {
            name: "davies",
            ger: 88,
            pos: 'Z'
        },
        {
            name: "neuer",
            ger: 88,
            pos: 'G'
        },
        {
            name: "courtois",
            ger: 90,
            pos: 'G'
        },
        {
            name: "picford",
            ger: 88,
            pos: 'G'
        },
        {
            name: "navas",
            ger: 88,
            pos: 'G'
        },
        {
            name: "donaruma",
            ger: 89,
            pos: 'G'
        },

    ]
    let playersList = baseOfPlayers
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
     playersList = baseOfPlayers
    listaDeJogadores.innerHTML = ""
     playersList.forEach((element ,index)=> {

    id = index
    var card = `    
    <li  >
    <div class="boxPlayer" id="${index}" onclick="criarTime(${index},1)">
    <div >
    <span>Nome: </span>
    <span id="namePlayer">${element.name}</span><br>
    <span>Força: ${element.ger}</span><br>
    <span>Pos: ${element.pos}</span></div>
    </div>
    <div id="btn${index}" class="btn">
    <button id="btnDelete${index}" onclick="esquecer(${index},1)">X</button>
    </div>
  
    </li>`
    

    listaDeJogadores.innerHTML += card
   
});

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
            chancesDeChutes1ger += 0.7
            
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
            chancesDeChutes1ger += 0.3

        } else if (element.ger < 90 &&element.ger >= 86 &&element.pos == 'M') {
            passes += getRandomInt(15,35)
            chutes += getRandomInt(1,3)
            chancesDeChutes1ger += 0.2
        } else if (element.ger < 86 && element.pos == 'M') {
            passes += getRandomInt(8,25)
        }


        if (element.ger >= 90 && element.pos == 'Z') {
            passes += getRandomInt(10,20)
            chutes += getRandomInt(1,2)
            chancesDeChutes1ger += 0.2
            chancesDeChutes2ger -= 0.8
        } else if (element.ger < 90  && element.ger >= 86 && element.pos == 'Z') {
            passes += getRandomInt(5,16)
            chancesDeChutes2ger += 0.3
        } else if (element.ger < 86 && element.pos == 'Z') {
            passes += getRandomInt(2,10)
            chancesDeChutes2ger -= 0.4
           
        }

        if (element.ger >= 90 && element.pos == 'G') {
            passes += getRandomInt(5,15)
            chancesDeChutes2ger -= 2
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'G') {
            passes += getRandomInt(5,10)
           chancesDeChutes2ger -= 1.5
        } else if (element.ger < 86 && element.pos == 'G') {
            passes += getRandomInt(5,10)
            chancesDeChutes2ger -= 0.6
        }
     
    });

    time2.forEach(element => {
        if (element.ger >= 90 && element.pos == 'A') {
            passes2 += getRandomInt(15,30)
            chutes2 += getRandomInt(2,6)
            chancesDeChutes1ger += 0.7
            
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'A') {
            passes2 += getRandomInt(10,25)
            chutes2 += getRandomInt(1,3)
            chancesDeChutes2ger += 0.5
        } else if (element.ger < 86 && element.pos == 'A') {
            passes2 += getRandomInt(5,20)
        }


        if (element.ger >= 90 && element.pos == 'M') {
            passes2 += getRandomInt(20,40)
            chutes2 += getRandomInt(2,4)
            chancesDeChutes2ger += 0.3

        } else if (element.ger < 90 &&element.ger >= 86 &&element.pos == 'M') {
            passes2 += getRandomInt(15,35)
            chutes2 += getRandomInt(1,3)
            chancesDeChutes2ger += 0.2
        } else if (element.ger < 86 && element.pos == 'M') {
            passes2 += getRandomInt(8,25)
        }


        if (element.ger >= 90 && element.pos == 'Z') {
            passes2 += getRandomInt(10,20)
            chutes2 += getRandomInt(1,2)
            chancesDeChutes2ger += 0.2
            chancesDeChutes1ger -= 0.8
        } else if (element.ger < 90  && element.ger >= 86 && element.pos == 'Z') {
            passes2 += getRandomInt(5,16)
            chancesDeChutes1ger -= 0.3
        } else if (element.ger < 86 && element.pos == 'Z') {
            passes += getRandomInt(2,10)
            chancesDeChutes1ger -= 0.4
           
        }

        if (element.ger >= 90 && element.pos == 'G') {
            passes2 += getRandomInt(5,15)
            chancesDeChutes1ger -= 2
        } else if (element.ger < 90 && element.ger >= 86 && element.pos == 'G') {
            passes2 += getRandomInt(5,10)
           chancesDeChutes1ger -= 1.5
        } else if (element.ger < 86 && element.pos == 'G') {
            passes2 += getRandomInt(5,10)
            chancesDeChutes1ger -= 0.6
        }
     
    });





    gerarChutes(passes, passes2)

}

function gerarChutes(passes, passes2) {



        chutes2 += (passes2 * chancesDeChutes2ger) / 100;

    

        chutes += (passes * chancesDeChutes1ger) / 100;


    gerarGols(chutes, chutes2)

}

function gerarGols(chutes, chutes2) {




    gols += (chutes * 5.7) / 100;
    gols2 += (chutes2 * 5.7) / 100;


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
    

       if (Vez == 1) {
          time1.forEach(element => {
    listaJ1.innerHTML +=`<li class="players">${element.name} - <span> ${numOfPlayers1}</span></li>`
    numOfPlayers1++
    
  });
       }else{
               
    time2.forEach(element => {
    listaJ2.innerHTML +=`<li class="players">${element.name} - <span> ${numOfPlayers2}</span></li>`
    numOfPlayers2++

});
       }
  


        


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
var jogadoresComDaBusca = baseOfPlayers.filter((teste,index)=> teste.name.includes(a));
console.log(jogadoresComDaBusca);
playersList = jogadoresComDaBusca

jogadoresComDaBusca.forEach((element ,index) => {


    var card = `    
    <li  >
    <div class="boxPlayer" id="${index}" onclick="criarTime(${index},2)">
    <div >
    <span>Nome: </span>
    <span id="namePlayer">${element.name}</span><br>
    <span>Força: ${element.ger}</span><br>
    <span>Pos: ${element.pos}</span></div>
    </div>
    <div id="btn${index}" class="btn">
    <button id="btnDelete${index}" onclick="esquecer(${index}, 2)">X</button>
    </div>
  
    </li>`
    

    console.log(jogadoresComDaBusca);
    listaDeJogadores.innerHTML += card
  
});
   }


  
  
}




