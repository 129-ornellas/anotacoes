# Anotações

![image](https://github.com/129-ornellas/anotacoes/assets/103268305/741c7cd3-31ff-4e17-af66-146b3855cccc)

## Sobre o projeto:

O projeto **Anotações** é uma aplicação FullStack, utilizando **Vue.js**, **Express.js** e **sqlite**. 

É um aplicativo web que cria e gerencia anotações, armazenando objetos com: título, potencial de negócio, importância e lembrete.

Após a criação de uma anotação, os objetos são listados, para conferência e deleção, caso queira.

Além das tecnologias citadas, também utilizei: 
* **Nuxt** para arquitetura do Vue;
* **Vuetify** para estilização das páginas e componentes;
* **Axios** para chamadas de API; 
* **Prisma** para ORM;
* **Zod** para validação dos endpoints
* **eslint** para manter qualidade de código e formatação
* **nodemon** para facilitar o desenvolvimento do backend

## Passos para rodar o projeto:

### Configurando o FrontEnd

**Requisitos**: Node instalado. 

>Caso encontre problema ao instalar as dependências, verifique a versão do seu Node. Usar uma versão muito antiga do Node, não vai permitir que você rode o app. 

Instale as dependências do projeto:

Abra o repositório, entre na pasta frontend e rode em seu terminal:

``` npm install ```

Depois que finalizar a instalação, execute: 

``` npm run dev ```

Pronto, você já tem o frontend rodando, alocado na porta 3000, basta acessar: 

<http://localhost:3000/>

### Configurando o BackEnd

Agora, vamos instalar o backend, pode interromper o servidor do front caso queira usar apenas um terminal. 

Como eu utilizei Express.js no backend, vamos repetir o mesmo comando: 

``` npm install ```

Pronto, seu backend está pronto!

Mas calma, você precisa realizar as migrações do banco de dados, para que você tenha onde salvar suas anotações: 

``` npx prisma migrate dev --name init ```

Agora, vamos iniciar o backend:

``` npm run dev ```
    
Seu backend irá rodar na porta 8000.

Agora sim, seu aplicativo está em pleno funcionamento, agora é só aproveitar o Anotações! 
