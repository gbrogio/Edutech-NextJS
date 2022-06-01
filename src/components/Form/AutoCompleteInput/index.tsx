import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';

import { makeStyles } from '@mui/styles';

interface AutoCompleteInputProps {
  dataItemsName: string[];
  placeholder: string;
  label: string;
  id: string;
  error: boolean;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: React.SyntheticEvent<Element, Event>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const useStyles = makeStyles({
  label: {
    color: 'var(--color-text) !important',
    '&.Mui-focused': {
      color: 'rgb(var(--color-secondary)) !important',
    },
  },
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

export const AutoCompleteInput = ({
  dataItemsName,
  label,
  placeholder,
  id,
  error,
  onInput,
  onChange,
  onKeyUp,
  onBlur,
}: AutoCompleteInputProps) => {
  const styles = useStyles();
  return (
    <FormControl sx={{ m: 0, minWidth: 260 }}>
      <FormHelperText
        style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }}
      >
        {label}
      </FormHelperText>
      <Autocomplete
        freeSolo
        id={id || 'autoCompleteInput'}
        disableClearable
        options={dataItemsName}
        onInput={onInput}
        onChange={onChange}
        onKeyUpCapture={onKeyUp}
        onBlur={onBlur}
        classes={{
          paper: styles.paper,
          option: styles.option,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={placeholder}
            error={error}
            InputProps={{
              ...params.InputProps,
              type: 'search',
              sx: {
                color: 'var(--color-text)',
              },
            }}
            InputLabelProps={{
              sx: {
                color: 'var(--color-text)',
                '&.Mui-focused': {
                  color: 'rgb(var(--color-secondary)) !important',
                },
              },
            }}
          />
        )}
      />
    </FormControl>
  );
};
