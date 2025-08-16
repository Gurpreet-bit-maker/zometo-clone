import img from "../../public/searchImg/searchicon.png";
import Carts from "./Carts";

export default function Navbar() {
  return (
    <div className="flex relative">
      <div className=" mt-5 mx-2 relative rounded shadow-lg ">
        <img src={img} alt="" className="inline w-9 p-1 absolute" />
        <input
          type="text"
          placeholder="search Restaurant . . ."
          className=" ml-10 h-10 w-80 pl-5"
        />
      </div>
      <div className="border rounded-[13px] bg-green-200 h-6 text-center absolute right-3 top-7 w-8 ">
        <Carts />
      </div>
    </div>
  );
}
