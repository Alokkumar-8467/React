import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState( { firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false , pushNotifications:""} )

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]: type === "checkbox" ? checked : value}) )
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of all data");
    console.log(formData)
    console.table(formData)
  }
  return (
    <div className='flex flex-col items-center  bg-slate-200 mt-2' >
      
    <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First name</label>
        <br/>
        <input 
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Alok'
        value={formData.firstName}
        onChange={changeHandler}
        className='outline rounded w-[50vw]  mb-2'
        />

        <br/>

        <label htmlFor='lastName'>Last name</label>
        <br/>
        <input 
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Kumar'
        value={formData.lastName}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />

        <br/>

        <label htmlFor='email'>Email Address</label>
        <br/>
        <input 
        type='email'
        name='email'
        id='email'
        placeholder='alok@gmil.com'
        value={formData.email}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />

        <br/>

        <label htmlFor='country'>Country</label>
        <br/>
        <select
        id='country'
        name='country'
        value={formData.country}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Japan</option>
        </select>

        <br/>

        <label htmlFor='streetAddress'>Street Address</label>
        <br/>
        <input 
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='1234 Main Str'
        value={formData.streetAddress}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />


        <br/>
        <label htmlFor='city'>City</label>
        <br/>
        <input 
        type='text'
        name='city'
        id='city'
        placeholder='New Delhi'
        value={formData.city}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />

        <br/>

        <label htmlFor='state'>State/Province</label>
        <br/>
        <input 
        type='text'
        name='state'
        id='state'
        placeholder='Delhi'
        value={formData.state}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />
        <br/>

        <label htmlFor='postalCode'>ZIP/Postal Code</label>
        <br/>
        <input 
        type='text'
        name='postalCode'
        id='postalCode'
        placeholder='110011'
        value={formData.postalCode}
        onChange={changeHandler}
        className='outline rounded w-[50vw] mb-2'
        />

        <br/>
        <br/>
        

        <fieldset>

          <legend className='font-bold'>By Email</legend>

          <div className='flex'>
          <input 
          id='comments'
          name='comments'
          type='checkbox'
          checked={formData.comments}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someone posts a comments on a posting.</p>
          </div>
          </div>
        
          <br/>

          <div className='flex'>
          <input 
          id='candidates'
          name='candidates'
          type='checkbox'
          checked={formData.candidates}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='comments'>Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
          </div>
          </div>

          <br/>
          
          <div className='flex'>
          <input 
          id='offers'
          name='offers'
          type='checkbox'
          checked={formData.offers}
          onChange={changeHandler}
          />
          <div>
          <label htmlFor='comments'>Offers</label>
          <p>Get notified when a candidate accepts or rejects an offers.</p>
          </div>
          </div>

        </fieldset>
        <br/>
        <br/>
        <fieldset>
          <legend className='font-bold'>Push Notifications</legend>
          <p>Theses are delivered via SMS to your mobile phone.</p>

          <input 
           type='radio'
           id='pushEverything'
           name='pushNotifications'
           value='Everything'
           onChange={changeHandler}
          />

          <label htmlFor='pushEverything'>Everything</label>

          <br/>

          <input 
           type='radio'
           id='pushEmail'
           name='pushNotifications'
           value='Same as email'
           onChange={changeHandler}
          />

          <label htmlFor='pushEmail'>Same as email</label>

          <br/>

          <input 
           type='radio'
           id='pushNothing'
           name='pushNotifications'
           value='No Push Notificatons'
           onChange={changeHandler}
          />

          <label htmlFor='pushNothing'>No Push Notificatons</label>

        </fieldset>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
    </form>



    </div>
  );
}

export default App;
