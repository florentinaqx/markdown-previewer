import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `# Heading 1
## Sub-heading
[Link](https://www.example.com)
Inline code: \`<div></div>\`
\`\`\`
// Code block
function hello() {
  console.log("Hello, world!");
}
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`;

marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} />
    </div>
  );
}

export default App;
