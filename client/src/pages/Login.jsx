import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useSigninMutation} from "../slices/usersApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import {toast} from "react-toastify";

const Login = ()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

 const [signin,{isLoading} ] = useSigninMutation();
  const { userInfo } = useSelector((state) => state.auth);

  // check if user already login
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate,userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signin({email,password}).unwrap();
      dispatch(setCredentials({...res}))
      navigate("/")
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <div className="text-center">
      <h2 className=" text-red-900">Login</h2>
      <div className="grid grid-cols-3 ">
        <div></div>
        <div className="">
          <form onSubmit={handleSubmit} action="">
            <div className="block">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="block">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="pass"
              >
                Password
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="pass"
                type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <button
            type="submit" disabled={isLoading}
              className="mt-1 bg-orange-500 rounded-full w-24 h-8"
            >
              Login
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
