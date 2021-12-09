
var div = 1;
var checkbox = 1;
var tarefa = 1;

function Riscar(id) {

    var alvo = document.getElementById(id)
    var novotexto = '<s>' + alvo.innerHTML + '</s>'


    document.getElementById(id).innerHTML = novotexto

}

function criarTarefa() {

    div++
    checkbox++
    tarefa++

    var nomeTarefa = document.getElementById("inserir-tarefa").value

    var novaDiv = document.createElement("div")
    novaDiv.setAttribute('id', div)

    var novaTarefa = document.createElement("input")
    novaTarefa.type = "checkbox"
    novaTarefa.setAttribute('id', 'checkbox' + checkbox)
    novaTarefa.setAttribute('onclick', "Riscar(" + "'tarefa" + tarefa + "'" + ')')

    var tarefaLabel = document.createElement("label")
    tarefaLabel.innerHTML = nomeTarefa
    tarefaLabel.setAttribute('id', 'tarefa' + tarefa)
    tarefaLabel.setAttribute('for', 'checkbox' + checkbox)
    

    document.body.appendChild(novaDiv)
    document.getElementById(div).appendChild(novaTarefa)
    document.getElementById(div).appendChild(tarefaLabel)

}