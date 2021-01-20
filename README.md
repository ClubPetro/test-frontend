# Desafio de Frontend

Um desafio proposto pela empresa Clubpetro onde devemos desenvolver uma interface que ajuda o usuário a criar uma agenda de viagens.

## Rodando o banco

Estando na raiz do projeto, rode o comando `json-server --watch --port 3333 db.json`
Tem que ser criado um .env no na raiz do seguindo o arquivo `.env.example`, normalmente o URL é `http://localhost:3333`

## Rodando o projeto

Estando na raiz do projeto, rode o comando `yarn` para instalar as dependencias e depois rode `yarn start`

## Sobre o projeto

Foi desenvolvido com base na [Clean Architeture](https://www.google.de/search?q=clean+architecture)

<img src="https://user-images.githubusercontent.com/823150/49566359-a3644400-f92a-11e8-9486-e48003bfb7d7.png" alt="Clean Architecture" />

### Camadas internas

A aplicação consiste em 3 camadas `data` `domain` `presentation`

#### data

A camada de data é responsável por todo o contato com o mundo exterior. Todos os dados que são acessados ou enviados passar por essa camada

#### domain

A camada de domain é responsável por gerenciar as regras de negócio da aplicação, conectando os casos de uso com as respectivas implementações concretas. Se algum caso de uso for específico do aplicativo, este é o lugar.

#### presentation

A camada de presentation é onde criamos a interface gráfica e onde recebemos as interações com o usuário. Esta camada deve conter o mínimo de lógica possível, sendo expressamente proibida a comunicação direta com a camada de dados e / ou conter regras de negócio, por exemplo, Ao fazer um cadastro o usuário precisa preencher o e-mail, portanto é necessária uma validação de campo , essa validação é uma regra de negócios do sistema e deve ser modelada corretamente.
