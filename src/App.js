import './App.css';
import { ThemeProvider } from './Components/Theme';
import { Posts } from './Pages/Posts';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <Profile />
      <Posts />
    </div>  
    </ThemeProvider>
  );
}

export default App;
