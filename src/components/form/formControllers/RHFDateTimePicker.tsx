/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
};

export function RHFDateTimePicker<T extends FieldValues>({
  name,
  label,
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <DateTimePicker label={label} {...field} sx={{ width: '100%' }} />
      )}
    />
  );
}
