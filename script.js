document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    const form = document.getElementById('coleta-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

        const nomeValue = nomeInput.value.trim();
        const emailValue = emailInput.value.trim();

   
        if (nomeValue.length < 3) {
            alert('Erro: O nome deve ter pelo menos 3 caracteres.');
            nomeInput.focus();
            return; 
        }

        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            alert('Erro: Por favor, insira um endereço de e-mail válido.');
            emailInput.focus();
            return;
        }

        
        const dadosAgendamento = {
            nome: nomeValue,
            email: emailValue,
            data: new Date().toLocaleString()
        };

        localStorage.setItem('ultimoAgendamento', JSON.stringify(dadosAgendamento));

      
        alert(`Sucesso, ${nomeValue}! Seu pedido de coleta foi registrado no sistema local.`);
        
        form.reset();
    });

});
