type ContactCheckboxProps = {
    name: string;
    label_name: string;
    value: boolean;
    triggerListCheckbox: () => void;
};

export default function ContactCheckbox({name, label_name, value, triggerListCheckbox}: ContactCheckboxProps) {
    return (
        <fieldset className={`pl-6 pr-6 pt-3 pb-3 flex flex-row items-center gap-3 rounded-lg lg:w-full
        border border-[var(--grey-500)] focus:outline-0 ${value === true && "border-[var(--grey-500)] bg-[var(--green-200)]"}`}>
            <input
            className={`appearance-none w-4 h-4 border border-[var(--grey-900)]
            rounded-full ${(value === true && "bg-[url(/images/icon-radio-selected.svg)] bg-contain border-0")}`}
            name={name}
            checked={value}
            aria-checked={value}
            type="checkbox"
            onChange={triggerListCheckbox}
            />
            <span className="text-base text-[var(--grey-900)]">{label_name}</span>
        </fieldset>
    );
}
