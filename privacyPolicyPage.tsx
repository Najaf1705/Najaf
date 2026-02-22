"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="flex flex-col justify-center items-center min-h-[100vh] m-8 sm:mx-28 text-gray-700 dark:text-gray-100">
      <h1 className="text-center font-bold text-3xl mt-8 text-black dark:text-gray-50">
        Privacy Policy
      </h1>

      <div className="mt-8 space-y-6 text-lg md:text-xl max-w-4xl">

        <p>
          Effective Date: {new Date().getFullYear()}
        </p>

        <p>
          This Privacy Policy describes how information is collected, used, and
          protected when you visit this website.
        </p>

        <h2 className="font-semibold text-xl mt-6">1. Information Collected</h2>
        <p>
          This website may collect limited personal information such as your
          name, email address, or any details you voluntarily provide through
          contact forms or email communication.
        </p>
        <p>
          Non-personal data such as browser type, device information, and usage
          statistics may also be collected automatically for analytics and
          performance monitoring.
        </p>

        <h2 className="font-semibold text-xl mt-6">2. How Information Is Used</h2>
        <p>
          Information collected may be used to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Respond to inquiries or communication requests</li>
          <li>Improve website functionality and performance</li>
          <li>Maintain security and prevent misuse</li>
        </ul>

        <h2 className="font-semibold text-xl mt-6">3. Cookies & Analytics</h2>
        <p>
          This website may use cookies or similar technologies to enhance user
          experience and gather analytics data. Cookies help understand how
          visitors interact with the website.
        </p>
        <p>
          You can disable cookies through your browser settings if preferred.
        </p>

        <h2 className="font-semibold text-xl mt-6">4. Data Protection</h2>
        <p>
          Reasonable security measures are implemented to protect personal
          information from unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet is
          completely secure.
        </p>

        <h2 className="font-semibold text-xl mt-6">5. Third-Party Services</h2>
        <p>
          This website may use third-party services (such as hosting providers
          or analytics tools). These services may collect information in
          accordance with their own privacy policies.
        </p>

        <h2 className="font-semibold text-xl mt-6">6. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of any personal
          information provided through this website by contacting the website
          owner.
        </p>

        <h2 className="font-semibold text-xl mt-6">7. Updates to This Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Changes will be
          reflected on this page with an updated effective date.
        </p>

        <h2 className="font-semibold text-xl mt-6">8. Contact</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please use
          the contact information provided on this website.
        </p>

      </div>
    </section>
  );
}