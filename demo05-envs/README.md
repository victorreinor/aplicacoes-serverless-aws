## Trabalhando com multi-environments e schedulers

Como dividir arquivos de configuração em JSON e YAML do serverless framework para dinamicamente escolher o arquivo correto de acordo com o ambiente.

O projeto consiste em um CRON JOB, uma função que é executada periodicamente conforme o ambiente escolhido. O programa obtém informações de um website específico, limpa seus dados em HTML usando cheerio, transforma em formato JSON e registra o conteúdo extraído no DynamoDB.

### Como rodar o projeto ?

`cd lambda-environment`

Entra na pasta do projeto.

`npm install`

Instala as dependências utilizadas no projeto.

`npm install -g serverless`

Instala a dependência global do serverless

`npm run invoke-local`

Roda/Invoca a lambda que insere informações no banco de dados.

#### Comandos adicionais:

`sls deploy`

Faz o deploy das lambdas na amazon.

`npm run invoke`

Roda/Invoca a lambda na nuvem.