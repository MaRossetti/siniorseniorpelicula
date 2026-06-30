type RandomButtonProps = {
	urls: string[]
}

export const RandomButton = ({ urls }: RandomButtonProps) => {

	const getRandomAudio = () => {
		const randIndex = Math.floor(Math.random() * urls.length)
		const randKey = urls[randIndex]
		const audio = new Audio(randKey)
		audio.play()
  }

	return (
		<div>
			<button type="button" className="random-button" onClick={getRandomAudio}>
				RANDOM
			</button>
		</div>
	)
}