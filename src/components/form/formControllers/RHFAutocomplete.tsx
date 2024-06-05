import { Autocomplete } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

//Ive been using interfaces for props in other places and typecript is telling me to stay consistent and use type instead, however this lesson uses types I will use them and ignore the error for now
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFAutocomplete<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ params }) => <Autocomplete />}
    />
  );
}
