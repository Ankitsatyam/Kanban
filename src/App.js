import './App.css';
import Boards from './Components/Boards/Boards.jsx';

function App() {
  return (
    <div className="App">
      <div className='app-navbar'>
        <h2>kanban</h2>
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          <Boards/>
          <Boards/>
          <Boards/>
          <Boards/>
        </div>
      </div>
    </div>
  );
}

export default App;
