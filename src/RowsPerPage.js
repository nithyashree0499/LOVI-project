  import 'material-icons/iconfont/material-icons.css';
  import Box from '@mui/material/Box';
  import InputLabel from '@mui/material/InputLabel';
  import MenuItem from '@mui/material/MenuItem';
  import FormControl from '@mui/material/FormControl';
  import Select from '@mui/material/Select';


export default function RowsPerPage(props){
    
    
return(
<Box sx={{ minWidth:40, minHeight:15 }}>
      <FormControl>
        
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.pageSize}
          onChange={props.onSelectChange}
          label="row"
          sx={{
     
            width: 40,
            height: 30,
          }}
        >
          <MenuItem value={25} >25</MenuItem>
          <MenuItem value={35} >35</MenuItem>
          <MenuItem value={45} >45</MenuItem>
        </Select>
      </FormControl>
    </Box>

    
);

}