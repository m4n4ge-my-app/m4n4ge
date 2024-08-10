import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  value?: string;
} & Pick<TextFieldProps, 'label' | 'sx' | 'size' | 'fullWidth' | 'type'>;

export function RHFTextField<T extends FieldValues>({
  name,
  value,
  ...props
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          value={value ?? field.value}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
