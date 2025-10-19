export default function SubmitFormButton() {
    return (
        <button
        className="bg-[var(--green-600)] pl-10 pr-10 pt-4 pb-4 rounded-lg font-bold text-lg
        active:bg-[var(--green-200)] active:text-[var(--grey-900)] focus:bg-[var(--green-200)] focus:text-[var(--grey-900)]"
        type="submit"
        >
            Submit
        </button>
    );
}
