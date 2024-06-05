import { Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';

export function RHFAutocomplete() {
  const { control } = useFormContext<Schema>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ params }) => <Autocomplete />}
    />
  );
}
