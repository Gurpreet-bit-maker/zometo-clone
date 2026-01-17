import { useForm } from "react-hook-form";
import { useContext, useEffect, useState, useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAuthentication from "../../context/authentication/authenticationCreate";

export default function Sign() {
  //   let b = [1, 3, 5].reduce((acc, current) => {
  //     return acc + current;
  //   }, 0);

  //   console.log(b);
  //*   usetransition hook
  let navigate = useNavigate();

  let { signUpData, setSignUpData } = useContext(userAuthentication);
  console.log(signUpData);

  useEffect(() => {});

  //*   useform hook
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // handle submit func
  let submitData = (data) => {
    try {
      setTimeout(() => {
        setSignUpData((prev) => [...prev, data]);
        console.log(data);
        reset();

        navigate("/", { state: data });
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  let password = watch("re_password");
  //   console.log(handleSubmit);
  return (
    <div className="h-150 md:h-200 md:border bg-green-50 py-5 shadow-lg w-full flex flex-col justify-center items-center">
      <form
        className="flex flex-col w-70 gap-y-5  md:w-130 md:h-150 md:justify-center md:items-center"
        action=""
        onSubmit={handleSubmit(submitData)}
      >
        <h1 className="text-[28px] md:text-[40px] font-bold ">Sign Up</h1>
        <input
          className="border h-10 rounded-lg pl-5 w-full md:w-110 md:h-15 md:text-2xl"
          type="text"
          placeholder="Username"
          {...register(
            "username",
            { maxLength: { value: 15 } },
            { required: "Name required" }
          )}
        />
        {errors.username && (
          <p className="text-yellow-400">{errors.username.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full md:w-110 md:h-15 md:text-2xl"
          type="email"
          placeholder="Email"
          {...register("email", { required: "email required" })}
        />
        {errors.email && (
          <p className="text-yellow-400">{errors.email.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full md:w-110 md:h-15 md:text-2xl"
          type="number"
          placeholder="Phone number"
          {...register(
            "phone",
            { minLength: { value: 10, message: "min 10 numbers" } },
            { required: "phone required" }
          )}
        />
        {errors.phone && (
          <p className="text-yellow-400">{errors.phone.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full md:w-110 md:h-15 md:text-2xl"
          type="password"
          placeholder="Confirm Re-Password"
          {...register(
            "re_password",
            {
              minLength: { value: 8, message: "min length 8" },
              maxLength: { value: 15, message: "max length 15" },
            },
            { required: "re-password required" }
          )}
        />
        {errors.re_password && (
          <p className="text-yellow-400">{errors.re_password.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full md:w-110 md:h-15 md:text-2xl"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "password required",
            minLength: { value: 8, message: "min 8 char" },
            maxLength: { value: 15, message: "max 15 char" },
            validate: (value) =>
              value === password || "password does not match",
          })}
        />
        {errors.password && (
          <p className="text-yellow-400">{errors.password.message}</p>
        )}
        <button
          className="border md:w-110 h-10 md:h-15 md:text-2xl rounded-lg text-white bg-[#0062FF]"
          type="submit"
        >
          Sign Up
        </button>
        {isSubmitSuccessful && (
          <div className="flex justify-center items-center">
            <p className=" text-green-600 text-shadow-lg tracking-wider flex justify-center items-center text-black text-lg font-bold">
              Submited
            </p>
          </div>
        )}
      </form>
      {/* Login Link if already user have */}
      <br />
      <div className="flex justify-center items-center">
        <div className=" text-gray-500 w-30 border mr-1"></div>
        <p className="text-center mb-5 text-gray-400 pt-4 font-mono">or</p>
        <div className=" text-gray-500 w-30 border ml-1"></div>
      </div>
      <div>
        <p className="md:text-2xl">
          Already have an account ?
          <Link to="/loginpage">
            <span className="text-blue-600 font-bold underline"> Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
