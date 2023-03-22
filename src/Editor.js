import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./Editor.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import { secret } from "./temp";

const code = `//code goes here
`;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");

function SimpEditor() {
  const [codeValue, setCodeValue] = useState(code);

  const clickHandler = ()=>{
    let text = "";
    

    const obj =   {language : "cpp",code : codeValue, input : "", save : false}
    console.log(JSON.stringify(JSON.stringify(obj)));

    secret(JSON.stringify(obj))
    
  }

  return (
    <>
    <Editor
      value={codeValue}
      onValueChange={code => setCodeValue(code)}
      highlight={code => hightlightWithLineNumbers(code, languages.js)}
      padding={10}
    //   autocomplete = {true}
      textareaId="codeArea"
      className="editor"
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 17,
        
        outline: 0
      }}
    />

    <button style = {{padding : "10px 25px", outline : "none", border : "none", background : "rgb(0, 0, 0, 0.4) ", color : "white", cursor : "pointer", marginTop : "10px" }} onClick={clickHandler}>Run</button>
    </>
  );
}

export default SimpEditor;
