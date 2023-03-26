import './App.css'
import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
import Footer from "./components/Footer"
export default function App() {
  const [value,setValue] = useState("")
  const [search,setSearch]= useState("Delhi")
  function change(e){
    setValue(e.target.value)
  }
  function click(e){
    e.preventDefault();
    setSearch(value)
    console.log(search)
    console.log(value)
  }
  return (
    <>
    <Navbar handle={change} value={value} click={click}/>
    <Weather search={search}/>
    <Footer/>
    </>
  )
}
