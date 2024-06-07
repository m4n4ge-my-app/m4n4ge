/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { FormHelperText } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function RHFDatePicker<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
        // formState: { errors },
      }) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label={label}
              slotProps={{ textField: { size: 'small' } }}
              {...field}
              sx={{ width: '100%' }}
              value={value}
              onChange={(date) => onChange(date)}
            />
          </LocalizationProvider>
          <FormHelperText sx={{ color: 'red' }}>
            {error?.message}
          </FormHelperText>
        </div>
      )}
    />
  );
}
