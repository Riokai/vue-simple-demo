import routes from './routes'

setTimeout(() => {
  // 2s后自动跳转到 foo
  routes.push('/foo')
}, 2000)
