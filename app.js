const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const app = new Koa()
const JSON_MIME = 'application/json'


app.use(async (context, next) => {
  context.type = JSON_MIME
  await next()
})

// app.use(async (context, next) => {
//   try {
//     await next()
//   } catch (ex) {
//     context.logger.error(ex.stack || ex)
//     context.body = {
//       status: -1,
//       message: ex.message || ex,
//       code: ex.status
//     }
//   }
// })


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4001)
console.log('app start at 4001')