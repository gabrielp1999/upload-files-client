import { useState } from 'react'
import './App.css'
import uploadFile from './service/uploadFile'

function App() {
  const [file, setFile] = useState<File | null>(null);

  const fileChange = (e: any) => {
    setFile(e.target.files[0]);
  }

  const sendFile = () => {
    if(!file){
      alert("Não existe arquivo");
      return;
    }
    uploadFile(file);
  }


  return (
    <div className='app'>
      <div className="file-upload-container">
        <input 
          type="file" 
          onChange={fileChange}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          Escolher arquivo
        </label>
        {file && (
          <p className='name-file'>
            Arquivo selecionado: {file.name}
          </p>
        )}

        <button
          onClick={() => sendFile()}
        >
          Enviar Arquivo
        </button>
      </div>
    </div>
  )
}

export default App
