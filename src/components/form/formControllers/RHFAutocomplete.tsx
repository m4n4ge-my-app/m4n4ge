/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Autocomplete, Box, Checkbox, TextField } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { AutocompleteOptions } from '../types/autocompleteOptions';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

//Ive been using interfaces for props in other places and typecript is telling me to stay consistent and use type instead, however this lesson uses types I will use them and ignore the error for now
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props<T extends FieldValues> = {
  name: Path<T>;
  options: AutocompleteOptions[];
  label: string;
};

export function RHFAutocomplete<T extends FieldValues>({
  name,
  options,
  label,
}: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={value?.map((id: string) =>
            options.find((item) => item.id === id)
          )}
          getOptionLabel={(option) =>
            options.find((item) => item.id === option.id)?.label ?? ''
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onChange={(_, newValue) => {
            onChange(newValue.map((item) => item.id));
          }}
          disableCloseOnSelect
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              inputRef={ref}
              error={!!error}
              helperText={error?.message}
              label={label}
            />
          )}
          renderOption={(props, option, { selected }) => (
            <Box component="li" {...props} key={option.id}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={selected}
              />
              {option.label}
            </Box>
          )}
        />
      )}
    />
  );
}
