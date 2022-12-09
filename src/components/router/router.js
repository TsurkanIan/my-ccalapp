import { Link } from "react-router-dom";
import About from "../../pages/About";
import Login from "../../pages/Login";
import PostIdPage from "../../pages/PostIdPage";
import Posts from "../../pages/Posts";



export const privateRouter = [
  { path: "/about", element:<About/> },
  { path: "/posts", element: <Posts/> },
  { path: "", element: <Posts/> },
  { path: "/posts/:id", element: <PostIdPage/> },
]



export const publicRouter = [
  { path: "/login", element:<Login/> },
  { path: "/about", element:<About/> },
]