## Introdução à apps Serverless - Analisando imagens com AWS Rekognition

Você aprenderá sobre a motivação de aplicações serverless e suas principais limitações. Você criará uma API que analisa imagens e retorna detalhes da imagem para o cliente em Português.

Usamos o design pattern, Dependency Injection para desacoplar dependências de funções. O programa é configurado usando o serverless framework. Ele converte imagens para o tipo Buffer, e retorna os detalhes de cada imagem a partir do serviço AWS Rekognition e com a resposta, traduz os detalhes da imagem usando o serviço AWS Translate.

### Como rodar o projeto ?

`cd image-analysis`

`npm install`

`npm install -g serverless`

`sls invoke local -f img-analysis --path request.json`

Esse deverá ser o retorno

```js
Detecting labels...
Translating to Portuguese...
Handling final object...
finishing...
{
    "statusCode": 200,
    "body": "A imagem tem\n  97.03% de ser do tipo Gato\n 97.03% de ser do tipo animal\n 97.03% de ser do tipo mamífero\n 97.03% de ser do tipo animal\n 96.69% de ser do tipo gatinho\n 96.05% de ser do tipo abissínio\n 81.88% de ser do tipo manx"
}
```