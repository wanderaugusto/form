import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home/home';
import Acard from './pages/acard/aCard'
import Aform from "./pages/aform/aForm";


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> }> </Route>;
            <Route path="/acard" element={ <Acard /> }> </Route>;
            <Route path="/aform" element={ <Aform /> }> </Route>;
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes