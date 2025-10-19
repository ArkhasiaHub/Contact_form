import React, { useState } from "react";
import ContactCheckbox from "./contact_checkbox";

type ListContactCheckBoxProps = {
    query_general: boolean;
    query_support: boolean;
    setCheckedBox: (elementNameToChecked: string) => void;
};

export default function ListContactCheckBox({query_general, query_support, setCheckedBox}: ListContactCheckBoxProps) {
    return (
        <fieldset className="flex flex-col gap-2 w-full" aria-labelledby="query-type-label">
            <legend className="text-[var(--grey-900)] text-base font-medium mb-2">
                Query Type
            </legend>   
            <ul id="list-checkbox" className="flex flex-col gap-4 lg:flex-row lg:w-full">
                <li className="lg:w-full"><ContactCheckbox name="query_general" label_name="General Enquiry" value={query_general}
                triggerListCheckbox={() => {setCheckedBox("query_general")}}/></li>

                <li className="lg:w-full"><ContactCheckbox name="query_support" label_name="Support Request" value={query_support}
                triggerListCheckbox={() => {setCheckedBox("query_support")}}
                /></li>
            </ul>
        </fieldset>
    );
}