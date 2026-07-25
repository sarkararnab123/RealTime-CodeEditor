import React, { useEffect, useRef } from 'react';
import codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/lib/codemirror.css';
import './Editor.css';
import ACTIONS from '../Actions';

const Editor = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);
    const textareaRef = useRef(null);

    useEffect(() => {
        async function init() {
            if (textareaRef.current && !editorRef.current) {
                editorRef.current = codemirror.fromTextArea(textareaRef.current, {
                    mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    lineNumbers: true,
                    autoCloseBrackets: true,
                });

                editorRef.current.on('change', (instance, changes) => {
                    const { origin } = changes;
                    const code = instance.getValue();
                    if (onCodeChange) {
                        onCodeChange(code);
                    }
                    if (origin !== 'setValue') {
                        socketRef.current?.emit(ACTIONS.CODE_CHANGE, {
                            roomId,
                            code,
                        });
                    }
                });
            }
        }
        init();

        return () => {
            if (editorRef.current) {
                editorRef.current.toTextArea();
                editorRef.current = null;
            }
        };
    }, [roomId]);

    useEffect(() => {
        if (socketRef.current) {
            const handleCodeChange = ({ code }) => {
                if (code !== null && editorRef.current) {
                    editorRef.current.setValue(code);
                }
            };

            socketRef.current.on(ACTIONS.CODE_CHANGE, handleCodeChange);

            return () => {
                socketRef.current?.off(ACTIONS.CODE_CHANGE, handleCodeChange);
            };
        }
    });

    return <textarea ref={textareaRef} id="realtimeEditor"></textarea>;
};

export default Editor;