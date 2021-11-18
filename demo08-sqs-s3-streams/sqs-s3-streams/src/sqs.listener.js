class Handler {
  async main(event) {
    const [{ body, messageId }] = event.Records
    const item = JSON.parse(body)

    console.log('***event',
      JSON.stringify(
        {
          ...item,
          messageId,
          at: new Date().toISOString()
        }
      )
    )
    try {
      return {
        statusCode: 200,
        body: 'Hello',
      }
    } catch (erro) {
      console.log('***error', error.stack)
      return {
        statusCode: 500,
        body: 'Internal Error',
      }
    }
  }
}

const handler = new Handler()
module.exports = handler.main.bind(handler)