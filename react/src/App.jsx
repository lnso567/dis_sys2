import ReactDOM from "react-dom/client";
import { BrowserRouterm, Routes, Route} from "react-router-dom"
import Home from "../components/Home"
import Layout from "../components/Layout"


export default function App() {
  
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}/>
       <Route index element={<Home/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementsById('root'));
root.render(<App/>);
