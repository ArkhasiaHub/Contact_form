import React from "react";

type ContactMessageProps = {
    value: string;
    required: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

export default function ContactMessage({value, required, handleChange}: ContactMessageProps) {
    return (
        <fieldset className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[var(--grey-900)] text-base font-medium">Message</label>
            <textarea
            id="message"
            name="message"
            value={value}
            required={required}
            className="pl-6 pr-6 pt-3 pb-3 rounded-lg border border-[var(--grey-500)] focus:outline-none focus:border-[var(--green-600)] 
            text-left w-full min-h-28 text-[var(--grey-900)] text-base"
            onChange={handleChange}
            />
        </fieldset>
    );
}