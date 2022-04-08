import React, {useState} from 'react';
import Button from './Button';


const Home = () => {

  const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   } 

  const handleReduce = () => {
    setCount(count - 1);
  }

  return (
    <div style={{
      display: "flex",
      flex: "1",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <h1>Home</h1>
      <div style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
        
        <Button >
          <p>Click Me!</p>
        </Button>
      </div>
      
    </div>
  )
}

export default Home;