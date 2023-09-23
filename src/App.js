import "./App.css";
import { marked } from "marked";
import { useState } from "react";

function App() {
	const [input, setInput] = useState(
		'# Welcome to my React Markdown Previewer!\n\n## This is an H2 Heading\n\n[Link to github](https://github.com/alhamdu-e/s)\n\nThis is an example of inline `code`.\n\n```\nfunction greet() {\n    return "Hello, World!";\n}\n```\n\n- This is a list item\n\n> This is a blockquote\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n**This text is bold**'
	);
	const txt = marked.parse(input, { breaks: true });
	const handleChange = (event) => {
		setInput(event.target.value);
	};
	return (
		<div className="conta">
			<div className="contain">
				<div id="editor">
					<h2>Editor</h2>
					<textarea value={input} onChange={handleChange}></textarea>
				</div>
				<div>
					<h2>Previewer</h2>
					<div
						className=""
						dangerouslySetInnerHTML={{ __html: txt }}
						id="previewer"></div>
				</div>
			</div>
		</div>
	);
}

export default App;
