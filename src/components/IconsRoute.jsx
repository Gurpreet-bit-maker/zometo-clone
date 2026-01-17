import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function IconsRoute() {
  return (
      <div className="fixed bottom-12 left-45 bg-white rounded-lg md:bg-red-500 md:left-90 ">
        <Link to="/">
          <Stack>
            <HomeIcon color="dark" sx={{ fontSize: "60px" }} />
          </Stack>
        </Link>
      </div>
  );
}
