const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');
const textareas = document.querySelectorAll('textarea');

form.addEventListener('submit', (event) => {

    let campoValid = true;
    let campPreenchidos = true; 

   
    inputs.forEach(input => {

        if (input.value === '') {
            campPreenchidos = false; 
        }
    });

    
    textareas.forEach(textarea => {
        if (textarea.disabled) return;

        if (textarea.value === '') { 
            campPreenchidos = false;
        }
    });

    
    const cepInput = document.querySelector('#cep'); 

    if (cepInput) {
        const cep = cepInput.value.replace(/\D/g, ''); 
        if (cep.length !== 8) {
            campoValid = false; 
        }
    }

    if (!campPreenchidos) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos!');
    } else if (!campoValid) {
        event.preventDefault();
        alert('O CEP deve conter 8 dígitos!');
    } else {
        alert('Enviado com Sucesso!');
        form.reset();
    }
});
