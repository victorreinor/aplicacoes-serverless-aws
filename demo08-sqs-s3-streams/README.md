# Processando arquivos sob demanda com Node.js Streams

O foco deste capítulo, é mostrar a variedade de ferramentas disponíveis para aumentar sua produtividade em aplicações serverless e diminuir seu custo. Também demonstra como fazer download e processamento de arquivos sob demanda utilizando Node.js Streams usando técnicas avançadas do Node.js.

O projeto deste capítulo observa arquivos e os envia à fila à medida que novos dados são lidos. Este, observa um bucket procurando por arquivos em formato csv no AWS S3. O programa faz download de arquivos sob demanda usando Node.js Streams, converte cada linha do csv para o formato JSON e adiciona o conteúdo à fila no AWS SQS para que cada linha do arquivo seja processada de forma individual.

O projeto usa o programa LocalStack para simular um ambiente de desenvolvimento com todos os principais serviços da AWS sendo executados localmente. O projeto é configurado em ambiente Docker com hot reload ativado usando docker-compose e Docker volumes, além de plugins do serverless framework como serverless-offline, serverless-localstack e exemplos de como testar uma aplicação serverless com serverless-mocha.