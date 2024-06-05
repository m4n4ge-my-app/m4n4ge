import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AutocompleteOptions } from '../../components/form/types/autocompleteOptions';

export function useStates() {
  return useQuery({
    queryKey: ['states'],
    queryFn: () =>
      axios
        .get<AutocompleteOptions[]>('http://localhost:8080/states')
        .then((res) => res.data),
  });
}
