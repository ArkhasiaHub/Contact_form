"use client"

import SubmitFormButton from "./submit_form_button";
import ContactInputText from "./contact_input";
import ListContactCheckBox from "./list_contact_checkbox";
import ContactByTeamCheckbox from "./contact_team_checkbox";
import ContactMessage from "./contact_message";
import { useState } from "react";
import { subscribe } from "diagnostics_channel";

type FormData = {
    first_name: string;
    last_name: string;
    email: string;
    query_general: boolean;
    query_support: boolean;
    message: string;
    contactByTeam: boolean;
}

type ContactUsProps = {
    setShowSuccessMessage: (v: boolean) => void;
}

export default function ContactUs({setShowSuccessMessage}: ContactUsProps) {
    const [formData, setFormData] = useState<FormData>({
        first_name: "",
        last_name: "",
        email: "",
        query_general: false,
        query_support: false,
        message: "",
        contactByTeam: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target;
        const name = target.name;
        const value = target instanceof HTMLInputElement && target.type === "checkbox" ?
        target.checked : target.value;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section 
        className="flex flex-col gap-10 justify-start bg-white rounded-2xl p-6 lg:min-w-2xl"
        role="region"
        >
            <h1 className="text-3xl text-[var(--grey-900)] m-0">Contact Us</h1>

            <form 
            className="flex flex-col gap-6"
            onSubmit={(e) => {
                e.preventDefault();
                setShowSuccessMessage(true);
            }}
            aria-label="Form to contact the team"
            >
                <fieldset className="flex flex-col gap-3 lg:flex-row lg:w-full">
                    <ContactInputText label="First name" name="first_name" type="text" 
                    value={formData.first_name} handleChange={handleChange} required={true}/>
                    
                    <ContactInputText label="Last name" name="last_name" type="text" 
                    value={formData.last_name} handleChange={handleChange} required={true}/>
                </fieldset>
                
                <ContactInputText label="Email Address" name="email" type="email" 
                value={formData.email} handleChange={handleChange} required={true}/>

                <ListContactCheckBox query_general={formData.query_general} query_support={formData.query_support}
                setCheckedBox={(name) => {
                    setFormData(prev => ({
                        ...prev,
                       query_general: name === "query_general",
                       query_support: name === "query_support",
                    }));
                }}/>
                
                <ContactMessage value={formData.message} required={true} handleChange={handleChange}/>
                
                <ContactByTeamCheckbox value={formData.contactByTeam} required={true} handleChange={handleChange}/>

                <SubmitFormButton/>
            </form>
        </section>
    );
}