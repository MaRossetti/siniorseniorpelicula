type SoundButtonProps = {
	label: string
	fileUrl: string
}

export const SoundButton = ({ label, fileUrl }: SoundButtonProps) => {
	let audio = new Audio(fileUrl)

    const start = () => {
        audio.play()
    }


	return (
		<div>
			<button type="button" onClick={start}>
				{label}
			</button>
		</div>
	)
}