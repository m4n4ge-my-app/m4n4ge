/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { FormHelperText, Typography } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFDateCalendar<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <>
          <Typography
            fontSize={16}
            sx={{ display: 'flex', flexDirection: 'start' }}
          >
            Job Application Date
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateCalendar
              {...field}
              sx={{ width: '100%' }}
              value={value}
              onChange={(date) => onChange(date)}
            />
          </LocalizationProvider>
          <FormHelperText sx={{ color: 'red' }}>
            {error?.message}
          </FormHelperText>
        </>
      )}
    />
  );
}
