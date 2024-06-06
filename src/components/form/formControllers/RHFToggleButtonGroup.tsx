/* eslint-disable @typescript-eslint/consistent-type-definitions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Options } from '../types/Options';
import { FormHelperText, ToggleButton, ToggleButtonGroup } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Options[];
};

export function RHFToggleButtonGroup<T extends FieldValues>({
  name,
  options,
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, ...restField },
        fieldState: { error },
      }) => (
        <>
          <ToggleButtonGroup
            onChange={(_, newValue) => {
              if (newValue.length) {
                onChange(newValue);
              }
            }}
            value={value.length ? value : [options?.[0].id]}
            {...restField}
            fullWidth
          >
            {options?.map((option) => (
              <ToggleButton value={option.id} key={option.id} size="small">
                {option.label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <FormHelperText>{error?.message}</FormHelperText>
        </>
      )}
    ></Controller>
  );
}
