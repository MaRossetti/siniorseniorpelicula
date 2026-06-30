import './App.css'
import { SoundButton } from './components/SoundButton/SoundButton.tsx'

function App() {

  const baseUrl = '/public/audios/'

  const audioList = {
    rapidosenior: `${baseUrl}rapidosenior.ogg`,
    tenemosqueirnos: `${baseUrl}tenemosqueirnos.ogg`,
  }

  return (
    <>
      <h1>Sinior Sénior película (dios)</h1>
      <SoundButton label="Rapido senior" fileUrl={audioList.rapidosenior} />
      <SoundButton label="Tenemos que irnos" fileUrl={audioList.tenemosqueirnos} />
    </>
  )
}

export default App
