# 🎲 Webpack

### 📄 O que é o Webpack ?

- O Webpack é um module bundler (empacotador de módulos)
- Que recebe entradas(entry/entries) que são os arquivos de dependências do projeto
- E transforma em uma saída(output), que condensa as dependências
- Pode-se utilizar outros tipos de arquivos como: CSS, images, fonts e etc
- É possível também criar configurações diferentes para ambientes de desenvolvimento e produção

### 📌 Por que utilizar o Webpack ?

- Reduzir a complexidade de importação das dependências
- A própria importação de dependências(CommonJS), pois os navegadores não possuem compatibilidade com este recurso
- Coleta automática de dependências, baseada no que foi importado e exportado(dependency graph)
- Possibilidade de utilizar outros tipos de arquivos, não só JavaScript
- Carrega apenas o que é utilizado, redução de carregamento de arquivos

### 📌 Webpack e SPA

- As SPAs(Single Page Applications) vem dominando as arquiteturas de projetos Web
- Normalmente é utilizado muito JavaScript para atingir resultados interessantes com SPAs (frameworks e libs)
- Acaba que o webpack ajuda a organizar todo este código JS e também a otimizar a velocidade de carregamento destas páginas

## Instalação do Webpack

- Instalação das dependências

```
npm install webpack webpack-cli --save-dev
```

- Gera o build do projeto

```
npx webpack
```

## Configuração do Webpack

- Podemos customizar o Webpack para atender alguma necessidade específica
- Criando apenas o arquivo `webpack.config.js` e definindo nossas preferências nele
- Podemos alterar o nome do arquivo `webpack.config.js` para `webpack.common.js` (mais comum de se ver na documentação)

## Loaders

- Forma de carregar arquivos com o Webpack
- Como: SCSS, CSS, Babel

## Plugins

## Modes

### Development

### Production
