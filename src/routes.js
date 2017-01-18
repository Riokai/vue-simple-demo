import VueRouter from 'vue-router'
import App from './App'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/', component: App },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({ routes })
