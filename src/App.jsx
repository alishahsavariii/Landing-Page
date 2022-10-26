import "./index.css";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Card from "./component/Card";
import HomeSection from "./component/HomeSection";
import Form from "./component/Form";

import { ThemeProvider } from "./component/ThemeContext";

function App() {
  return (
    <>
   
        <Navbar /> 
        <Header />
        <Card />
        <HomeSection />
        <Form />
    
    </>
  );
}

export default App;
