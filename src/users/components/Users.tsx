import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Schema } from '../types/schema';

export function Users() {
  const { register } = useForm<Schema>({ mode: 'all' });

  return (
    <>
      <TextField {...register('name')} label="Name" />
    </>
  );
}
