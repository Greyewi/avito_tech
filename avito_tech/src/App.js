import './App.css';
import React, {useState} from "react"

export function App() {
  const [illustration, setIllustration] = useState('default')
  const [bgColor, setBgColor] = useState('#fff')
  const [file, setFile] = useState('https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270')

  return (
    <div className="App">
      <header className="App-header">
        <form className="flex">
          <div>
            <input
              type="text"
              placeholder="illustration"
              value={illustration}
              onChange={(event) => {
                setIllustration(event.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="color"
              value={bgColor}
              onChange={(event) => {
                setBgColor(event.target.value)
              }}
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(event) => {
                console.log(event.target.files[0])
                setFile(URL.createObjectURL(event.target.files[0]))
              }}
            />
          </div>

        </form>

        <div className="out" style={{
            backgroundColor: bgColor,
          }}>
            <img src={file} alt={file}/>
            <div className="outText">{illustration}</div>
          
        </div>
      </header>
    </div>
  );
}


