import { useForm } from 'react-hook-form';

export function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<{ email: string }>({ mode: 'all' });
  return (
    <>
      <input
        {...register('email', {
          required: { value: true, message: 'Email is required' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
          },
          maxLength: { value: 100, message: 'Email is too long' },
        })}
        placeholder="email"
      />
      <p>{errors.email?.message}</p>
    </>
  );
}
