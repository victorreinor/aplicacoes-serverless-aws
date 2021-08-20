## Validações inteligentes com Joi e DynamoDB stream events

Usamos o design pattern, Decorator Pattern para criar middlewares de validação para que antes que qualquer função seja chamada, a validação da requisição aconteça evitando código replicado.

O projeto é composto por duas aplicações. Uma API que recebe dados de requisições e as guarda no DynamoDB. E a outra, observa alterações de streams em tabelas do DynamoDB para que quando uma nova inserção ou alteração aconteça, ele imprime o evento e informação recebida no CloudWatch. Como validador, você usará o Joi, poderosa ferramenta de validação de objeto que segue o padrão Fluent Validation e Builder Pattern.

### Como rodar o projeto ?

`cd trigger-dynamo`

Entra na pasta do projeto.

`npm install`

Instala as dependências utilizadas no projeto.

`npm install -g serverless`

Instala a dependência global do serverless

`npm run invoke-local`

Roda/Invoca a lambda que insere informações no banco de dados.

`npm run invoke-trigger-local`

Roda/Invoca/Monitora a lambda local que monitora a inserção no banco de dados.

#### Comandos adicionais:

`sls deploy`

Faz o deploy das lambdas na amazon.

`npm run invoke`

Roda/Invoca a lambda na nuvem.

`npm run invoke-trigger`

Roda/Invoca/Monitora a lambda que monitora a inserção no banco de dados