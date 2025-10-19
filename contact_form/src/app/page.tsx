"use client"

import Image from "next/image";
import ContactUs from "./components/contact_us";
import { useState } from "react";
import MessageSent from "./components/message_sent";

export default function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  return (
    <main className="flex flex-col justify-center items-center pl-4 pr-4 pt-8 pb-8 min-h-screen bg-[var(--green-200)]">
      <MessageSent showMessage={showSuccessMessage} setShowSuccessMessage={setShowSuccessMessage}/>
      <ContactUs setShowSuccessMessage={setShowSuccessMessage}/>
    </main>
  );
}
