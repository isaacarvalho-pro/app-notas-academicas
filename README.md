App de Notas Acadêmicas

Este é um aplicativo de anotações para gerenciar notas, tarefas e matérias acadêmicas de forma organizada. O projeto é desenvolvido com Node.js no back-end e Vanilla JavaScript no front-end.
Requisitos

Antes de começar, verifique se você tem as seguintes ferramentas instaladas:

    Node.js: Para rodar o back-end e o front-end.
        Baixar Node.js
    Git: Para clonar o repositório e versionar o código.
        Baixar Git

Como Rodar o Projeto na Sua Máquina
1. Clonando o Repositório

Primeiro, clone o repositório para a sua máquina local:

git clone https://github.com/isaacarvalho-pro/app-notas-academicas

Depois de clonar, entre no diretório do projeto:

cd app-notas-academicas

2. Instalando as Dependências

O projeto possui duas partes: o back-end (Node.js) e o front-end (Vanilla JavaScript). Para rodar o projeto, você precisa instalar as dependências de ambos.
Instalar Dependências do Back-End

    Navegue até a pasta server/:

cd server

Instale as dependências do back-end com o seguinte comando:

    npm install

Instalar Dependências do Front-End

    Navegue até a pasta client/:

cd ../client

Instale as dependências do front-end:

    npm install

3. Rodando o Projeto
Rodar o Back-End

Para iniciar o servidor do back-end, use o seguinte comando na pasta server/:

npm run dev

Isso iniciará o servidor na porta 3000 ou na que estiver configurada no arquivo .env. O servidor estará acessível em http://localhost:3000.
Rodar o Front-End

Para iniciar o front-end, vá para a pasta client/ e execute:

npm run dev

O front-end estará acessível em http://localhost:5173.
4. Configuração do Banco de Dados (MongoDB)

    Crie uma conta no MongoDB Atlas e crie um cluster para hospedar seu banco de dados.
    Gere uma string de conexão do MongoDB e adicione no arquivo .env no diretório server/.
    Exemplo de configuração no .env:

    MONGO_URI=SuaStringDeConexaoDoMongoDB

Boas Práticas

Aqui estão algumas boas práticas para garantir um fluxo de trabalho eficiente:
1. Branches

    Crie uma branch para cada nova funcionalidade ou tarefa.
    Sempre que terminar uma tarefa, faça um pull request para revisar o código antes de integrá-lo à branch principal (main).

2. Commits

    Faça commits pequenos e frequentes com mensagens descritivas. Exemplo de mensagem de commit:

    git commit -m "Adiciona tela de login"

3. Padrões de Código

    Tente seguir padrões comuns de formatação de código, como o uso de indentação de 2 ou 4 espaços.
    Use const e let em vez de var para declarar variáveis em JavaScript.
    Evite usar código redundante e tente reutilizar funções onde possível.

4. Atualização de Dependências

    Ao adicionar novas dependências, execute o comando npm install para garantir que as bibliotecas estejam atualizadas.
    Se precisar adicionar novas dependências, use:

    npm install nome-da-dependencia

Estrutura de Pastas

Aqui está a estrutura de pastas do projeto:

app-notas-academicas/
├── client/      # Front-end
│   ├── src/     # Código fonte do front-end
│   └── index.html  # Página principal
├── server/      # Back-end
│   ├── src/     # Código fonte do back-end
│   ├── index.js  # Servidor Node.js
│   └── .env     # Configurações do ambiente (Banco de dados, etc)
└── README.md    # Este arquivo

Licença

Este projeto está sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
