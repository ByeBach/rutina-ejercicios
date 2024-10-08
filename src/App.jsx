import './App.css'
import Ejercicios from './components/Ejercicios'

function App() {
  

  return (
    <>
    <div className='container'>  
      <div className='header'>
        <h1 style={{ fontSize: '1.5rem', color: '#333' }}>Rutina Ejercicios</h1>
      </div>
      <div className='cards-container'>
        <Ejercicios 
          nombre="Flexiones de brazos"
          repeticiones="4"
          cantidad='15'
          />
      </div>
    </div>
    </>
  )
}

export default App
