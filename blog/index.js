import BlogPosts from './BlogPosts.js'
const { createApp } = Vue

const App = {
	template: `
		<BlogPosts></BlogPosts>
	`,
	components: {
		BlogPosts
	}
}
const $app = document.createElement('div')
document.body.prepend($app)
createApp(App).mount($app)
