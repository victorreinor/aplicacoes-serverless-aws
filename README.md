## S3

Storage || Armazenamento

### Function as a Service (Faas)

Função como serviço 

(adicionar imagem)

### Lambda

É um serviço para rodar nossa aplicações sem ter um servidor, escrevemos um bloco de código, é necessário fazer o upload do código para AWS e quando acontecer alguma requisição, ele levanta uma instancia para rodar o código, resolve e em seguida mata a instancia.

#### Limitações

Nem sempre seu ambiente local é a copia de produção.

##### Idle Timeout Cold Start

Se você não receber nenhuma requisição por um curto tempo a sua aplicação vai morrer dentro do ecossistema AWS e quando precisar de novo ele vai subir novamente essa instancia. O processo de subir essa instancia pode demorar um pouco parar subir.

(adicionar imagem - idle-timeout-cold-start.png) 

Pode ser que a quantidade de memoria afete o tempo do Idle.

(adicionar imagem - idle-timeout-by-memory.png)

#### Preço

É cobrado por tempo de duração de cada lambda

### Serveless Framework

O Serveless Framework foi criado para trabalhar com multi-nuvens para evitar serviços em multiplataformas, porém ainda não é 100% compativel com a google e microsoft porém com a AWS ele serve perfeitamente.

