"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const signin = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3">
      <section className=" hidden lg:block bg-[url('https://source.unsplash.com/hoS3dzgpHzw')] bg-cover bg-center bg-no-repeat"></section>
      <section className="flex items-center justify-center min-h-screen col-span-2">
        <div className=" w-4/5 sm:w-2/3 max-w-3xl">
          <h2 className="text-3xl font-semibold">Journal | Modern Blogging</h2>
          <p className="t text-slate-400 py-3">
            Welcome to Journal! Please enter your details
          </p>
          <div className="flex items-center justify-center gap-2 w-full font-medium text-base border-solid border-2 border-slate-300 rounded-md py-2 my-4 transition cursor-pointer hover:border-black">
            <FcGoogle className="text-2xl" />
            <span>Sign up with Google</span>
          </div>
          <div className="flex gap-3 items-center my-5">
            <hr className="w-full" />
            <span className="text-center text-slate-400">or</span>
            <hr className="w-full" />
          </div>
          <form action="" className="grid grid-cols-2 gap-y-5 gap-x-10">
            <input
              type="text"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="First Name"
            />
            <input
              type="text"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Last Name"
            />
            <input
              type="text"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Email"
            />
            <input
              type="password"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Password"
            />
            <input
              type="password"
              className="border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Confirm Password"
            />
            <div className="flex flex-col gap-1 text-base font-normal my-2 col-span-2 text-slate-600">
              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="remember-me"
                  id=""
                  className="cursor-pointer"
                />
                <span>I want to recieve updates about new articles etc.</span>
              </label>
              <label className="flex gap-2 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="remember-me"
                  id=""
                  className="cursor-pointer"
                />
                <span>
                  I agree to all the{" "}
                  <Link
                    className="font-semibold text-black hover:underline"
                    href={""}
                  >
                    Terms and Policies
                  </Link>
                </span>
              </label>
            </div>
            <button className=" col-span-2 bg-slate-800 text-white rounded-md py-2 mt-8 transition border-2 border-transparent hover:bg-transparent hover:border-black hover:text-black">
              Sign up
            </button>
          </form>
          <div className="text-center mt-5">
            <span className=" text-slate-400">Already have an account? </span>
            <Link href={""} className="font-semibold hover:underline">
              Sign in
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default signin;
