import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import SelectMUI, { SelectChangeEvent } from '@mui/material/Select';

import { makeStyles } from '@mui/styles';

interface SelectProps {
  label: string;
  options: { label: string; value: string }[];
  onChange: (event: SelectChangeEvent) => void;
  value: string;
}

const useStyles = makeStyles({
  paper: {
    backgroundColor: 'var(--color-card) !important',
    color: 'var(--color-text) !important',
  },
  option: {
    '&:hover': {
      backgroundColor: 'var(--color-gray-500) !important',
    },
  },
});

export const Select = ({ label, options, onChange, value }: SelectProps) => {
  const styles = useStyles();

  return (
    <FormControl sx={{ m: 0, minWidth: 260 }}>
      <FormHelperText
        style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}
      >
        {label}
      </FormHelperText>
      <SelectMUI
        value={value}
        onChange={onChange}
        inputProps={{ 'aria-label': label }}
        MenuProps={{ classes: { paper: styles.paper } }}
        sx={{
          color: 'var(--color-text)',
          '.MuiSvgIcon-root': { color: 'inherit' },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            classes={{ root: styles.option }}
          >
            {option.label}
          </MenuItem>
        ))}
      </SelectMUI>
    </FormControl>
  );
};
