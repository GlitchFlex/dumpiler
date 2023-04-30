import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Output.module.css';
import "./Editor.css";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: 'white',
    height : 400,
    bgcolor: 'rgba(0,0,0)',
    // backdropFilter : "opacity(0.1)",
    border: '2px solid #000',
    // boxShadow: 24,
    // p: 4,
};

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'></span>${line}`)
    .join("\n");


function Output({ outputModalIsOpen, setOutputModalIsOpen, output }) {



    return (
        <Modal
            open={outputModalIsOpen}
            // style = {{height : "400px" }}
            onClose={() => setOutputModalIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {output?.status === "SUCCESS" ? 
                 <Editor
                 value={output.output}
                 onValueChange={code =>{}}
                 highlight={code => hightlightWithLineNumbers(code, languages.js)}
                //  padding={10}
               //   autocomplete = {true}
                 textareaId="codeArea"
                 className="editor"
                 style={{
                   fontFamily: '"Fira code", "Fira Mono", monospace',
                   fontSize: 17,
                   
                   outline: 0
                 }}
               />

                  
                : 
                <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                // onClick={handleClose}
                >
                <CircularProgress color="inherit" />
              </Backdrop>
              }


                
                
            </Box>
        </Modal>
    );
}

export default Output;
