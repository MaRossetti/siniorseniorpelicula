import './App.css'
import { SoundButton } from './components/SoundButton/SoundButton.tsx'
import { RandomButton } from './components/RandomButton/RandomButton.tsx'

function App() {

  //const baseUrl = '/public/audios/'

  const audioList = {
    rapidosenior: `/rapidosenior.ogg`,
    tenemosqueirnos: `/tenemosqueirnos.ogg`,
    alcampoyacriar: `/alcampoyacriar.ogg`,
    corredinsensatos: `/corredinsensatos.ogg`,
    dios: `/dios.ogg`,
    diosdiosdios: `/diosdiosdios.ogg`,
    eltiodelosmelindros: `/eltiodelosmelindros.ogg`,
    hayonohay : `/hayonohay.ogg`,
    lapulicia: `/lapulicia.ogg`,
    nopuedespasar: `/nopuedespasar.ogg`,
    nosrobanlaspatatas: `/nosrobanlaspatatas.ogg`,
    notocarloscojones: `/notocarloscojones.ogg`,
    peliculagrande: `/peliculagrande.ogg`,
    peliculagrandeopequena: `/peliculagrandeopequena.ogg`,
    porfavorsinior: `/porfavorsinior.ogg`,
    porfavorsoymuypobre: `/porfavorsoymuypobre.ogg`,
    prohibidotocarloscojones: `/prohibidotocarloscojones.ogg`,
    pulicia: `/pulicia.ogg`,
    rapidoporfavor: `/rapidoporfavor.ogg`,
    rapidoporfavorv2: `/rapidoporfavorv2.ogg`,
    senioor: `/senioor.ogg`,
    seniorespobre: `/seniorespobre.ogg`,
    seniorespobrev2: `/seniorespobrev2.ogg`,
    siniorseniorpelicula: `/siniorseniorpelicula.ogg`,
    tenemoskirnos: `/tenemoskirnos.ogg`,
    yaestabienporfavor: `/yaestabienporfavor.ogg`,

  }

 



  return (
    <>
      <h1>Sinior Sénior película (dios)</h1>
      <RandomButton urls={Object.values(audioList)} />
      <SoundButton label="Rapido senior" fileUrl={audioList.rapidosenior} />
      <SoundButton label="Tenemos que irnos" fileUrl={audioList.tenemosqueirnos} />
      <SoundButton label="Al campo y..." fileUrl={audioList.alcampoyacriar} />
      <SoundButton label="Corred insensatos!" fileUrl={audioList.corredinsensatos} />
      <SoundButton label="Dios" fileUrl={audioList.dios} />
      <SoundButton label="Dios x 3" fileUrl={audioList.diosdiosdios} />
      <SoundButton label="El tio de los melindros" fileUrl={audioList.eltiodelosmelindros} />
      <SoundButton label="Hay o no hay" fileUrl={audioList.hayonohay} />
      <SoundButton label="La pulicia" fileUrl={audioList.lapulicia} />
      <SoundButton label="Nos roban las patatas" fileUrl={audioList.nosrobanlaspatatas} />
      <SoundButton label="Nos puedes pasar" fileUrl={audioList.nopuedespasar} />
      <SoundButton label="No tocar los cojones" fileUrl={audioList.notocarloscojones} />
      <SoundButton label="Película grande" fileUrl={audioList.peliculagrande} />
      <SoundButton label="Película grande o pequeña" fileUrl={audioList.peliculagrandeopequena} />
      <SoundButton label="Por favor, señor" fileUrl={audioList.porfavorsinior} />
      <SoundButton label="Tenemos Kirnos" fileUrl={audioList.tenemoskirnos} />
      <SoundButton label="Por favor, soy muy pobre" fileUrl={audioList.porfavorsoymuypobre} />
      <SoundButton label="Prohibido tocar los cojones" fileUrl={audioList.prohibidotocarloscojones} />
      <SoundButton label="Pulicia" fileUrl={audioList.pulicia} />
      <SoundButton label="Rápido, por favor" fileUrl={audioList.rapidoporfavor} />
      <SoundButton label="Rápido, por favor 2" fileUrl={audioList.rapidoporfavorv2} />
      <SoundButton label="Señor" fileUrl={audioList.senioor} />
      <SoundButton label="Señor es pobre" fileUrl={audioList.seniorespobre} />
      <SoundButton label="Señor es pobre 2" fileUrl={audioList.seniorespobrev2} />
      <SoundButton label="Sinior senior pelicula" fileUrl={audioList.siniorseniorpelicula} />
    </>
  )
}

export default App
