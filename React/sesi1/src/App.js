import './App.css';
import Introduction from './components/introduction';
import Profile from './components/profile';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Belajar React, ini masih percobaan</p>
      <Profile />
      <Introduction name = 'Daffa Erfiansyah'/>
      <Introduction name = 'Dea Afrizal'/>
    </div>
  );
}

export default App;
