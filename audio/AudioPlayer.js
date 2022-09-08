export default {
	template: `
		<div class="audio-player">
			<button type="button" @click="handlePlay">
				<template v-if="isPlaying">Pause</template>
				<template v-else>Play</template>
			</button>
			<audio v-show="false" controls ref="audioElement" :src="src"></audio>
		</div>
	`,
	props: {
		src: String
	},
	data() {
		return {
			audioContext: undefined,
			isPlaying: false
		}
	},
	methods: {
		handlePlay() {
			// Check if context is in suspended state (autoplay policy)
			if (this.audioContext.state === 'suspended') {
				this.audioContext.resume()
			}

			if (this.isPlaying === false) {
				this.$refs.audioElement.play()
				this.isPlaying = true
			} else if (this.isPlaying === true) {
				this.$refs.audioElement.pause()
				this.isPlaying = false
			}
		}
	},
	mounted() {
		const audioElement = this.$refs.audioElement

		this.audioContext = new AudioContext()
		// I have no idea why this doesn't work
		// const track = this.audioContext.createMediaElementSource(audioElement)

		// // Connect our audio graph from the audio source/input node to the destination
		// const gainNode = audioContext.createGain()
		// gainNode.gain.value = 1
		// track.connect(gainNode).connect(this.audioContext.destination)
	}
}
