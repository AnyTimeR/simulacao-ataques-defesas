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
        case 'ransomware':
            resultText = `
                Um ataque de ransomware criptografou os arquivos da empresa e exigiu um resgate.
                A defesa de backup regular permitiu a recuperação dos arquivos sem pagar o resgate e restaurar a operação normal.
            `;
            break;
        case 'sql-injection':
            resultText = `
                Uma tentativa de injeção de SQL foi feita para acessar dados sensíveis no banco de dados.
                A defesa de validação e parametrização de consultas ajudou a evitar que a injeção comprometesse o banco de dados.
            `;
            break;
        case 'cross-site-scripting':
            resultText = `
                Um ataque de Cross-Site Scripting (XSS) foi tentado para injetar scripts maliciosos na aplicação web.
                A defesa de filtragem e sanitização de entrada impediu a execução dos scripts maliciosos.
            `;
            break;
        case 'denial-of-service':
            resultText = `
                Um ataque de negação de serviço (DoS) foi realizado para sobrecarregar o servidor.
                A defesa de distribuição de carga e filtragem de tráfego ajudou a manter o servidor operacional e a minimizar a interrupção do serviço.
            `;
            break;
        case 'man-in-the-middle':
            resultText = `
                Um ataque de homem no meio (MitM) tentou interceptar a comunicação entre dois sistemas.
                A defesa de criptografia de comunicação garantiu que os dados transmitidos permanecessem seguros e protegidos.
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
