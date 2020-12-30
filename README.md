<h4 align="center">
	Air CNC!
</h4>

<p align="center">
	<a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#page_facing_up-introdução">Introdução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
	<a href="#information_source-como-rodar-o-projeto">Como rodar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-extensões-vs-code">Dependências de Lint</a>
</p>

## :rocket: Tecnologias

Este projeto utiliza as seguintes bibliotecas.

- [polished](https://polished.js.org/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-routes-dom](https://reactrouter.com/web/guides/quick-start)
- [styled-components](https://styled-components.com/)

## :page_facing_up: Introdução

Muitas empresas estão abrindo possibilidades para alugarem locais de trabalho para programadores externos poderem conhecer a empresa e trabalhar junto com os programadores internos, a fim de possibilitar novas ideias de diversos outros programadores e possívelmente até gerando novos empregos a partir deste evento, para isso o Air CNC foi criado.

## :information_source: Extensões Vs Code

Para o processo de lint do projeto você precisa instalar algumas extensões:

- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#:~:text=The%20extension%20is%20linting%20an,custom%20task%20in%20tasks.json%20.)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Essas extensões fazem parte da padronização de código e ajudam no desenvolvimento do projeto, o EditorConfig irá ser o responsável por formatar a quebra de linha do projeto para o padrão configurado (neste caso usamos o padrão LF do ubuntu), o ESlint irá padronizar o código para uma melhor escrita e por fim e não menos importante o Prettier irá deixar quebrar as linhas caso fiquem muito extensas.

## :information_source: Como rodar o projeto

Abaixo seguem as intruções para rodar o projeto:

Atenção!!! Você precisa ter as ferramentas [Git](https://git-scm.com), [Node.js v10.16][nodejs] ou superior instaladas no seu computador.

## :boom: Erros comuns

Alguns erros odem ocorrer ao baixar este repositório, como por exemplo a quebra de linha de lf (Linux) para crlf (Windows), caso isso ocorra rode o comando abaixo:

```bash
# Entrar na pasta do projeto
cd aircnc

# Rodar o fix linting de código do ESLint
yarn eslint --fix .
```

Obs.: Adicionamos no script start dentro do arquivo package.json este recurso para simplificar o uso da aplicação para qualquer novo estudante conhecer o ecossistema do React JS.

## :mag: Linhas de Comandos

Em seu Terminal execute os seguintes comandos:

```bash
# Clonar o repositório
$ git clone https://github.com/BrunoFutema/aircnc.git

# Entrar na pasta do projeto
$ cd aircnc

# Instalar as dependências
$ yarn

# Para rodar a aplicação web
$ yarn start
```

Construído por [Bruno Futema](https://www.linkedin.com/in/brunofutema/) no evento da Semana OmniStack 9.0 :wave:

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
