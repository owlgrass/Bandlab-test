import AudioPlayer from './AudioPlayer.js'
const { createApp } = Vue

const App = {
	template: `
		<div>
			hehhe
			<div>
				New Wave Kit
				<AudioPlayer src="https://static.bandlab.com/soundbanks/previews/new-wave-kit.ogg" />
			</div>
			<div>
				Synth Organ
				<AudioPlayer src="https://static.bandlab.com/soundbanks/previews/synth-organ.ogg" />
			</div>
		</div>
	`,
	components: {
		AudioPlayer
	}
}
const $app = document.createElement('div')
document.body.prepend($app)
createApp(App).mount($app)
