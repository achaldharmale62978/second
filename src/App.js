
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Myapp from './componenet/Myapp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Myapp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
