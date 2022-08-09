import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <>
    <Navbar />
    <Stack direction="row" justifyContent="space-between">
      <LeftBar />
      <Feed />
      <Rightbar />
    </Stack>
     </>
  );
}

export default App;
