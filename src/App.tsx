import './App.css'
import { SoundButton } from './components/SoundButton/SoundButton.tsx'

function App() {
  return (
    <>
      <h1>Sinior Sénior película (dios)</h1>
      <SoundButton label="Rapido senior" fileUrl='/src/assets/audio/rapidosenior.ogg' />
      <SoundButton label="Tenemos que irnos" fileUrl='/src/assets/audio/tenemosqueirnos.ogg' />
    </>
  )
}

export default App
