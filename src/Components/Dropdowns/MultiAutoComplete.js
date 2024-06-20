import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function MultiAutoComplete({
    value,
    setValue,
    options,
    placeholder,
    heading,
    groupBy,
    multiple
}) {
  return (
    // <Stack spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        groupBy={groupBy ? (option) => option?.category : null}
        multiple={multiple}
        id="tags-standard"
        options={options}
        onChange={(event, obj)=>{
          setValue(obj)
        }}
        getOptionLabel={(option) => option?.label}
        defaultValue={value}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width:"100%",
                '.MuiInputBase-root':{
                    borderBottom:"none !important",
                    padding:"6px 8px !important",
                },
                '.MuiInputBase-root':{
                    border:"1px solid #cccccc !important",
                    borderRadius:"8px",

                },
                '.MuiInput-root::before':{
                    borderBottom:"none !important"
                },
                '.MuiInput-root::after':{
                    borderBottom:"none !important"
                },
                '.MuiInputBase-input::placeholder':{
                  paddingLeft:"5px"
                },
                '.MuiFormLabel-root':{
                  paddingLeft:"5px",
                  color:"#0D0D0D"
                },
            }}
            variant="standard"
            label={heading}
            placeholder={placeholder}
          />
        )}
      />
    // </Stack>
  );
}
