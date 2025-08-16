import { useParams } from "react-router-dom";
import restaurants from "../data/Data";
import img from "../../public/iitme.jpg"
export default function Deta() {
  let { id } = useParams();
  console.log(id);
  let userData = restaurants.find((item) => item.id === parseInt(id));
console.log(userData);


  if (!userData) {
    return <h2>restrontent not find</h2>;
  }


  return (
    <div className="border-2  border-red-300 p-1 w-1/3">
      <h2>{userData.name}</h2>
      <h2>{userData.discount}</h2>
      <img src={img} alt="img" />
    </div>
  );
}
