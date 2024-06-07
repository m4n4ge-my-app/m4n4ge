/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Options } from '../types/Options';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
  options?: Options[];
  label: string;
} & Pick<RadioGroupProps, 'sx'>;

export function RHFRadioGroup<T extends FieldValues>({
  name,
  options,
  label,
  ...props
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          {...field}
          error={!!error}
          sx={{ display: 'flex', flexDirection: 'start' }}
        >
          <FormLabel sx={{ display: 'flex', flexDirection: 'start' }}>
            {label}
          </FormLabel>
          <RadioGroup {...props}>
            {options?.map((option) => (
              <FormControlLabel
                value={option.id}
                control={
                  <Radio checked={field.value === option.id} size="small" />
                }
                label={option.label}
                key={option.id}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    ></Controller>
  );
}
