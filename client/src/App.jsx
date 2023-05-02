
import React from 'react'
import {
	BrowserRouter as Router,
	 Route, 
	 Routes, 
	 Link} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'



 const App = () => {
  return (
	<div className=' App align-items-center justify-content-center'>
  <Router>
  <nav className="shadow bg-white ml-5 mt-3 m3-5  rounded  navbar navbar-expand-lg ">
  <div className="container-fluid pl-lg-5 pt-2">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link    primary" to="createPost">add post</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

<Routes>
<Route path="/" exact element={<Home/>}/>
<Route path="/createPost" element={<CreatePost/>} />


</Routes>
  </Router>
		
	</div>
  )
}




export default App








//-------app.jsx for fullstack web development------------
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CreatePost from "./pages/CreatePost";
// import Post from "./pages/Post";
// import Registration from "./pages/Registration";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import CreateCourse from "./pages/CreateCourse";

// import { AuthContext } from "./helpers/AuthContext";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [authState, setAuthState] = useState({
//     username: "",
//     id: 0,
//     status: false,
//   });

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/auth/auth", {
//         headers: {
//           accessToken: localStorage.getItem("accessToken"),
//         },
//       })
//       .then((response) => {
//         if (response.data.error) {
//           setAuthState({ ...authState, status: false });
//         } else {
//           setAuthState({
//             username: response.data.username,
//             id: response.data.id,
//             status: true,
//           });
//         }
//       });
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     setAuthState({ username: "", id: 0, status: false });
//   };

//   return (
//     <div className="App">
//       <AuthContext.Provider value={{ authState, setAuthState }}>
//         <Router>
//           <div className="navbar">
//             <div className="links">
//               {!authState.status ? (
//                 <>
//                   <Link to="/login"> Login</Link>
//                   <Link to="/registration"> Registration</Link>
//                 </>
//               ) : (
//                 <>
//               <Link to="/createCourse"> CreatePost</Link>
//                   <Link to="/"> Home Page</Link>
//                   <Link to="/createpost"> Create A Post</Link>
//                 </>
//               )}
//             </div>
//             <div className="loggedInContainer">
//               <h1>{authState.username} </h1>
//               {authState.status && <button onClick={logout}> Logout</button>}
//             </div>
//           </div>
//           <Routes>
//             <Route path="/" exact element={<Home/>} />
//             <Route path="/createpost" exact element={<CreatePost/>} />
//             <Route path="/post/:id" exact element={<Post/>} />
//             <Route path="/registration" exact element={<Registration/>} />
//             <Route path="/login" exact element={<Login/>} />
//             <Route path="/createCourse" exact element={<CreateCourse/>}></Route>
//             <Route path="*" exact element={<PageNotFound/>} />
//           </Routes>
//         </Router>
//       </AuthContext.Provider>
//     </div>
//   );
// }

// export default App;