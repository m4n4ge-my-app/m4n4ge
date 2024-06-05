import { useForm } from 'react-hook-form';

export function Users() {
  //this is react-hook-form way of handling form elements, for example in this email input, once input is registered as email, it will have all the properties like ref, onChange, onBlur, and name.
  const { register } = useForm<{ email: string }>();
  return <input {...register('email')} />;
}
