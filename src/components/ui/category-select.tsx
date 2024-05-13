import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useProductsStore from '../../store/products';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const { getData } = useProductsStore()
  const [params] = React.useState({
    page: 1,
    limit: 10,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const categoryName = [
    "tcfvygubhinjomk",
    "tygubhijomk",
    "tygubhijomsdfsdk",
  ]
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
          {categoryName.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
      </FormControl>
    </Box>
  );
}
