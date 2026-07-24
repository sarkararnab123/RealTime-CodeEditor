import React, { useEffect, useRef } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import './Editor.css';

const Editor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        async function init() {
            const textareaEl = document.getElementById('realtimeEditor');
            if (textareaEl && !editorRef.current) {
                try {
                    editorRef.current = Codemirror.fromTextArea(textareaEl, {
                        mode: { name: 'javascript', json: true },
                        theme: 'dracula',
                        autoCloseTags: true,
                        autoCloseBrackets: true,
                        lineNumbers: true,
                    });
                } catch (error) {
                    console.error("CodeMirror initialization error:", error);
                }
            }
        }
        init();
    }, []);

    return (
        <div className="editor-container">
            <textarea id="realtimeEditor"></textarea>
        </div>
    );
};

export default Editor;
