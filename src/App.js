import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [year, setYear] = useState(0)
  
  const formdata = () => {
    const data = {name, year}
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={e=> {e.preventDefault() ; formdata()}}>
          <label>Enter Your Info</label>
          <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" />
          <input type="number" name="year" value={year} onChange={e=>setYear(e.target.value)} placeholder="1897" />
          <button type="submit">Submit</button>
        </form>

      </header>
    </div>
  );
}

export default App;

