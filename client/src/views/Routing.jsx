import {  Route, Link, Routes } from "react-router-dom";
import Landing from "./landing";

const Routing = () => {
  return ( 
    <Routes>
      <Route path="/home" element={<Landing />}/>
    </Routes>
  );
}
 
export default Routing;