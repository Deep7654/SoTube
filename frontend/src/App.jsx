import { useState ,useEffect, useCallback } from "react"
import axios from "axios"


function App() {
 
const[jokes , setJokes] = useState([])

//using Fetch
const dataFetch = useCallback(()=>{
  fetch('http://localhost:8000/api/data')
  .then((res)=> res.json())
  .then((res)=> setJokes(res.jokes))
  .catch((err)=>{
    console.log(`failed To Fatch Jokes ${err}`)
  })
} , [])

const UserFetch = useCallback(()=>{
  fetch('http://localhost:8000')
  .then((res)=> res.json())
  .then((res)=> setUser(res.user))
  .catch((err)=>{
    console.log(`failed To Fatch Jokes ${err}`)
  })
} , [])
const [username , setUsername] = useState();
const [password , setPassword] = useState();
const [User , setUser] = useState("user");

const handleSubmit = async (e) => {
  try {
    e.preventDefault();
    const res = axios.post('http://localhost:8000' , {
      username,password
    })
  } catch (error) {
    console.log(err)
  }
}

//using axios
useEffect(()=>{
// axios.get("http://localhost:8000/api/data").then((res)=>{
//   console.log(res)
//   console.log(res.data.jokes)
//   setJokes(res.data.jokes)
// })
// .catch((err)=>{
//   console.log(`fetch Faild ${err}`)
// })
dataFetch();

}, [dataFetch])

  return(
    <>
    <div className="flex items-center justify-center h-[100vh] w-[100vw] ">
    <div className="bg-red-500 h-[80vh] text-white w-[80vw]">
      <div className="flex items-center justify-center h-[50vh]">
        <div>
      <h2 className="p-4">fetcching Jokes from backend</h2>
      <h3 className="p-4">count of jokes {jokes.length}</h3>
      {jokes.map((jokes , index)=>{
       return <h3 className="p-4 bg-yellow-600" id={jokes.id}>joke No {jokes.id} :- {jokes.joke}</h3>
      })}
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username"/>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
        <button type="submit">Login</button>
      </form> 
      <button onClick={dataFetch}>get
        {User}
      </button>
      </div>
      </div>
    </div>
    </div>
   
    </>
  )
}

export default App

