import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Schema, schema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function Users() {
  const { register } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <>
      <TextField {...register('name')} label="Name" />
    </>
  );
}
