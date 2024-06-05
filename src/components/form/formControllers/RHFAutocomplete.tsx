import { Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';

type Props = {
  name: string;
};

export function RHFAutocomplete({ name }: Props) {
  const { control } = useFormContext<Schema>();
  return (
    <Controller
      control={control}
      name={name}
      render={({ params }) => <Autocomplete />}
    />
  );
}
