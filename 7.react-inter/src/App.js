import { useState } from 'react';
import './App.css';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName)
  // console.log(lastName)
  
  // function changeFirstNameHandler(event){
  //   setFirstName(event.target.value)
  // }

  // function changeLastNameHandler(event){
  //   setLastName(event.target.value)
  // }


  //  for handling multiple states we use object inside state.
  
  const [formData, setFormData] = useState({firstName:"", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""});


  function changeHandler(event){
    const {name, value, checked, type} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the entire form......")
    console.log(formData)
    console.table(formData)
  }

  return (
    <div className=' w-[100vw] h-[100vh] text-center bg-slate-100 '>
      <form onSubmit={submitHandler}>
      <input className='bg-slate-300 mt-5'
        type="text"
        placeholder='firstName'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
      <br></br>
      <br></br>
      <input className='bg-slate-300'
        type="text"
        placeholder='lastName'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
      />
      <br></br>
      <br></br>

      <input className='bg-slate-300'
        type="email"
        placeholder='Enter your email here'
        onChange={changeHandler}
        name='email'
        value={formData.email}
      />
      <br></br>
      <br></br>

      <textarea className='bg-slate-300'
      placeholder='enter your comments here'
      onChange={changeHandler}
      name='comments'
      value={formData.comments}
      />

      <br></br>
      <br></br>

      <input className='bg-slate-300'
      type='checkbox'
      onChange={changeHandler}
      name="isVisible"
      id='isVisible'
      checked={formData.isVisible}
      />
      <label  htmlFor="isVisible">Am I Visible</label>

      <br></br>
      <br></br>
    <fieldset>

      <legend>Mode:</legend>

      <input className='bg-slate-300'
      type='radio'
      onChange={changeHandler}
      name='mode'
      id = "Online-Mode"
      value = "Online-Mode"
      checked={formData.mode === "Online-Mode"}
      />
      <label htmlFor='Online Mode'>I am Online</label>

      <input className='bg-slate-300'
      type='radio'
      onChange={changeHandler}
      name='mode'
      id = "Offline-Mode"
      value = "Offline-Mode"
      checked={formData.mode === "Offline-Mode"}
      />
      <label htmlFor='Offline-Mode'>I am Offline</label>
      </fieldset>
<br></br>
<br></br>
    <label htmlFor='favCar'>Choose your car : </label>
    <select className='bg-slate-300'
    name='favCar'
    id='favCar'
    value={formData.favCar}
    onChange={changeHandler} >
      <option>Alto</option>
      <option>Legender</option>
      <option>Defender</option>
      <option>Baleno</option>
      <option>G-Wagon</option>
      <option>Wagon-R</option>
      <option>Eeco</option>

    </select>
<br></br>
<br></br>
      <button className='bg-slate-300' onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default App;
