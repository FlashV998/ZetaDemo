import { TextField } from '@mui/material'
import React from 'react'

export default function SearchBar({
    heading,
    placeholder,
    value,
    setValue
}) {
  return (
    <TextField
    onChange={(e) => setValue(e.target.value)}
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
        }
        
    }}
    variant="standard"
    label={heading}
    value={value}
    placeholder={placeholder}
  />
  )
}
