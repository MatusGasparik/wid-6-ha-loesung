import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

function CoordsTextInputs({ coords, setCoords }) {
  //   const [coords, setCoords] = React.useState({
  //     easting: 2_600_000,
  //     northing: 1_200_000,
  //   });

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid size={6}>
        <TextField
          //   id="outlined-number"
          fullWidth
          label="easting"
          type="number"
          value={coords.easting}
          onChange={e => setCoords({ ...coords, easting: e.target.value })}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          //   id="outlined-number"
          fullWidth
          label="northing"
          type="number"
          value={coords.northing}
          onChange={e => setCoords({ ...coords, northing: e.target.value })}
        />
      </Grid>
    </Grid>
  );
}
export default CoordsTextInputs;
