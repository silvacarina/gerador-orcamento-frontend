var elementoListaClientes = document.getElementById('tarefas_lista')
var itensArmazenados = JSON.parse(localStorage.getItem('armazenamentoItens'))  || Array()

//ARMAZENAMENTO
function adicionarItemArmazenamento (item) {
    itensArmazenados.push(item)
    localStorage.setItem('armazenamentoItens', JSON.stringify(itensArmazenados))
}

//FORMULARIO
var form = document.getElementById("formulario_clientes")

function enviarFormulario(evento) {
    evento.preventDefault()

    var nome = document.getElementById(cabecalho_campo_texto).value = ""

    var itemDoFormulario = {
        nome: nome,
        jaFoiFeito: false
    }

    adicionarItemArmazenamento(itemDoFormulario)
    inserirItemHtml(itemDoFormulario)

    document.getElementById("cabecalho_campo_texto").value = ""
}

form.addEventListener("submit, EnviaFormulario")

inserirItensArmazenadosNoHtml()