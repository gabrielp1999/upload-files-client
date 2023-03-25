import { useState } from 'react'
import './App.css'
import uploadFile from './service/uploadFile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [file, setFile] = useState<File | null>(null);
  const [linkFile, setLinkFile] = useState("");

  const fileChange = (e: any) => {
    setFile(e.target.files[0]);
  }

  const sendFile = () => {
    if(!file){
      alert("Não existe arquivo");
      return;
    }
    toast.success("Upload concluido", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    uploadFile(file)
    
    .then((res) => {
      if(res.status === 200){
        setLinkFile(res.url)
      }
    })
  }

  return (
    <div className='app'>
      <div className="file-upload-container">
        <h2 className='name-file'>Upload de Arquivos</h2>
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
          className="btn"
        >
          Enviar Arquivo
        </button>

          {linkFile && 
          <div>
            <h5 className='name-file'>Link do arquivo salvo no servidor:</h5>
            <a target="_blank" href={linkFile}>{linkFile}</a>
          </div>}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  )
}

export default App
