import { Button, Container, Typography } from "@mui/material";
import Dropdown from "./Dropdown";
import CoordsTextInputs from "./CoordsTextInputs";
import React, { useEffect } from "react";

const BASE_URL = "https://geodesy.geo.admin.ch/reframe";

const REFRAME_SERVICES = [
  { value: "wgs84tolv95", label: "WGS84 to LV95" },
  { value: "lv95towgs84", label: "LV95 to WGS84" },
  { value: "wgs84tolv03", label: "WGS84 to LV03" },
  { value: "lv03towgs84", label: "LV03 to WGS84" },
  { value: "lv95tolv03", label: "LV95 to LV03" },
  { value: "lv03tolv95", label: "LV03 to LV95" },
];

function CoordsConverter() {
  const [service, setService] = React.useState(REFRAME_SERVICES[0].value);
  const [srcCoords, setSrcCoords] = React.useState({
    easting: 2_600_000,
    northing: 1_200_000,
  });
  const [targetCoords, setTargetCoords] = React.useState({
    easting: "",
    northing: "",
  });

  async function fetchData() {
    const url = `${BASE_URL}/${service}?easting=${srcCoords.easting}&northing=${srcCoords.northing}&format=json`;
    console.log(url);
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`Couldn't fetch data at ${url}`);
      }
      const data = await resp.json();
      setTargetCoords({ ...data });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSelectService = event => {
    setService(event.target.value);
  };

  function handleClick() {
    console.log(srcCoords);
    fetchData();
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">REFRAME Clone</Typography>
      <Dropdown
        label="Service"
        value={service}
        options={REFRAME_SERVICES}
        handleChange={handleSelectService}
      />
      <CoordsTextInputs coords={srcCoords} setCoords={setSrcCoords} />
      <Button
        variant="contained"
        size="large"
        fullWidth
        disableElevation // => no shadow
        onClick={handleClick}
        sx={{ mt: 2, mb: 2, bgcolor: "#202020" }}
      >
        Transform
      </Button>
      <CoordsTextInputs coords={targetCoords} setCoords={() => {}} />
    </Container>
  );
}

export default CoordsConverter;
