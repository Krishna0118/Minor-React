import Button from '@mui/material/Button';
//import './App.css'
import Alert from '@mui/material/Alert'; 

function App() {
  let handleClick = ()=>{
    console.log("button clicked");
  };

  return (
    <>
     <h1>Material UI</h1>
     <Button variant="contained" onClick={handleClick}>Click me</Button>
      <Button variant="contained" onClick={handleClick} color="error">Abort</Button>
      
      <Alert severity="error">This is an error Alert.</Alert>
    </>
  )
}

export default App
