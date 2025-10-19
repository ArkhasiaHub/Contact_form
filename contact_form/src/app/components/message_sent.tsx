"use client"

import { useEffect } from "react";

type MessageSentProps = {
    showMessage: boolean;
    setShowSuccessMessage: (v: boolean) => void;
};

export default function MessageSent({showMessage, setShowSuccessMessage}: MessageSentProps) {
    useEffect(() => {
        if (!showMessage) return ;

        const timeout = setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
        
        return () => clearTimeout(timeout);
    }, [showMessage, setShowSuccessMessage]);
    
    return (
        <section 
        className={`flex flex-col bg-[var(--grey-900)] rounded-xl gap-2 p-6 w-10/12 max-w-md
            fixed left-1/2 top-4 -translate-x-1/2 pointer-events-none transition-all duration-500 
            ${showMessage ? "opacity-100 -translate-y-0" : "-translate-y-full opacity-0"}`}
        role="alert"
        aria-labelledby="message-sent"
        aria-describedby="message-description"
        >
            <fieldset className="flex flex-row gap-2">
                <img src="/images/icon-success-check.svg" alt=""/>
                <span id="message-sent">Message Sent!</span>
            </fieldset>
            <p id="message-description">Thanks for completing the form. We'll be in touch soon!</p>
        </section>
    );
}