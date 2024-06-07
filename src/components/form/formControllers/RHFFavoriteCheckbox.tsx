/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Checkbox, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';

type Props<T extends FieldValues> = {
  name: Path<T>;
};

export function RHFFavoriteCheckbox<T extends FieldValues>({ name }: Props<T>) {
  const { control } = useFormContext<T>();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '60px',
          }}
        >
          <Checkbox
            checked={Boolean(value)}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={onBlur}
            inputRef={ref}
            {...label}
            icon={<FavoriteBorder fontSize="small" />}
            checkedIcon={<Favorite fontSize="small" />}
            sx={{
              '&.Mui-checked': {
                color: pink[600],
              },
            }}
          />
          <Typography fontSize={16}>Mark as favorite</Typography>
        </Box>
      )}
    ></Controller>
  );
}
