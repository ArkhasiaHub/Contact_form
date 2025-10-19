type ContactInputProps = {
    label: string;
    name: string;
    value: string;
    type: string;
    required: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
};

export default function ContactInput({label, name, value, type, required, handleChange}: ContactInputProps) {
    return (
        <fieldset className="flex flex-col gap-2 lg:w-full">
            <label htmlFor={name} className="text-[var(--grey-900)] text-base">
                {label}
            </label>
            <input 
            className="pl-6 pr-6 pt-3 pb-3 bg-transparent 
            border border-[var(--grey-500)] focus:outline-none focus:border-[var(--green-600)]
            text-[var(--grey-900)] rounded-lg" 
            type={type}
            id={name} 
            name={name} 
            required={required}
            value={value}
            onChange={handleChange}
            /> 
        </fieldset>
    );
}