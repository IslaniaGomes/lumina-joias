const form = document.querySelector('#form');
const inputs = document.querySelectorAll('#form input');

form.addEventListener('submit', (event) => {
    let campoValid = true;

   
    inputs.forEach(input => {

        if (input.disabled) return; 

        if (input.value.trim() === '') {
            campoValid = false;
        }
        
    });

    if (!campoValid) {
        event.preventDefault();
        alert('Preencha todos os campos!');
    } else {
        alert('Enviado com Sucesso!');
    }
});
