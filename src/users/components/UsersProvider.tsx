import { FormProvider, useForm } from 'react-hook-form';
import { Users } from './Users';
import { Schema, defaultValues, schema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';

export function UsersProvider() {
  const methods = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
}
