import React from "react";

function Login() {
    return (
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="text-center text-3xl font-bold mb-4">User Login</h1>
            <div className="mb-4">
              <label
                className="email block text-gray-700 font-bold mb-2"
                // for="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="password block text-gray-700 font-bold mb-2"
                // for="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-lg">
            Not yet a member? <a href="/register">Go to Register page</a>
          </p>
        </div>
      </div>
    );
}
export default Login;