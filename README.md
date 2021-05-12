# Desafio de Frontend

<img src=".github/logo-clubpetro.png"
     alt="Clubpetro" width="300">

- [Descrição](#descrição)
  - [O Desafio](#o-desafio)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
  - [Bônus](#bônus)
- [Submissão e Prazo de Entrega](#submissão-e-prazo-de-entrega)

## Descrição

Este desafio tem como objetivo avaliar as habilidades técnicas do canditado a vaga de desenvolvedor frontend no Clubpetro.

#### O Desafio

O desafio consiste em desenvolver um sistema que permita o CRUD de lugares para se conhecer ao redor do mundo. Como na imagem a seguir:

<img src=".github/challenge.png" alt="Desafio" >

O Sistema deverá conter um formulário com 3 campos:

- País: um select contendo a lista de todos os países existentes;
- Local: um input para que o usuário digite o local que ele deseja conhecer no país selecionado;
- Meta: um input para que o usuário digite a o mês e o ano que ele pretende visitar o local em questão.

Quando o usuário clicar em "Adicionar", o formulário deverá ser resetado e o local deverá aparecer na listagem dos cards, como mostrado na imagem acima.

#### Requisitos Obrigatórios

> Requisitos que serão avaliados no desafio.

- O Sistema deverá ser desenvolvido em typescript utilizando a biblioteca [React](https://pt-br.reactjs.org/);
- O Layout apresentado na imagem acima deverá ser fielmente seguido e pode ser encontrado no [Figma](https://www.figma.com/file/IC0xt3K3X21rLEfLRQ3mpl/Lugares-que-quero-conhecer?node-id=0%3A1);
- O CRUD poderá ser gerenciado pelo estado no React;
- Apenas o Local e Meta poderão ser editados e a edição do card deverá ser feita de acordo com a criatividade do canditado, não tendo um layout específico para esta ação;
- O Sistema deverá ser desenvolvido utilizando [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- O Sistema deverá ser integrado à API [Rest Countries](https://restcountries.eu/rest/v2/all) para a listagem dos países. Esta conta com a imagem da bandeira e a tradução do nome do país para Português;
- A biblioteca [react-input-mask](https://www.npmjs.com/package/react-input-mask) deverá ser utilizada para colocar uma mascara no input de "Meta" no formato mm/aaaa;
- O Sistema deverá ser responsivo;
- O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação.

#### Bônus

> Requisitos que não são obrigatórios mas podem te deixar em vantagem com relação aos outros candidatos.

- [Material-UI](https://material-ui.com/pt/);
- [Styled Components](https://styled-components.com/);
- Testes automatizados;
- Utilização da biblioteca [json-server](https://www.npmjs.com/package/json-server) para o CRUD.

### Submissão e Prazo de entrega

- O canditado deverá realizar um fork deste repositório e submeter o código no mesmo;
- Em caso do deploy realizado, a url deverá ser adicionada no README;
- O prazo de entrega para este desafio é de 2 (duas) semanas, contando a partir do dia em que o candidato recebeu o email com o link do repositório;
- Ao finalizar o desafio, o candidato deverá submeter o desafio no questionário disponível na sua área de candidato na plataforma(https://menvievagas.com.br/vagas/fam%C3%8Dliapires/) do Processo Seletivo. É só clicar em RESPONDER no questionário e inserir o link do seu PR.
Em caso de dúvidas, enviar um e-mail para jobs@clubpetro.com.br
