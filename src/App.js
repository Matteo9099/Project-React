import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Coockails from './components/Coockails';
import Square from './components/Square';
import FoodCafe from './components/FoodCafe';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Coockails />
        <Square />
        <FoodCafe />
    </div>
  );
}

export default App;
