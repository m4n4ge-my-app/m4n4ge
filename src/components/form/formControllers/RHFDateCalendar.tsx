/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormHelperText, Typography } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers';

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
          <DateCalendar
            {...field}
            sx={{ width: '100%' }}
            value={value}
            onChange={(date) => onChange(date)}
          />
          <FormHelperText sx={{ color: 'red' }}>
            {error?.message}
          </FormHelperText>
        </>
      )}
    />
  );
}
