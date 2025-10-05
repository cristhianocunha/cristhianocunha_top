// Função para gerar o payload PIX
function gerarPayloadPIX(chave, nome, cidade, valor = '', mensagem = '') {
    // IDs dos campos do PIX (conforme padrão EMV)
    const payloadFormat = '000201'; // Payload Format Indicator
    const merchantAccount = '0014BR.GOV.BCB.PIX01'; // Merchant Account Information
    const merchantCategory = '52040000'; // Merchant Category Code
    const transactionCurrency = '5303986'; // Transaction Currency (BRL)
    const countryCode = '5802BR'; // Country Code
    const merchantName = '59'; // Merchant Name
    const merchantCity = '60'; // Merchant City
    const additionalData = '62'; // Additional Data Field
    const crc16 = '6304'; // CRC16
    
    // Formatar chave PIX
    const chaveLength = String(chave.length).padStart(2, '0');
    const chaveField = `05${chaveLength}${chave}`;
    
    // Construir Merchant Account Information
    const merchantAccountLength = String(merchantAccount.length + chaveField.length).padStart(2, '0');
    const merchantAccountFull = `26${merchantAccountLength}${merchantAccount}${chaveField}`;
    
    // Merchant Name
    const nomeLength = String(nome.length).padStart(2, '0');
    const nomeField = `${merchantName}${nomeLength}${nome}`;
    
    // Merchant City
    const cidadeLength = String(cidade.length).padStart(2, '0');
    const cidadeField = `${merchantCity}${cidadeLength}${cidade}`;
    
    // Additional Data Field (para mensagem)
    let additionalDataField = '';
    if (mensagem) {
        const mensagemLength = String(mensagem.length).padStart(2, '0');
        const mensagemField = `05${mensagemLength}${mensagem}`;
        const additionalDataLength = String(mensagemField.length).padStart(2, '0');
        additionalDataField = `${additionalData}${additionalDataLength}${mensagemField}`;
    } else {
        additionalDataField = `${additionalData}040300`;
    }
    
    // Campo de valor (opcional)
    let valorField = '';
    if (valor && parseFloat(valor) > 0) {
        const valorStr = parseFloat(valor).toFixed(2);
        const valorLength = String(valorStr.length).padStart(2, '0');
        valorField = `54${valorLength}${valorStr}`;
    }
    
    // Montar payload completo
    let payload = payloadFormat + 
                  merchantAccountFull + 
                  merchantCategory + 
                  transactionCurrency;
    
    if (valorField) {
        payload += valorField;
    }
    
    payload += countryCode + 
               nomeField + 
               cidadeField + 
               additionalDataField + 
               crc16;
    
    // Calcular CRC16
    const crc = calcularCRC16(payload);
    payload += crc;
    
    return payload;
}

// Função para calcular CRC16
function calcularCRC16(payload) {
    let crc = 0xFFFF;
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = (crc << 1) ^ 0x1021;
            } else {
                crc = crc << 1;
            }
        }
    }
    crc = crc & 0xFFFF;
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

// Função para gerar QR Code
function gerarQRCode(payload) {
    const qrcodeDiv = document.getElementById('qrcode');
    const copyBtn = document.getElementById('copyBtn');
    
    // Limpar QR Code anterior
    qrcodeDiv.innerHTML = '';
    qrcodeDiv.style.display = 'block';
    copyBtn.style.display = 'block';
    
    // Gerar novo QR Code
    QRCode.toCanvas(qrcodeDiv, payload, {
        width: 300,
        margin: 2,
        color: {
            dark: '#000000',
            light: '#FFFFFF'
        }
    }, function(error) {
        if (error) {
            console.error(error);
            alert('Erro ao gerar QR Code: ' + error.message);
        }
    });
    
    // Salvar payload para cópia
    copyBtn.onclick = function() {
        navigator.clipboard.writeText(payload).then(function() {
            alert('Código PIX copiado para a área de transferência!');
        }).catch(function(err) {
            console.error('Erro ao copiar: ', err);
            alert('Erro ao copiar código PIX');
        });
    };
}

// Validação do formulário
document.getElementById('pixForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const chave = document.getElementById('chave').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const valor = document.getElementById('valor').value;
    const mensagem = document.getElementById('mensagem').value.trim();
    
    // Validações básicas
    if (!chave) {
        alert('Por favor, informe a chave PIX');
        return;
    }
    
    if (!nome) {
        alert('Por favor, informe o nome do recebedor');
        return;
    }
    
    if (!cidade) {
        alert('Por favor, informe a cidade');
        return;
    }
    
    // Validar formato da chave PIX
    if (!validarChavePIX(chave)) {
        alert('Chave PIX inválida. Use CPF, telefone, email ou chave aleatória válida.');
        return;
    }
    
    // Gerar payload e QR Code
    const payload = gerarPayloadPIX(chave, nome, cidade, valor, mensagem);
    gerarQRCode(payload);
});

// Função para validar chave PIX
function validarChavePIX(chave) {
    // CPF (11 dígitos)
    if (/^\d{11}$/.test(chave)) {
        return true;
    }
    
    // Telefone (com DDD)
    if (/^\d{10,11}$/.test(chave)) {
        return true;
    }
    
    // Email
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(chave)) {
        return true;
    }
    
    // Chave aleatória (UUID)
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(chave)) {
        return true;
    }
    
    return false;
}

// Função para gerar exemplo
function gerarExemplo() {
    document.getElementById('chave').value = '12345678900';
    document.getElementById('nome').value = 'João Silva';
    document.getElementById('cidade').value = 'São Paulo';
    document.getElementById('valor').value = '50.00';
    document.getElementById('mensagem').value = 'Pagamento serviço';
}

// Adicionar botão de exemplo (opcional)
window.onload = function() {
    const form = document.getElementById('pixForm');
    const exemploBtn = document.createElement('button');
    exemploBtn.type = 'button';
    exemploBtn.textContent = 'Preencher com Exemplo';
    exemploBtn.style.backgroundColor = '#6c757d';
    exemploBtn.style.marginTop = '10px';
    exemploBtn.onclick = gerarExemplo;
    form.appendChild(exemploBtn);
}