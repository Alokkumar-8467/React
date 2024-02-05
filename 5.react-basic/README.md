

useEffect work after the execution of hole function.

suppose we declare useEffect function inside App function.
So, useEffect function run or execute after the App function
It's not change the order where we declare useEffect function it's run's at last.

Basically if we want to do some task after rendering the component then we use useEffect. 

We use useEffect when we want to mount and unmount something from our components.

Component mount means that component render in UI and same for unmount.



1.this useEffect run at every rendering

  useEffect( () => {
     console.log("All done");
   });

  
2.this useEffect run at first rendering

   useEffect( () => {
     console.log("All done");
   },[]);
  

3.this useEffect run at first render + whenever dependency changes

   useEffect( () => {
     console.log("text ke value change huye kya");
   },[name]);


4.this useEffect run at first when to handle unmounting of a component
      
    useEffect(() => {
      console.log("new added");
    
      return () => {
        console.log("last removed");
      }
    }, [text])