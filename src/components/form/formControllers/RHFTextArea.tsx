/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { TextareaAutosize } from '@mui/material';

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFTextArea<T extends FieldValues>({
  name,
  ...props
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextareaAutosize
          {...field}
          {...props}
          color="gray"
          minRows={20}
          placeholder="Note: "
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '20px',
            borderColor: 'divider', //TODO: Setting the border color to match the file upload border below, but its not working, fix it
            borderWidth: 1,
            borderStyle: 'solid',
            outline: 'none',
          }}
        />
      )}
    />
  );
}
