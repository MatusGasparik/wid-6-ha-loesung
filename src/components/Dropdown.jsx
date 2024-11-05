import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Dropdown = ({ label, options, value, handleChange }) => {
  //   const [value, setValue] = React.useState("");

  //   const handleChange = event => {
  //     console.log(event.target.value);
  //     setValue(event.target.value);

  //   };

  return (
    <FormControl sx={{ mt: 6, mb: 2, minWidth: "40%" }} size="medium">
      <InputLabel id="select-dropdown">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="select-dropdown"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map(opt => {
          return (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
