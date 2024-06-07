/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { DateRangePicker } from '@mui/x-date-pickers-pro';

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFDateRangePicker<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, ...restField } }) => (
        <DateRangePicker
          {...restField}
          value={Array.isArray(value) ? value : [null, null]}
        />
      )}
    />
  );
}
