import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            text.length === 0 && alert('할 일을 입력해주세요🐻 ');
            setText('');
          }}
        >
          <input
            id="todo"
            placeholder="Enter your Todo 👍🏻"
            value={text}
            onChange={(e) => setText(e.target.value.trim())}
          />
          <button type="submit">submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
