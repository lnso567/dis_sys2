import ReactDOM from "react-dom/client";
import {BrowserRouterm, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import PostUser from "./components/PostUser"
import GetAllUser from "./components/GetAllUser"





export default function App() {
  
  return (
    <BrowserRouterm>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path = "post" element={<PostUser/>} />
          <Route path = "get" element={<GetAllUser/>} />
        </Route>
      </Routes>
    </BrowserRouterm>
  );
}

const root = ReactDOM.createRoot(document.getElementsById('root'));
root.render(<App/>);
