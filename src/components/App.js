// create your App component here
import React , {useState, useEffect} from 'react'

function App() {
  const [isLoading, setLoading] = useState(true)
  const [ dogs, setDogs] = useState([])
  
  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        setDogs(data.message)
        setLoading(false)
    });
    }, [])
    
    if(isLoading){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

  return (
    <>
     <img src={dogs} alt='A Random Dog'></img>
    </>
  )
}

export default App