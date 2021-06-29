import React, { useState } from "react";

import LearnModeUI from './LearnModeUI';

type Term = {
    id: number,
    word: string,
    definition: string
}


const LearnModeState = ({ terms }: { terms: Term[] }) => {
    const [query, setQuery] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Not Correct");
    const [timeout, setClearTimeout] = useState<ReturnType<typeof setTimeout>>();
    const [needsHint, setNeedsHint] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleChange = (value: string) => {
        setQuery(value);

        if (needsHint) {
            if (timeout) {
                clearTimeout(timeout);
            }
            const clear = setTimeout(() => {
                validateTerm(value);
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

    return (
        <>
            <LearnModeUI />
        </>
    )
}



export default LearnModeState;