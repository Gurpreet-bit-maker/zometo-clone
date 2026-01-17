import CartContext from "../../context/CartsContext/CartCreateContext";
import userAuthentication from "../../context/authentication/authenticationCreate";
import { useContext } from "react";
export default function DiningBooked() {
  let { DiningRestaurents, setD_Res } = useContext(CartContext);
  let { loginData, signUpData } = useContext(userAuthentication);

  return (
    <div className="mb-20 h-auto">
      <h1 className="font-bold text-center text-2xl">
        Your all Dining Bookings
      </h1>
      {DiningRestaurents.map((m) => {
        {
          /* <p>{loginData[0].username}</p> */
        }
        return m.added ? (
          <div
            key={m.id}
            className=" bg-gray-100 rounded-sm shadow-2xl mt-1 text-gray-700 py-7 px-5 "
          >
            <div className="flex shadow-sm h-30 py-1">
              <img className="w-35" src="/RestroImg/restaurant.png" alt="" />
              <div>
                <h2 className="text-black text-2xl ml-2">{m.name}</h2>
                <div className="bg-green-600 px-1 ml-2 w-10 rounded-lg text-white">
                  {m.rating}
                </div>
              </div>
            </div>

            {/* your slot */}
            <div className="flex justify-between mt-5 ">
              <div className="flex flex-col gap-y-3 text-[18px]">
                <p>Name</p>
                <p>Email</p>
                <p>Phone</p>
                <p>Booking Date</p>
                <p>Timing</p>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] font-bold">
                <p>{loginData[0].username}</p>
                <p>{signUpData[0].email}</p>
                <p>{signUpData[0].phone}</p>
                <p>
                  {m.bookingDate} | {m.bookingTime}
                </p>
                 <p>{m.comeTime}</p>
                
              </div>
            </div>
            {/* guest and floor  */}
            <div className="flex justify-between mt-10">
              <div className="flex flex-col gap-y-3 text-[18px]">
                <p>No Of Guest</p>
                <p>Floor</p>
                <p>Occation</p>
                <p>Location</p>
              </div>
              <div className="flex flex-col gap-y-4 text-[16px] font-bold">
                <p>
                  {m.cover >= 5 ? (
                    <>
                      {m.cover} <span>✅</span>
                    </>
                  ) : (
                    m.cover
                  )}
                </p>
                <p>not floor</p>
               <p>None</p>
                <p>{m.location}</p>
              </div>
            </div>

            {m.cover >= 5 ? (
              <>
                <p className="bg-red-500 text-white px-2 text-shadow-lg py-1 rounded-2xl text-start inline text-lg ">
                  congratulations {m.ds}
                </p>
              </>
            ) : null}
            {/* delete booking btn */}
            {/* <div>
              <button className="border bg-black text-white px-2 mt-1">
                {" "}
                Delete Booking
              </button>
            </div> */}
          </div>
        ) : null;
      })}
    </div>
  );
}
