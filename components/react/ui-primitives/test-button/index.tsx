import React, { useState } from "react";
import "./test-button.css";

function TestButton({ label }: { label: string }): JSX.Element {
    const [isClicked, setIsClicked] = useState(false);

    const onHandleClick = (): void => setIsClicked(true);

    return (
        <button
            className="btn"
            type="button"
            style={{ maxWidth: 600, marginTop: 25 }}
            disabled={isClicked}
            onClick={onHandleClick}
        >
            {label}
        </button>
    );
}

export default TestButton;
