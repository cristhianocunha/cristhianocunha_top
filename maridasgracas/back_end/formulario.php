<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $telefone = isset($_POST['telefone']) ? $_POST['telefone'] : '';
    $comentario = isset($_POST['comentario']) ? $_POST['comentario'] : '';
    // Valida os dados recebidos
    if (!empty($nome) && !empty($email)) {
        // Simula um processamento (pode ser salvando em um banco de dados ou enviando um email)
        echo "Dados recebidos com sucesso: Nome - $nome, Email - $email";
    } else {
        echo "Erro: Todos os campos são obrigatórios.";
    }
} else {
    echo "Erro: Método de solicitação inválido.";
}
?>
