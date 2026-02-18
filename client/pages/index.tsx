import React,{useEffect, useState}from  "react";
function index()
{ 
  const [message, setmessage] = useState("Loading...");
  useEffect(() => {
    fetch("http://localhost:3100/api/home")
    .then((response)=> response.json())
    .then((data) => {
      console.log(data);
      setmessage(data.message);

  });

},[]);

return <div> {message} </div>;
}
export default index;
