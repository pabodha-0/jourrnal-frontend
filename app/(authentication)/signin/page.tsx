"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const signin = () => {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2">
      <section className="flex items-center justify-center min-h-screen">
        <div className=" w-4/5 sm:w-2/3 xl:w-1/2 max-w-lg">
          <h2 className="text-3xl font-semibold">Journal | Modern Blogging</h2>
          <p className="t text-slate-400 py-3">
            Welcome back! Please enter your details
          </p>
          <div className="flex items-center justify-center gap-2 w-full font-medium text-base border-solid border-2 border-slate-300 rounded-md py-2 my-4 transition cursor-pointer hover:border-black">
            <FcGoogle className="text-2xl" />
            <span>Log in with Google</span>
          </div>
          <div className="flex gap-3 items-center my-5">
            <hr className="w-full" />
            <span className="text-center text-slate-400">or</span>
            <hr className="w-full" />
          </div>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              className="b border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Email"
            />
            <input
              type="password"
              className="b border-b-2 w-full py-2 outline-none transition focus:border-black"
              placeholder="Password"
            />
            <div className="flex justify-between items-center text-sm font-semibold my-2">
              <label className="flex gap-1 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="remember-me"
                  id=""
                  className="cursor-pointer"
                />
                <span className="font-medium">Remember me</span>
              </label>
              <Link
                href={""}
                className="underline underline-offset-3 transition hover:text-slate-500"
              >
                Forgot password?
              </Link>
            </div>
            <button className=" bg-slate-800 text-white rounded-md py-2 transition border-2 border-transparent hover:bg-transparent hover:border-black hover:text-black">
              Log in
            </button>
          </form>
          <div className="text-center my-4">
            <span className=" text-slate-400">Don{"'"}t have an account? </span>
            <Link href={""} className="font-semibold hover:underline">
              Sign up for free
            </Link>
          </div>
        </div>
      </section>
      <section className=" hidden lg:block bg-[url('https://source.unsplash.com/xqowiF_PhhE')] bg-cover bg-center bg-no-repeat"></section>
    </main>
  );
};

export default signin;
