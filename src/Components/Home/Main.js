"use client";
import Image from "next/image";
import image from "../../assets/3426526-removebg-preview.png";

function Main() {
  return (
    <>
      <div className="-m-3 sm:-mx-8 p-3 sm:px-8 relative h-screen overflow-hidden overflow-x-hidden bg-[#3b8395] xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600 before:hidden before:xl:block before:content-[''] before:w-[57%] before:-mt-[28%] before:-mb-[16%] before:-ml-[13%] before:absolute before:inset-y-0 before:left-0 before:transform before:rotate-[-4.5deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400 after:hidden after:xl:block after:content-[''] after:w-[57%] after:-mt-[20%] after:-mb-[13%] after:-ml-[13%] after:absolute after:inset-y-0 after:left-0 after:transform after:rotate-[-4.5deg] after:bg-[#3b8395] after:rounded-[100%] after:dark:bg-darkmode-700">
        <div className=" relative z-10 sm:px-10 ">
          <div className="block grid-cols-2 gap-4 xl:grid">
            {/* BEGIN: Login Info */}
            <div className="flex-col hidden min-h-screen xl:flex overflow-hidden">
              <div className="my-auto">
                <Image
                  alt="img"
                  className="w-1/2 -mt-16 -intro-x rounded-xl"
                  src={image}
                />
                <div className="mt-10 text-4xl font-medium leading-tight text-white -intro-x">
                  Welcome to Vito Soft Task
                </div>
                <div className="mt-5 text-lg text-white -intro-x text-opacity-70 dark:text-slate-400">
                  This Task made by Eslam gouda Emam
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className="flex h-screen py-5 my-10 xl:h-auto xl:py-0 xl:my-0 overflow-hidden">
              <div className="w-full px-5 py-8 mx-auto my-auto bg-white rounded-md shadow-md xl:ml-20 dark:bg-darkmode-600 xl:bg-transparent sm:px-8 xl:p-0 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto"></div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
