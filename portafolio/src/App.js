import './App.css';
import { Name } from './componentes/Name'
import { Options } from './componentes/Options';

export default function App() {
  return (
    <div className='container d-flex editD'>
      <header>
        <Name />
        <Options />
      </header>

      <main>

      </main>
    </div>
  );
}


