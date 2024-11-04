## Projeto Nasa-Explorer
Este projeto é uma aplicação web que utiliza a API da NASA para exibir imagens e informações sobre o espaço. Ele foi construído com Node.js e Express, utilizando EJS.

### Rotas
- /: Página inicial.
- /APOD: Exibe a imagem astronômica do dia
- /Mars: Exibe fotos do rover Curiosity em Marte.

### Funcionalidades
- Página Inicial : Uma seção introdutória que apresenta a aplicação.
- Foto Astronômica do Dia (APOD) : Mostra a imagem astronômica do dia, incluindo título e descrição.
- Fotos do Marte : Exibe


### Tecnologias Utilizadas
 - Node.js : Plataforma de execução JavaScript no servidor.
 - Express : Framework para criar aplicações web em Node.js.
 - Axios : Biblioteca para fazer requisições HTTP.
 - EJS : Motor de modelo para renderizar HTML.


### Pré-requisitos
Antes de executar o projeto, verifique se o Node.js e o npm estão instalados em sua máquina.

### Configuração
Clone o Repositório

``` bash
git clone https://github.com/seuusuario/nasa-api-project.git
cd nasa-api-project
```

### Instale as Dependências
```bash
npm install
```
### Obtenha uma Chave da API da NASA

 - Acesse o site NASA API e registre-se para obter uma chave de API gratuita.(https://api.nasa.gov/)
 - Substitua a variável apiKey no seu código com a chave obtida.


### Estrutura do Projeto
```bash
Copiar código
/Nasa-Explore
├── /public
│   ├── styles (contém arquivos CSS)
│   └── ... (outros arquivos estáticos)
├── /views
│   ├── apod (template para a imagem do dia)
│   ├── mars.ejs (template para fotos de Marte)
│   └── section(template da página inicial)
│   └── ... (outros arquivos estáticos/ header e o footer)
├── index.js arquivo principal da aplicação)
├── package.json (configurações do projeto)
└── README.md (documentação do projeto)
```

### Executando o Projeto

```bash
Copiar código
node app.js
http://localhost:3000/
```
