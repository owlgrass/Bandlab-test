import BlogPost from './BlogPost.js'

export default {
	template: `
		<div class="blog-posts">
			<header>
				<h1>Blog</h1>
				<label>
					Sort:
					<select v-model="input.sort">
						<option>None</option>
						<option>Ascending</option>
						<option>Descending</option>
					</select>
				</label>
				<label>
					<input type="checkbox" v-model="input.group">
					Group by USER-ID?
				</label>
			</header>
			<template v-if="input.group">
				<section v-for="(group, key) in groupedPosts" class="group">
					<h2>USER-ID: {{ key }}</h2>
					<BlogPost
						v-for="p in group"
						:post="p"
						:key="p.id"
						:isGrouped="input.group"
					/>
				</section>
			</template>
			<template v-else>
				<BlogPost
					v-for="p in ungroupedPosts"
					:post="p"
					:key="p.id"
					:isGrouped="input.group"
				/>
			</template>

		</div>
	`,
	data() {
		return {
			posts: [],
			input: {
				sort: 'Ascending', // Ascending | Descending | None
				group: true
			}
		}
	},
	computed: {
		ungroupedPosts() {
			return this.sortPosts([...this.posts])
		},
		groupedPosts() {
			if (!this.input.group) return {}

			let groups = {}
			this.posts.forEach((p) => {
				const userId = p.userId
				if (!groups[userId]) groups[userId] = []
				groups[userId].push(p)
			})

			for (const key in groups) {
				this.sortPosts(groups[key])
			}

			return groups
		}
	},
	methods: {
		async fetchData() {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts')
			const posts = await response.json()
			this.posts = posts
		},
		/**
		 * Sort posts array (in place) by their title, in order specified in instance
		 */
		sortPosts(posts) {
			if (this.input.sort === 'Ascending') {
				posts.sort((a, b) => a.title.localeCompare(b.title))
			} else if (this.input.sort === 'Descending') {
				posts.sort((a, b) => a.title.localeCompare(b.title) * -1)
			}
			return posts
		}
	},
	created() {
		this.fetchData()
	},
	components: {
		BlogPost
	}
}
