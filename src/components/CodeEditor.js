import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import './CodeEditor.css'; // We'll create this for additional styling

function CodeEditor({ code, onChange }) {
  const [currentCode, setCurrentCode] = useState(code);

  const handleChange = (newCode) => {
    setCurrentCode(newCode);
    onChange(newCode);
  };

  return (
    <div className="code-editor-container">
      <Editor
        value={currentCode}
        onValueChange={handleChange}
        highlight={(code) => highlight(code, languages.jsx)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
        }}
      />
    </div>
  );
}

export default CodeEditor;
