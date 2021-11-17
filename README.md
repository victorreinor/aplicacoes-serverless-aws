# Aplicações Serverless AWS

Como criar aplicações serverless usando AWS Web Services.

O intuito do curso é: 

1. Melhorar ainda mais o currículo, programar mais de 12 serviços na plataforma desde banco de dados, autenticação, e segurança à manipulação de máquinas a partir de funções.
2. Para deixar o ambiente de desenvolvimento mais limpo e evitar desperdício de dinheiro, utilizamos Docker e plugins no Serverless framework.
3. Entender como trabalhar com o framework, mas também como criar serviços via terminal, para que você tenha uma base sólida de aprendizado.

É utilizado no curso:

- Padrões de Projeto em Javascript;
- Publicação, versionamento e escalabilidade;
- Segurança, autenticação, autorização e validação de requests;
- Acesso aos principais serviços da AWS;
- Docker, LocalStack e Serverless plugins.

----

## Conteúdo:

1. Configuração de acessos na AWS;
2. Introdução à apps Serverless - Analisando imagens com AWS Rekognition;
3. Validações inteligentes com Joi e DynamoDB stream events;
4. Multi-environments e schedulers;
5. Mememaker usando ImageMagick e AWS Lambda Layers;
6. Processando arquivos sob demanda com Node.js Streams;

## Serviços discutidos no curso:

### S3:

Storage || Armazenamento

### FasS (Function as a Service):

Função como serviço 

[![FaaS](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/faas.png "FaaS")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/faas.png "FaaS")

### AWS Lambda

É um serviço para rodar nossa aplicações sem ter um servidor, escrevemos um bloco de código, é necessário fazer o upload do código para AWS e quando acontecer alguma requisição, ele levanta uma instancia para rodar o código, resolve e em seguida mata a instancia.

[![Lambda](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/lambda.png "Lambda")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/lambda.png "Lambda")

#### Limitações

Nem sempre seu ambiente local é a copia de produção.

#### Idle Timeout Cold Start

Se você não receber nenhuma requisição por um curto tempo a sua aplicação vai morrer dentro do ecossistema AWS e quando precisar de novo ele vai subir novamente essa instancia. O processo de subir essa instancia pode demorar um pouco parar subir.

[![Timeout](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/idle-timeout-cold-start.png "Timeout")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/idle-timeout-cold-start.png "Timeout")

Pode ser que a quantidade de memoria afete o tempo do Idle.

[![Memory](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/idle-timeout-by-memory.png "Memory")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/idle-timeout-by-memory.png "Memory")

#### Preço

É cobrado por tempo de duração de cada lambda

### Serverless Framework

O Serverless Framework foi criado para trabalhar com multi-nuvens para evitar serviços em multiplataformas, porém ainda não é 100% compativel com a google e microsoft porém com a AWS ele serve perfeitamente.

[![Serverless](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/serverless-framework.png "Serverless")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/serverless-framework.png "Serverless")

### DynamoDB

O Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que fornece um desempenho rápido e previsível com escalabilidade integrada. O DynamoDB permite que você transfira os encargos administrativos de operação e escalabilidade de um banco de dados distribuído. Assim, você não precisa se preocupar com provisionamento, instalação e configuração de hardware, replicação, correção de software nem escalabilidade de cluster. Além disso, o DynamoDB oferece criptografia em repouso, o que elimina a carga e a complexidade operacionais envolvidas na proteção de dados confidenciais. Para mais informações, consulte Criptografia do DynamoDB em repouso.

[![DynamoDB](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/dynamodb.png "DynamoDB")](https://raw.githubusercontent.com/victorreinor/aplicacoes-serverless-aws/master/imagens/dynamodb.png "DynamoDB")

### AWS Lambda Layers

O objetivo e reaproveitar ou compilar pacotes para o formato que roda na AWS.
Como sabemos as limitações da Lambda que é as dependencias dos ambientes, quando compilamos um projeto no Windows ele vai ter um binário diferente, no Linux a mesma coisa. 
Com a Layers conseguimos rodar no proprio runtime que roda a Lambda.