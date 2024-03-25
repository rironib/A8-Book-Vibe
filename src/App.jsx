import Header from "./Components/Header/Header.jsx";
// import Main from "./Components/Main/Main.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
      <div className='w-11/12 max-w-[1280px] mx-auto'>
          <Header/>
          {/*<Main/>*/}
          <Outlet/>
      </div>
  )
}

export default App
