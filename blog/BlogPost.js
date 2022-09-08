export default {
	template: `
		<section class="blog-post">
			<header v-if="isGrouped">
				<h3>{{ post.title }}</h3>
				<div class="subtitle">
					<span>#{{ post.id }}</span>
				</div>
			</header>
			<header v-else>
				<h2>{{ post.title }}</h2>
				<div class="subtitle">
					<span>#{{ post.id }}</span>,
					<span>USER-ID: {{ post.userId }}</span>
				</div>
			</header>
			<div>
				<p v-for="p in bodyParagraphs">
					{{ p }}
				</p>
			</div>
		</section>
	`,
	props: {
		post: Object,
		isGrouped: Boolean
	},
	computed: {
		bodyParagraphs() {
			return this.post?.body?.split('\n')
		}
	}
}
