import './App.css';
import { ThemeProvider } from './Components/Theme';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Profile />
    </div>  
    </ThemeProvider>
  );
}

export default App;
