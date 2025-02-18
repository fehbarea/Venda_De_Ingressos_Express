# Projeto de Compra de Ingressos

Este projeto é uma aplicação web para a compra de ingressos, construída utilizando Node.js, Express, Mongoose e Mustache para renderização de templates. A aplicação permite que os usuários comprem ingressos, visualizem ingressos comprados e gerenciem ingressos disponíveis.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento que permite a execução de código JavaScript no lado do servidor.
- **Express**: Framework web para Node.js, utilizado para criar a estrutura do servidor e gerenciar rotas.
- **Mongoose**: Biblioteca de modelagem de dados para MongoDB e Node.js, utilizada para definir esquemas e interagir com o banco de dados MongoDB.
- **Mustache**: Motor de templates utilizado para renderizar páginas HTML no servidor.
- **CustomError**: Classe personalizada para tratamento de erros na aplicação.
- **Middleware**: Funções intermediárias utilizadas para manipular requisições e respostas, incluindo autenticação, validação e tratamento de erros.

## Estrutura do Projeto

- **controllers**: Contém os controladores que gerenciam a lógica de negócios e interagem com os modelos.
  - `pagesController.js`: Controlador para gerenciar as páginas da aplicação.
  - `ticketController.js`: Controlador para gerenciar as operações relacionadas aos ingressos.
- **models**: Contém os modelos Mongoose que definem os esquemas de dados e interagem com o banco de dados MongoDB.
  - `ticket.js`: Modelo para os ingressos.
- **middleware**: Contém os middlewares utilizados na aplicação.
  - `errorHandler.js`: Middleware para tratamento de erros.
- **views**: Contém os templates Mustache utilizados para renderizar as páginas HTML.
  - `home.mustache`: Template para a página inicial.
  - `bought.mustache`: Template para a página de ingressos comprados.
  - `buyTicket.mustache`: Template para a página de compra de ingressos.
  - `buyNew.mustache`: Template para a página de confirmação de compra.
- **routes**: Contém as definições de rotas da aplicação.
  - `ticketRoutes.js`: Rotas para operações relacionadas aos ingressos.
  - `pageRoutes.js`: Rotas para as páginas da aplicação.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/projeto-ingressos.git
   cd projeto-ingressos

2. Instale as dependências:
npm install

3. Configure as variáveis de ambiente:
MONGOCD_URI
PORT

4.Inicie o servidor:
npm start
