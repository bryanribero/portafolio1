import './App.css';
import { Name } from './componentes/Name'
import { Options } from './componentes/Options';
import { Idioma } from './componentes/Idioma'

export default function App() {
  return (
    <div className='container d-flex editD'>
      <header>
        <Name />
        <Options />
        <Idioma />
      </header>

      <main>

      </main>
    </div>
  );
}


