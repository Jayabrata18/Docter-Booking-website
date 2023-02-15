import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        throw new Error('Error registering user');
      }

      alert('User registered successfully');
    } catch (error) {
      alert(error.message);
    }
  };
  //  const navigate = useNavigate();
    // const onFinish = async (values) => {
    // try {
    //   // dispatch(showLoading());
    //   const response = await axios.post("/api/user/register", values);
    //   // dispatch(hideLoading());
    //   if (response.data.success) {
    //     toast.success(response.data.message);
    //     navigate("/login");
    //   } else {
    //     toast.error(response.data.message);
    //   }
    // } catch (error) {
    //   // dispatch(hideLoading());
    //   toast.error("Something went wrong");
    // }
  // };
  return (
    // <div className="authentication">
    //   <div className="authenticationform">
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-md rounded px-5 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl font-bold mb-4">
            New User Register Here
          </h1>
          <div className="mb-4">
            <label
              className="username block text-gray-700 font-bold mb-2"
              // for="username"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="email block text-gray-700 font-bold mb-2"
              // for="email"
            >
              Email<span className="text-red-500">*</span>
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
              Password<span className="text-red-500">*</span>
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
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-lg">
          Already signed up? <a href="/login">Go to Sign In page</a>
        </p>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
export default Register;
