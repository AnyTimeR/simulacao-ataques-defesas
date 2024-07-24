document.getElementById('attackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const attackType = document.getElementById('attackType').value;
    let resultText = '';

    switch (attackType) {
        case 'phishing':
            resultText = `
                Um e-mail de phishing foi enviado para os funcionários da empresa.
                A defesa de conscientização de segurança ajudou a identificar o e-mail suspeito e evitar que os funcionários clicassem no link malicioso.
            `;
            break;
        case 'brute-force':
            resultText = `
                Um ataque de força bruta foi realizado contra a senha do administrador.
                A defesa de bloqueio de conta após várias tentativas falhas ajudou a proteger a conta contra acesso não autorizado.
            `;
            break;
        case 'malware':
            resultText = `
                Um malware foi baixado acidentalmente por um usuário desavisado.
                A defesa de antivírus detectou o malware durante a verificação periódica e o removeu antes que pudesse causar danos.
            `;
            break;
        default:
            resultText = `Selecione um tipo de ataque para simular.`;
    }

    document.getElementById('result').innerHTML = `
        <h3>Resultado da Simulação:</h3>
        <p>${resultText}</p>
    `;
});