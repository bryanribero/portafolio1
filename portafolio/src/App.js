import './App.css';
import { Name } from './componentes/Name'
import { Options } from './componentes/Options';
import { IconIdiom } from './componentes/IconIdiom';

export default function App() {
  return (
    <div className='container d-flex editD'>
      <header className="vh-100 d-flex flex-column">
  <div>
    <Name />
  </div>

  <div className="flex-grow-1 d-flex align-items-center justify-content-center">
    <Options />
  </div>

  <div>
    <IconIdiom />
  </div>
</header>

      <main>

      </main>
    </div>
  );
}


