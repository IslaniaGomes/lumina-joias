
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


document.getElementById('cep').addEventListener('keypress', (e) => {
    if (/[a-zA-Z]/.test(e.key)) {
        e.preventDefault();
    } 
});

const inputCep = document.getElementById('cep');

inputCep.addEventListener('input', () => {
    let cep = inputCep.value.replace(/\D/g, ''); 
    let formataCep = '';

    if (cep.length > 5) {
        formataCep = cep.slice(0, 5) + '-' + cep.slice(5, 8); 
    } else {
        formataCep = cep; 
    }

    inputCep.value = formataCep; 

});

document.getElementById('cep').addEventListener('keyup', () => {
    const cep = document.getElementById('cep').value.replace('-', ''); 
    if (cep.length === 8) buscarCep();
});

