
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
    const [value, setValue] = useState('');
  return (
    <div style={{ width: '100%', paddingTop: '20px' }}>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ width: '100%', height: '200px' }}
      />
    </div>
  )
}

export default TextEditor