import React,{useState} from 'react'
import Dialog from '../components/Dialog'

import DialogHoc from '../components/DialogHoc'

export default function DialogPage() {
    const [showDialog, setShowDialog] = useState(false)
    return (
        <div className="dialogPage">
            <h1>DialogPage</h1>
            <button onClick={()=>setShowDialog(!showDialog)}>toggle</button>
            {
                showDialog && <DialogHoc />
            }
        </div>
    )
}
