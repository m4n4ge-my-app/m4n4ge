/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
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
            <DatePicker
              label={label}
              slotProps={{ textField: { size: 'small' } }}
              {...field}
              sx={{ width: '100%' }}
              value={value}
              onChange={(date) => onChange(date)}
            />
          <FormHelperText sx={{ color: 'red' }}>
            {error?.message}
          </FormHelperText>
        </div>
      )}
    />
  );
}
