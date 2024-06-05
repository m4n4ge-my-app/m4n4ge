import { useForm } from 'react-hook-form';

export function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<{ email: string }>({ mode: 'all' });

  const onsubmit = () => {
    console.log('submitted');
  };

  return (
    <form onSubmit={onsubmit}>
      <input
        {...register('email', {
          required: { value: true, message: 'Email is required' },
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address',
          },
          maxLength: { value: 10, message: 'Email is too long' },
        })}
        placeholder="email"
      />
      <p>{errors.email?.message}</p>
    </form>
  );
}
