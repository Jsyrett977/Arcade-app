
import { Route, Routes } from "react-router";
import { Home, NavBar, Tic } from "./components/index.js";
import "./App.css"
const App = () => {
    return(
        <>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tic' element={<Tic />}></Route>
        </Routes>
        </>
    )
}
export default App;