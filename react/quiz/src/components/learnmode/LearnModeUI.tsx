import React, { ChangeEvent, FormEvent, useState } from 'react';

type LearnModeUIProps = {
    handleSubmit: (query: string) => void;
    prompt: string;
    errorMsg: string;
    success: boolean;
}

export default function LearnModeUI({ success, errorMsg, prompt, handleSubmit }: LearnModeUIProps) {

    const [query, setQuery] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        handleSubmit(query);
    }

    return (
        <div className="LearnMode">
            <h1 className="LearnMode-prompt">{`${prompt}`}</h1>
            <div className="LearnMode-body">
                {success && <div>Correct</div>}
                {success === false && <div>{errorMsg}</div>}

                <form className="LearnMode-form">
                    <input
                        autoFocus={true}
                        className="LearnMode-input"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button
                        className="LearnMode-submit"
                        type="submit"
                        onClick={handleFormSubmit}
                    >
                        {`Submit`}
                    </button>
                </form>
            </div>
        </div>
    )
}