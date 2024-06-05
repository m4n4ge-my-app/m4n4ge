import { useState } from 'react';

export function Users() {
  const [input, setInput] = useState('' as string);

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onBlur={}
      ref
      disabled
      required
      maxLength={}
    />
  );
}
