<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload de Arquivos</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="container">
        <h1>Enviar Arquivos</h1>
        
        <form action="upload.php" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="file_upload">Selecione um arquivo (PDF ou imagem):</label>
                <input type="file" name="file_upload" id="file_upload" accept=".pdf,.jpg,.jpeg,.png,.gif" required>
            </div>
            
            <div class="form-group">
                <label for="file_name">Nome do arquivo (opcional):</label>
                <input type="text" name="file_name" id="file_name" placeholder="Deixe em branco para manter o nome original">
            </div>
            
            <div class="form-group">
                <label for="file_type">Tipo de arquivo:</label>
                <select name="file_type" id="file_type">
                    <option value="pdf">PDF</option>
                    <option value="image">Imagem</option>
                </select>
            </div>
            
            <button type="submit" name="submit">Enviar Arquivo</button>
        </form>
        
        <?php
        if (isset($_GET['status'])) {
            $status = $_GET['status'];
            if ($status == 'success') {
                echo '<p class="success">Arquivo enviado com sucesso!</p>';
            } elseif ($status == 'error') {
                $error = $_GET['error'] ?? 'Erro desconhecido';
                echo '<p class="error">Erro: ' . htmlspecialchars($error) . '</p>';
            }
        }
        ?>
    </div>
</body>
</html>