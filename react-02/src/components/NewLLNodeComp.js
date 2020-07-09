import React, { useState } from 'react';

function NewLLNodeComp(props) {

    const [msg, setMsg] = useState("");

    function get(id) {
        return document.getElementById(id).value;
    }

    function mySave() {
        const subject = get("idSubject");
        const amount = get("idAmount");

        if (!amount) {
            setMsg('You must enter an amount');
            return;
        }

        props.onSave(subject, amount);

    }

    return (
        <div className="clInnerBox">
            <h1>New Subject Node</h1>
            {msg}
            <div>
                <label>Subject </label>
                <input id="idSubject"></input>
            </div>
            <div>
                <label>Amount </label>
                <input id="idAmount"></input>
            </div>

            <button onClick={mySave} >Save</button>
            <button todo="cancel">Cancel</button>
        </div>
    )
}

export default NewLLNodeComp;