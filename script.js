// Aguarda o HTML carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /* ==============================================================
       1. INTERATIVIDADE NÍVEL MÉDIO: ALTERNÂNCIA DE TEMA (DARK MODE)
    ============================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se o usuário já tinha salvo uma preferência anterior
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Atualiza o ícone e salva no LocalStorage
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    /* ==============================================================
       2. INTERATIVIDADE NÍVEL DIFÍCIL: VALIDAÇÃO DE FORMULÁRIO
       + FUNCIONALIDADE EXTRA: LOCALSTORAGE
    ============================================================== */
    const form = document.getElementById('coleta-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        // Previne o recarregamento da página (comportamento padrão)
        event.preventDefault();

        const nomeValue = nomeInput.value.trim();
        const emailValue = emailInput.value.trim();

        // Validação Lógica Básica
        if (nomeValue.length < 3) {
            alert('Erro: O nome deve ter pelo menos 3 caracteres.');
            nomeInput.focus();
            return; // Interrompe a execução
        }

        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            alert('Erro: Por favor, insira um endereço de e-mail válido.');
            emailInput.focus();
            return;
        }

        // Se passou nas validações, simula o envio e salva os dados localmente
        const dadosAgendamento = {
            nome: nomeValue,
            email: emailValue,
            data: new Date().toLocaleString()
        };

        // Salva no banco de dados do navegador (Funcionalidade Extra do Edital)
        localStorage.setItem('ultimoAgendamento', JSON.stringify(dadosAgendamento));

        // Feedback visual para o usuário
        alert(`Sucesso, ${nomeValue}! Seu pedido de coleta foi registrado no sistema local.`);
        
        // Limpa o formulário após o sucesso
        form.reset();
    });

});