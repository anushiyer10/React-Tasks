import { useState } from 'react';

import './App.css';
import './style.css'

function App() {
  const [sentenceCount, setSentenceCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [inputText, setInputText] = useState("");

  const handlechange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Count sentences
    const sentences = text.split(' ');
    setSentenceCount(sentences.length);

    // Count words
    const words = text
    setWordCount(words ? words.length : 0);
  }

  return (
    <>
      <div className="forms">
        <h3>Sentence Count: {sentenceCount}</h3>
        <h3>Words Count: {wordCount}</h3>
        <input value={inputText} onChange={(e) => handlechange(e)}></input>
      </div>
    </>
  );
}

export default App;
