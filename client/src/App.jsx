import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Landing from '../src/components/landing/landingPage'
import Home from '../src/components/home/homePage'
import Detail from '../src/components/detail/detailPage'
import Form from '../src/components/form/formPage'
import Countries from '../src/components/countries/Countries'
import Navbar from '../src/components/nav/Nav'
import axios from 'axios'
import './App.css'

function App() {
  const [paises, setPaises] = useState([])


  async function onSearch(name) {
    try {
      const lowerCaseName = name.toLowerCase();
      const response = await axios.get(`http://localhost:3001/countries-name?name=${lowerCaseName}`);
      console.log(response)
       console.log(response.data.name)
      
      if (response.data && response.data.name > 0) {
        const paisName= response.data[0].name.toLowerCase()
        const paisExist= paises.some((pais)=>pais.name === paisName)
          
          if (!paisExist){
            setPaises((country)=>[...country, { name: paisName }])
          }else{
            window.alert("El pais ya fue agregado")
          }
      } else {
        window.alert('El país no existe');
      }
    } catch (error) {
      window.alert('Ocurrió un error al buscar el país.');
    }
  }
  

  function onClose(id){
    setPaises((paises.filter((paises)=>paises.id !== id)))
  
 }
  
  const location=useLocation()
  return (
    <div className='App'>
      {location.pathname !== "/" && <Navbar onSearch={onSearch}/>}
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path='/countries' element={<Home/>}></Route>
                <Route path='/detail/:id' element={<Detail/>}></Route>
                <Route path='/countries/form' element={<Form/>}></Route>
                <Route path="/home" element={<Countries paises={paises} onClose={onClose}/>}></Route>
            </Routes>
        </div>
   
  )
}

export default App
