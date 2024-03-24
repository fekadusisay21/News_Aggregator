import { Button } from "@mui/material";
import BtnSpinner from "../ui/BtnSpinner";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="contained">
        <BtnSpinner />
        hello
      </Button>
    </div>
  );
}

export default Dashboard;
