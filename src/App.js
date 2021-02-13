import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  const [users, setUser] = useState([])

  useEffect(()=>{
    console.log("useEffect");
/*
    write a function that fetches the API data
      try-> make the api call
        setState of the users []
      catch -> console.log error

    invoke the funciton
    pass in the dependency array BECAUSE, 
    it is needed only the first time the component mounts (componentDidMount)
    */
    const fetchData = async () => {
      try{
        const response = await fetch("https://randomuser.me/api/?results=10")
        const data = await response.json()
        setUser([...data.results])

      }catch(e){
        console.log(e);
      }
    }
    fetchData()
  },[])

console.log("users1", users);
useEffect(()=>console.log("users2",users))

  return (
    <div className="container">
     hi
    </div>
  );
}

export default App;
