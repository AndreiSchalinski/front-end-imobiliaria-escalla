import FilterListIcon from '@mui/icons-material/FilterList';

import Button from "@mui/material/Button";

export default function Buttons() {
  return (
    <Button variant="outlined" sx={{borderRadius:8, color:'black'}} endIcon={<FilterListIcon />}>
      Mais filtros
    </Button>
  );
}
