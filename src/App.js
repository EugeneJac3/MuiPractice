import { Button, Typography, styled} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';



function App() {

  const BlueButton = styled(Button)({
    backgroundColor:"skyblue",
        color:"#888",
        margin:5,
        "&:hover":{
          backgroundColor:"lightblue"
        },
        "&:disabled":{
          backgroundColor:"gray",
          color:"white"
        }
  })

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
      >
        SETTINGS
      </Button>
      <Button startIcon={<AddIcon />} variant="contained" color="success">
        ADD NEW POST
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style put it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default App;
