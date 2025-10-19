type ContactByTeamCheckboxProps = {
    value: boolean;
    required: boolean;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement>) => void;
};

export default function ContactByTeamCheckbox({value, required, handleChange}: ContactByTeamCheckboxProps) {
    return (
        <fieldset className="flex flex-row items-center gap-3">
            <input
            className="appearance-none w-4 h-4 border border-[var(--grey-500)] relative checked:bg-[url(/images/icon-checkbox-check.svg)] checked:bg-contain checked:border-0"
            name="contactByTeam"
            type="checkbox"
            checked={value}
            required={required}
            onChange={handleChange}
            />
            <span className="text-base text-[var(--grey-900)]">I consent being contacted by the team</span>
        </fieldset>
    );
}
