import './App.css'
import {useGlobalContext} from './context/appContext'

function App() {

 const {isLoading, setLoading} = useGlobalContext()
 console.log(isLoading);
//  setLoading()
 console.log(isLoading);



  return (
    <div className='App'>
      <h1>hello nurse...</h1>
      <button onClick={setLoading}>Set Loading</button>
    </div>
  )
}

export default App
