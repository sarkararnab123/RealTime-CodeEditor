import React, { useEffect } from 'react'
import codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/dracula.css';
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/lib/codemirror.css";

const Editor = () => {

    try {
        useEffect(() => {
            async function init() {
                codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
                    mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    lineNumbers: true,
                    autoCloseBrackets: true
                })
            }
            init()
        }, [])
    } catch (error) {
        console.log(error.message)

    }
    return (
        <textarea id='realtimeEditor'></textarea>

    )
}

export default Editor