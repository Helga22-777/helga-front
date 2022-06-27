import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">

      <main className='main'>
        <div className='container'>
          <Header />
          <HomePage />
        </div>
      </main>
      
    </div>
  );
}

export default App;
