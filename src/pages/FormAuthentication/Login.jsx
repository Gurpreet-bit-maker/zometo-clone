import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userAuthentication from "../../context/authentication/authenticationCreate";
export default function Login() {
  let { loginData, setLoginData } = useContext(userAuthentication);
  let [value, setValue] = useState([]);
  let navigate = useNavigate();
  console.log(loginData);

  //*   useform hook
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // handle submit func
  let submitData = (data) => {
    try {
      // setLoginData(data);
      setLoginData((prev) => [...prev, data]);
      console.log(data);
      reset();
      navigate("/", { state: loginData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-150 py-5 shadow-lg w-full flex flex-col justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col w-70 gap-y-5"
      >
        <h1 className="text-[28px] font-bold">Login form</h1>
        <input
          className="border h-10 rounded-lg pl-5 w-full"
          type="text"
          placeholder="Username"
          {...register("username", { required: "Name required" })}
        />
        {errors.username && (
          <p className="text-yellow-400">{errors.username.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full"
          type="password"
          placeholder="password"
          {...register("password", { required: "password required" })}
        />
        {errors.password && (
          <p className="text-yellow-400">{errors.password.message}</p>
        )}
        {/* submit btn */}

        <button
          className="border w-full h-10 rounded-lg text-white bg-[#0062FF]"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
