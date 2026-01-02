import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NavLink } from "react-router-dom";
export default function FilterComp() {
  return (
    <div>
      <FormGroup>
        <NavLink to="/UnderTwo_k"
          className={({ isActive }) =>
            isActive ? `bg-blue-300` : `bg-green-300`
          }
        >
          <FormControlLabel required control={<Checkbox />} label="Rating" />
        </NavLink>
        <FormControlLabel required control={<Checkbox />} label="Under 2k" />
      </FormGroup>
    </div>
  );
}
