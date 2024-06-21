/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Options } from '../types/Options';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

interface Props<T extends FieldValues> {
  name: Path<T>;
  label: string;
  options?: Options[];
}

export function RHFSelect<T extends FieldValues>({
  name,
  label,
  options,
  ...props
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl fullWidth>
          <InputLabel> {label}</InputLabel>
          <Select
            {...props}
            value={
              value === undefined || value === null || options?.length === 0
                ? ''
                : value
            }
            label="Platform"
            onChange={(_, newValue) => {
              if (Array.isArray(newValue)) {
                onChange(newValue.map((item) => item.id));
              } else if (
                newValue &&
                typeof newValue === 'object' &&
                'props' in newValue
              ) {
                // appearently newValue is an object with a props property, so its this block that gets executed
                onChange((newValue as React.ReactElement).props.value);
              } else {
                console.warn('Unexpected value:', newValue);
              }
            }}
            size="small"
          >
            {/* added this below line from this suggestion: https://stackoverflow.com/questions/76159113/material-ui-you-have-provided-an-out-of-range-value-for-the-select-component-d */}
            <MenuItem value="">{''}</MenuItem>
            {options?.map((option) => (
              <MenuItem value={option.id} key={option.id}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText sx={{ color: 'red' }}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
