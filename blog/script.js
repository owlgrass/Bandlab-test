/**
 * Using Vue runtime compliation
 */
const { createApp } = Vue

const App = {
  data() {
    return { message: 'Vue here!' }
  },
  template: `<div>hello {{ message }}</div>`
}
const $app = document.createElement('div')
document.body.prepend($app)
createApp(App).mount($app)
