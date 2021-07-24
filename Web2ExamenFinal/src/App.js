import './App.css';
import MainBanner from './Inicio/MainBanner';
import Experience from './Inicio/Experience';
import MainProvider from './Inicio/MainProvider';
import MainAmazing from './Inicio/MainAmazing';
import MainWork from './Inicio/MainWork';
import MainTable from './Inicio/MainTable';

function App() {
  return (
      <div>
        <MainBanner />
        <Experience/>
        <MainProvider/>
        <MainAmazing/>
        <MainWork/>
        <MainTable/>
      </div>
  );
}

export default App;
