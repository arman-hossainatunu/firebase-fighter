import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleSignin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("signin", email, password);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast.success("signin ok");
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handelGoogleSignin = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result).catch((e) => {
        console.log(e.message);
      });
    });
  };
  const handelSignout = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        toast.success("signin ok");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
    console.log("sign out");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {user ? (
          <div className="text-center space-y-5">
            <img
              src={user?.photoURL}
              alt=""
              className="h-10 w-10 rounded-full mx-auto"
            />
            <h1>{user?.displayName}</h1>
            <p>{user?.email}</p>
            <button onClick={handelSignout} className="btn">
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleSignin} className="space-y-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Sign In
            </h1>
            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-gray-600 font-medium mb-1">
                Password
              </label>
              <input
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute right-5 top-[40px] z-50 cursor-pointer"
              >
                {show ? <FaEye></FaEye> : <FiEyeOff></FiEyeOff>}
              </span>
            </div>

            {/*Forgot password */}
            <div>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-gray-500 text-sm">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Signin */}
            <button
              onClick={handelGoogleSignin}
              type="button"
              className="w-full flex items-center justify-center gap-2 border cursor-pointer border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign in with Google</span>
            </button>

            {/* Signup Link */}
            <p className="text-center text-gray-600 mt-4">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 hover:underline font-semibold"
              >
                Sign Up
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
