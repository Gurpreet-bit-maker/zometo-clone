import { useForm } from "react-hook-form";
import { useEffect, useState, useTransition } from "react";
import { Link } from "react-router-dom";

export default function Sign() {
  //   let b = [1, 3, 5].reduce((acc, current) => {
  //     return acc + current;
  //   }, 0);

  //   console.log(b);
  //*   usetransition hook
  let { isPending, startTransition } = useTransition();

  let [userdata, setUserData] = useState([]);
  let [isSubmiting, setIssubmiting] = useState(false);
  useEffect(() => {
    console.log(userdata);
  });

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
      setTimeout(() => {
        setUserData(data);
        console.log(data);
        reset();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(handleSubmit);
  return (
    <div className="border w-full flex flex-col justify-center items-center">
      <form
        className="flex flex-col w-70 gap-y-5"
        action=""
        onSubmit={handleSubmit(submitData)}
      >
        <h1 className="text-[28px] font-bold">Sign Up</h1>
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
          type="email"
          placeholder="Email"
          {...register("email", { required: "email required" })}
        />
        {errors.email && (
          <p className="text-yellow-400">{errors.email.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full"
          type="number"
          placeholder="Phone number"
          {...register("phone", { required: "phone required" })}
        />
        {errors.phone && (
          <p className="text-yellow-400">{errors.phone.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full"
          type="password"
          placeholder="Confirm Re-Password"
          {...register("re_password", { required: "re-password required" })}
        />
        {errors.re_password && (
          <p className="text-yellow-400">{errors.re_password.message}</p>
        )}
        <input
          className="border h-10 rounded-lg pl-5 w-full"
          type="password"
          placeholder="Password"
          {...register("password", { required: "password required" })}
        />
        {errors.password && (
          <p className="text-yellow-400">{errors.password.message}</p>
        )}
        <button
          disabled={isPending}
          className="border h-10 rounded-lg text-white bg-[#0062FF]"
          type="submit"
        >
          {isSubmiting ? "Loading" : "Submites"}
        </button>

        {isSubmitSuccessful && <p className="text-green-500">Submited</p>}
      </form>
      {/* Login Link if already user have */}
      <br />
      <div className="flex justify-center items-center">
        <div className=" text-gray-500 w-30 border mr-1"></div>
        <p className="text-center mb-5 text-gray-400 pt-4 font-mono">or</p>
        <div className=" text-gray-500 w-30 border ml-1"></div>
      </div>
      <div>
        <p>
          Already have an account ?
          <Link to="/loginpage">
            <span className="text-blue-600 font-bold underline"> Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
