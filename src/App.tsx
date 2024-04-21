
import { useState, ChangeEvent } from 'react';
import './App.css'
import axios from 'axios';
import Infos from './Components/Infos';

function App() {
  const [inputText, setInputText] = useState('')
  const [SplitData, setSplitData] = useState('');


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  };

  const NewUser = async () => {
    axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    await axios.get(`https://api-node-7vk8.onrender.com/user?search=${inputText}`)
      .then(res => {
        const Data = JSON.stringify(res.data)
        if (Data.length == 0) {
          NewUser
        } else {
          VerifyUser(Data);
        }
      })


  }



  const VerifyUser = (Data?: any) => {

    if (inputText.length == 0 || Data.length <= 2) {
      const style_input = document.getElementById("Place") as HTMLElement
      const style_text = document.getElementById("Fail_text") as HTMLElement
      style_input.style.border = '2px solid red';
      style_text.style.display = 'flex'
    }
    else {

      const div1 = document.getElementById("Input") as HTMLElement
      const div2 = document.getElementById("Infos") as HTMLElement

      if (div1.style.display != 'flex') {
        div1.style.display = 'none';
        div2.style.display = 'flex';

        let Replacedata = (Data.replace(/"/g, ""));
        Replacedata = Replacedata.replace(/{/g, "")
        Replacedata = Replacedata.replace(/}/g, "")
        Replacedata = Replacedata.replace(/:/g, "")
        Replacedata = Replacedata.replace(/]/g, "")
        Replacedata = Replacedata.replace(/id_player/, "")
        Replacedata = Replacedata.replace(/name_player/, "")
        Replacedata = Replacedata.replace(/total_score/, "")
        Replacedata = Replacedata.replace(/total_deaths/, "")
        Replacedata = Replacedata.replace(/total_minuts/, "")
        Replacedata = Replacedata.replace(/total_seconds/, "")
        const split = Replacedata.split(",");
        console.log(split)
        setSplitData(split)


      }

    }
  }




  return (
    <>
      <div id="Home">

        <div id="Input">
          <h2>Enter your Nickname</h2>
          <input id='Place' value={inputText} type="text" placeholder="Nickname..." onChange={handleChange} ></input>
          <p id="Fail_text">User not fund</p>
          <button onClick={NewUser} onTouchEnd={NewUser}  >Entrar</button>
        </div>


        <div id="Infos">
          <h2>FrogCoin's</h2>

          <Infos data={SplitData} ></Infos>

        </div>

      </div>
      <div />
    </>
  )
}


export default App
