import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function MenuBtn({ item, setToggle, MenuToggle }) {
  let [isAdded, setAdded] = useState(false); //* this is state for pass in single card as a prop

  let loader = () => {
    setTimeout(() => {
      setToggle(!MenuToggle);
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        <b className="flex mt-2  justify-center items-center gap-x-2">
          Rating :{"  "}
          <Rating
            name="half-rating-read"
            defaultValue={item.rating}
            precision={0.5}
            readOnly
            className="shadow-lg"
          />{" "}
          {item.rating}{" "}
        </b>

        <Button onClick={loader} variant="outlined" size="small">
          {MenuToggle ? (
            <p className="bg-green-300 w-full font-bold text-shadow-lg rounded">
              Food Menu
            </p>
          ) : (
            <p className="text-white bg-red-300 w-full ">See Menu</p>
          )}
        </Button>
      </div>
    </div>
  );
}
