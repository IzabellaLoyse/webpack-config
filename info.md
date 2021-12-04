# 🎲 Webpack

### 📄 O que é o Webpack ?

- O Webpack é um **module bundler** (empacotador de módulos)
- Que recebe **entradas(entry/entries)** que são os arquivos de dependências do projeto
- E transforma em uma **saída(output)**, que condensa as dependências
- Pode-se utilizar outros tipos de arquivos como: CSS, images, fonts e etc
- É possível também criar configurações diferentes para ambientes de desenvolvimento e produção

### 📌 Por que utilizar o Webpack ?

- **Reduzir a complexidade de importação das dependências**
- A própria importação de dependências(CommonJS), pois os navegadores não possuem compatibilidade com este recurso
- Coleta automática de dependências, baseada no que foi importado e exportado(dependency graph)
- Possibilidade de utilizar outros tipos de arquivos, não só JavaScript
- Carrega apenas o que é utilizado, redução de carregamento de arquivos

### 📌 Webpack e SPA

- As **SPAs(Single Page Applications)** vem dominando as arquiteturas de projetos Web
- Normalmente é utilizado muito JavaScript para atingir resultados interessantes com SPAs (frameworks e libs)
- Acaba que o webpack ajuda a organizar todo este código JS e também a otimizar a velocidade de carregamento destas páginas

## 🌐 Instalação do Webpack

- Instalação das dependências

```
npm install webpack webpack-cli --save-dev
```

- Gera o build do projeto

```
npx webpack
```

## ⚙️ Configuração do Webpack

- Podemos customizar o Webpack para atender alguma necessidade específica
- Criando apenas o arquivo `webpack.config.js` e definindo nossas preferências nele
- Podemos alterar o nome do arquivo `webpack.config.js` para `webpack.common.js` (mais comum de se ver na documentação)

## 🔗 Conceitos Fundamentais

### 📩 Entrada e Saída

- **Entry** ou entry point é o ponto inicial, onde as dependências do projeto são declaradas para o webpack geralmente no arquivo `index.js`
- **Output** é a saída do empacotamento do webpack, por efault fica na pasta **dist** e o arquivo é o `main.js`
- Todas estes padrões podem ser alterados em `webpack.config.js`

### 📌 Loaders

- **Loader** é o recurso que permite ao webpack processar diversos tipos de arquivos, além de JavaScript
- A cada tipo de arquivo novo que for processado no projeto, precisamos configurar no `webpack.config.js`
- Duas propriedades precisam ser definidas: a **test** para o tipo de arquivo e a **use** para o loader a ser utilizado
- Os loaders precisam ser instalados
- **Forma de carregar arquivos com o Webpack**
- Como: SCSS, CSS, Babel

### 🪄 Plugins

- **Plugins** são funcionalidades que podem ser adicionadas ao nosso projeto
- Como por exemplo: mimificar o JS para deixar o carregamento mais rápido
- Precisamos instalar e inicializar cada um dos plugins, eles devem ser adicionados no arquivo `webpack.config.js`

### 🛠️ Modes

- **Mode** ou modo é a forma que o webpack vai rodar no projeto que está sendo executado
- Podemos separar em **development**, **production** ou **none**
- Criando configurações isoladas para da um deles
- Definimos o modo do projeto em arquivos separados ou também no arquivo `webpack.config.js`

#### 💻 Development

- Modo de desenvolvimento é o ambiente de desenvolvimento do projeto
- Criando o arquivo com a seguinte sintaxe `webpack.dev.js`

#### ⏲️ Production

- Modo de produção é um build otimizado do projeto contendo os arquivos mimificados
- Criando o arquivo com a seguinte sintaxe `webpack.prod.js`
