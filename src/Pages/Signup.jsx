import React, { useState } from "react";
import { Link } from "react-router";
import MyContainer from "../Components/MyContainer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleSignup = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const termsAccepted = event.target.terms.checked;
    //   console.log("signup", email,password)

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
      return;
    }
    if (!termsAccepted) {
      toast.error("Please agree to the Terms & Conditions before signing up.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        toast.success("signUp ok");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        event.target.reset();
      });
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500">
      <MyContainer className="flex  py-5">
        {/* Left Side Image */}
        <div className="hidden md:flex flex-col items-center justify-center  text-white p-10">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to Our Community
          </h1>
          <p className="text-lg text-center max-w-md">
            Join us today and start your journey with amazing features, secure
            access, and a growing network of awesome people.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 mx-4">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Create Account
            </h1>

            <form onSubmit={handleSignup} className="space-y-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-gray-600 font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="***********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
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
              {/* Terms */}
              <div className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="terms"
                  className="mt-1 accent-purple-500"
                />
                <p className="text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition duration-200"
              >
                Sign Up
              </button>
              {/* Signin Link */}
              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-purple-600 hover:underline font-semibold"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signup;
