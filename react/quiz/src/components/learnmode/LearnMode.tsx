import React, { ChangeEvent, FormEvent, useState } from "react";
import "./LearnMode.css";

// validate input any string will do
// show success

// for an empty string show the correct answer and prompt the user to copy the correct answer
// after 1 second of typing input submit the value

type Term = {
    id: number,
    word: string,
    definition: string
}

export default function LearnMode({ terms }: { terms: Term[] }) {
    const [query, setQuery] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Not Correct");
    const [timeout, setClearTimeout] = useState<ReturnType<typeof setTimeout>>();
    const [needsHint, setNeedsHint] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);

        if (needsHint) {
            if (timeout) {
                clearTimeout(timeout);
            }
            const clear = setTimeout(() => {
                validateTerm(e.target.value);
            }, 1000);
            setClearTimeout(clear);
        }
    };

    const validateTerm = (validate: string | null) => {
        const toValidate = validate ? validate : query;
        if (
            terms[0].definition.toLowerCase().trim() ===
            toValidate.toLowerCase().trim()
        ) {
            setSuccess(true);
            setNeedsHint(false);
        } else {
            if (toValidate.trim().length === 0) {
                setErrorMsg(
                    `Please copy answer "${terms[current].definition}" into input field`
                );
                setNeedsHint(true);
            } else {
                setErrorMsg("Incorrect, try again");
                setNeedsHint(false);
            }

            setSuccess(false);
        }
        const next = current + 1 < terms.length - 1 ? current + 1 : 0;
        setQuery("");
        // setErrorMsg()
        setCurrent(next);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        validateTerm(null);
    };

    return (
        <div className="LearnMode">
            <h1 className="LearnMode-prompt">{`${terms[current].word}`}</h1>
            <div className="LearnMode-body">
                {success && <div>Correct</div>}
                {success === false && <div>{errorMsg}</div>}

                <form className="LearnMode-form">
                    <input
                        autoFocus={true}
                        className="LearnMode-input"
                        type="text"
                        value={query}
                        onChange={handleChange}
                    />
                    <button
                        className="LearnMode-submit"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
