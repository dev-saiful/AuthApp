import { Link,NavLink } from "react-router-dom"

function Navbar() {
  return (
   <nav className="bg-purple-500 flex flex-wrap items-center justify-between h-16">
    <Link className="mx-10" to="/">AuthApp</Link>
    <div className="mx-10 h-full w-1/3 py-5">
    <NavLink className=" bg-yellow-400 m-1" to="/">Home</NavLink>
    <NavLink className=" bg-yellow-400 m-1" to="/login">Login</NavLink>
    <NavLink className=" bg-yellow-400 m-1" to="/register">Register</NavLink>
    </div>
   </nav>

  )
}

export default Navbar


