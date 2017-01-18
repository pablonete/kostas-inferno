import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import { MovementsGrid } from './Components/MovementsGrid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Kostas - Inferno</h2>
        </div>
        <MovementsGrid/>
      </div>
    );
  }
}

export default App;
