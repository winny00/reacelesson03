import React,{useEffect} from 'react';
import { createPortal } from "react-dom";
export default function DialogHoc() {
    const doc = window.document;
    const node = doc.createElement('div');
    doc.body.appendChild(node)
    useEffect(() => {
        // effect
        console.log('DialogHoc:::useEffect')
        return () => {
            // cleanup
            window.document.body.removeChild(node)
        }
    }, [])    
    return createPortal(
        <div className="dialog">
            <h1>DialogHoc</h1>
        </div>, node,
    )
}
