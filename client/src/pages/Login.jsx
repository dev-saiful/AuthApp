import React from "react";

function Login() {
  return (
    <div className="text-center">
      <h2 className=" text-red-900">Login</h2>
      <div className="grid grid-cols-3 ">
        <div></div>
        <div className="">
          <form action="">
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
                required
              />
            </div>
            <div className="block">
              <label
                className="block text-sm font-medium text-slate-700"
                htmlFor="email"
              >
                Password
              </label>
              <input
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                id="pass"
                type="password"
                name="password"
                required
              />
            </div>
            <button className="mt-1 bg-orange-500 rounded-full w-24 h-8">
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
