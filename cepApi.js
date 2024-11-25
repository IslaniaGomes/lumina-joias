
const preencheForm = (endereco) => {
    document.getElementById('endereco').value = `${endereco.logradouro}, ${endereco.bairro} , ${endereco.uf}`;
}

const buscarCep =  async( ) => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencheForm(endereco);
}

document.getElementById('cep').addEventListener('focusout', buscarCep)