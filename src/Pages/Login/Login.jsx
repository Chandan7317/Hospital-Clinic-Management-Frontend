import React, { useState } from "react";
import Signup from "../Signup/Signup";

const Login = ({ showLogin, setShowLogin }) => {
  const [showSignup, setShowSignup] = useState(false);

  if (!showLogin && !showSignup) {
    return null;
  }

  return (
    <>
      {showLogin && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 overflow-y-auto"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-xl flex relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setShowLogin(false);
              }}
              className="absolute top-3 right-3 text-xl font-bold hover:text-red-500"
            >
              ✕
            </button>

            <div className="w-full flex items-center justify-center">
              <form
                noValidate
                className="flex flex-col justify-center gap-4 w-full p-6 text-black"
              >
                <h1 className="text-center text-xl sm:text-2xl font-bold">
                  Login to your account
                </h1>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="font-semibold text-sm sm:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Enter your email.."
                    className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="font-semibold text-sm sm:text-base"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    name="password"
                    id="password"
                    placeholder="Enter your password.."
                    className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-[#013a71] text-white font-semibold py-2 rounded-md transition
          hover:bg-green-600"
                >
                  Login
                </button>

                {/* Signup */}
                <p className="text-center text-sm">
                  Don’t have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setShowLogin(false); // 👈 Login band
                      setShowSignup(true); // 👈 Signup open
                    }}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    Signup
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {showSignup && (
        <Signup
          showSignup={showSignup}
          setShowSignup={setShowSignup}
          openLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import Signup from "../Signup/Signup";

// const Login = ({ showLogin, setShowLogin }) => {
//   const [showSignup, setShowSignup] = useState(false);

//   if (!showLogin && !showSignup) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 overflow-y-auto">
//       <div className="bg-white w-full max-w-md rounded-xl flex relative shadow-lg">
//         {/* Close Button */}
//         <button
//           onClick={() => {
//             setShowLogin(false);
//           }}
//           className="absolute top-3 right-3 text-xl font-bold text-red-500"
//         >
//           ✕
//         </button>

//         <div className="w-full flex items-center justify-center">
//           {showSignup ? (
//             <Signup
//               setShowSignup={setShowSignup}
//               showSignup={showSignup}
//               openLogin={() => {
//                 setShowSignup(false);
//                 setShowLogin(true);
//               }}
//             />
//           ) : (
//             <form
//               noValidate
//               className="flex flex-col justify-center gap-4 w-full p-6 text-black"
//             >
//               <h1 className="text-center text-xl sm:text-2xl font-bold">
//                 Login to your account
//               </h1>

//               {/* Email */}
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="email"
//                   className="font-semibold text-sm sm:text-base"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   name="email"
//                   id="email"
//                   placeholder="Enter your email.."
//                   className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Password */}
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="password"
//                   className="font-semibold text-sm sm:text-base"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   required
//                   name="password"
//                   id="password"
//                   placeholder="Enter your password.."
//                   className="bg-transparent px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="bg-[#013a71] text-white font-semibold py-2 rounded-md transition
//           hover:bg-green-600"
//               >
//                 Login
//               </button>

//               {/* Signup */}
//               <p className="text-center text-sm">
//                 Don’t have an account?{" "}
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowLogin(false); // 👈 Login band
//                     setShowSignup(true); // 👈 Signup open
//                   }}
//                   className="text-blue-600 font-semibold cursor-pointer hover:underline"
//                 >
//                   Signup
//                 </button>
//               </p>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
