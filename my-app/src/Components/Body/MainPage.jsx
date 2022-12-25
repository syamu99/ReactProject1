
import React,{useState, useEffect} from 'react'
import "./MainPage.css"


//data stroed local by using states conecpt

function MainPage(){
  const [data, setData] = useState([]);
  const apiGet=() => {
  fetch("https://jsonplaceholder.typicode.com/users").then((responce) => responce.json())
  .then((json)=> {
    console.log(json)
    setData(json)
})

}

//we can use useEffect to allow you can perform side effects in your computer like fetching  data directly updating the DOM, and timers. useEffect accepts two arguments. 
//The second argument is optional. useEffect(<function>, <dependency>).
useEffect(() => {
apiGet();
  },  []);

return (

  <div> My APP <br />
  <button onClick={apiGet}> FetchApi</button>
  
  {/* <pre>{JSON.stringify(data,null,2)}</pre>*/}
  <div> 
  <ul>
  {data.map((item)=>(
    <li key={item.id}>{item.id},{item.phone},{item.name},{item.address.city}</li>
    
   
))}
  </ul>
  
  </div>
 
  </div>

);
  
};

export default MainPage