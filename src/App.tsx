
import { useState } from 'react';
import './App.css'
import axios from 'axios';
import Infos from './Components/Infos';

function App() {

  const [inputText, setInputText] = useState('');
      const [Data, Setdata] = useState("");
      
    const VerifyUser = async () => {
          await axios.get(`https://api-node-7vk8.onrender.com/user?search=${inputText}`) 
              .then(res  =>  {
                Setdata(JSON.stringify(res.data))
               })

         if(Data.length <= 2 || inputText.length == 0){ 
              const Error = async () => {
              const style_input = await document.getElementById("Place") as HTMLElement
              const style_text = await document.getElementById("Fail_text") as HTMLElement
              style_input.style.border = await '2px solid red';
              style_text.style.display = await 'flex'
              }

              Error();
              
          }
           else {

              const succes = async () => {
              const div1 = await document.getElementById("Input") as HTMLElement
              const div2 = await document.getElementById("Infos") as HTMLElement
                
               if(div1.style.display != 'flex'){
                      div1.style.display = 'none';
                      div2.style.display = 'flex';
  
              }
            }
             succes();
          }
        
      
      }
      let Replacedata = (Data.replace(/"/g, ""));
      Replacedata = Replacedata.replace(/{/g, "")
      Replacedata = Replacedata.replace(/}/g, "")
      Replacedata = Replacedata.replace(/:/g, "")
      Replacedata = Replacedata.replace(/]/g, "")
      Replacedata = Replacedata.replace(/name_player/, "")
      Replacedata = Replacedata.replace(/total_score/, "")
      Replacedata = Replacedata.replace(/total_deaths/, "")
      Replacedata = Replacedata.replace(/total_minuts/, "")
      Replacedata = Replacedata.replace(/total_seconds/, "")
      const SplitData  = Replacedata.split(",");
  
  
        
  return (
    <>
      <div id="Home">

      <div id="Input">
        <h2>Enter your Nickname</h2>
        <input id='Place' type="text" placeholder="Nickname..." onChange={event => setInputText(event.target.value)} ></input>
        <p id="Fail_text">User not fund</p>
        <button onClick={VerifyUser} >Entrar</button>
    </div>


        <div id="Infos">
            <h2>FrogCoin's</h2>

              <Infos data={SplitData}></Infos>

            </div>
        
        </div>
      <div/>
     </>

    
  )
}

export default App
