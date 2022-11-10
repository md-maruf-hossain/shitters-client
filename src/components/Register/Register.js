import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register")

  const {createUser, updateUserProfile, googleUserLogin} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname|| '/';

  const google = new GoogleAuthProvider();

  const handleGoogle =() =>{
    googleUserLogin(google)
    .then((result) =>{
      const user = result.user;
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(err => {
      toast.error(err)
      console.error(err)
    });
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const imgURL = form.imgURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result =>{
      toast.success('Successfully registered!')
      const user = result.user;
      handleUpdateCurrentUser(name, imgURL);
      form.reset()
      navigate(from, {replace: true})
      console.log(user);
    })
    .catch(err => console.error(err))
  }
  const handleUpdateCurrentUser = (name, imgURL) =>{
    const currentUser = {
      displayName: name,
      photoURL: imgURL,
    };
    updateUserProfile(currentUser)
    .then(() => {})
    .catch((error) => console.error(error));
  }

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
        <p className="text-sm text-center dark:text-gray-400">
          <Link to="/login" rel="noopener noreferrer" className="focus:underline hover:underline">
            Already have an account? Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <Link
            onClick={handleGoogle}
            href="#"
            className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#FFC107"
              />
              <path
                d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                fill="#FF3D00"
              />
              <path
                d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                fill="#4CAF50"
              />
              <path
                d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                fill="#1976D2"
              />
            </svg>

            <span className="mx-2">Sign in with Google</span>
          </Link>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <form onSubmit={handleRegister} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your Image URL
              </label>
              <input
                type="text"
                name="imgURL"
                id="imgURL"
                placeholder="Image URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
          </div>
          <div><Toaster/></div>
          <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn bg-orange-500 text-black hover:bg-orange-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
