import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Course from "./pages/Course";
import Chapter from "./pages/Chapter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Course />}/>
        <Route path="/course/:id" element={<Chapter />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App