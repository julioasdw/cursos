document.getElementById('generateButton').addEventListener('click', function() {
    // Gerar um número de senha aleatório
    const senha = Math.floor(Math.random() * 9000) + 1000; // Gera um número entre 1000 e 9999

    // Criar uma nova janela para mostrar a senha
    const novaJanela = window.open('', '', 'width=400,height=400');
    novaJanela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Senha Gerada</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f0f0f0;
                }
                .container {
                    text-align: center;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .senha {
                    font-size: 48px;
                    margin: 20px 0;
                }
                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 10px 20px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Sua Senha</h1>
                <div class="senha">${senha}</div>
                <button onclick="window.print()">Imprimir</button>
            </div>
        </body>
        </html>
    `);
});
