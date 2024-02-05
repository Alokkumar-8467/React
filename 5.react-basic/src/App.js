import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      // Output value 
      setCourses(output.data);
    }
     catch (error) {
      toast.error("Network problem");  
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])
  

  return (
    <div className="min-h-screen flex flex-col">
      <div>
      <Navbar />
      </div>

      <div>
        <Filter filterData = {filterData}/>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
        }
      </div>

      <h1 className="bg-red-900">Alok</h1>
    </div>
  );
}

export default App;
