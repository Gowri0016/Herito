import React from 'react'

export default function Privacy() {
  return (
    <main className="bg-[#f7f8f5] text-gray-700">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Herito Wellness Private Limited is committed to protecting your
            personal information and handling it responsibly, transparently,
            and securely.
          </p>
        </header>

        {/* Company Info */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <p><strong>Company:</strong> Herito Wellness Private Limited</p>
          <p className="mt-1"><strong>Effective Date:</strong> 12 August 2025</p>
          <p className="mt-1"><strong>Jurisdiction:</strong> Republic of India</p>

          <p className="mt-4 text-gray-600">
            This Privacy Policy explains how personal information is collected,
            used, stored, shared, and protected when you interact with our
            products, websites, applications, and services.
          </p>
        </section>

        {/* Sections */}
        <div className="space-y-10">

          {/* 1 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              1. Information We Collect
            </h2>

            <div className="space-y-4 text-gray-600">
              <div>
                <p className="font-medium text-gray-800">A. Information You Provide</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Name, email, phone number</li>
                  <li>Shipping and billing address</li>
                  <li>Date of birth (optional)</li>
                  <li>Feedback, complaints, surveys</li>
                  <li>Payment details (processed by partners, not stored by us)</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-800">B. Information Collected Automatically</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IP address and device details</li>
                  <li>Browser and operating system</li>
                  <li>Usage behavior and analytics</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-800">C. Campaign & Social Sources</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Public profile identifiers</li>
                  <li>Engagement and referral data</li>
                </ul>
              </div>

              <p>
                We do not knowingly collect data from children under 14 years
                without parental supervision.
              </p>
            </div>
          </section>

          {/* 2 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Order processing and delivery</li>
              <li>Customer support and service communication</li>
              <li>Promotions, offers, and loyalty benefits</li>
              <li>Product improvement and analytics</li>
              <li>Fraud prevention and regulatory compliance</li>
            </ul>
            <p className="mt-3">
              Personal data is not used for medical diagnosis or health profiling.
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              3. Legal Basis for Processing
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>User consent</li>
              <li>Performance of contracts and purchases</li>
              <li>Legitimate business interests</li>
              <li>Legal and safety obligations</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              4. Sharing of Information
            </h2>
            <p className="text-gray-600">
              We do not sell or rent personal data. Information is shared only
              with essential service providers such as logistics partners,
              payment gateways, communication tools, analytics platforms, or
              regulatory authorities when required by law.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              5. Cookies & Tracking
            </h2>
            <p className="text-gray-600">
              Cookies help improve website performance, personalization, and
              analytics. Disabling cookies may limit certain features.
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              6. Data Security
            </h2>
            <p className="text-gray-600">
              We use encryption, access controls, cybersecurity monitoring, and
              PCI-DSS-compliant payment systems. Absolute security cannot be
              guaranteed.
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              7. Data Retention
            </h2>
            <p className="text-gray-600">
              Personal data is retained only as long as necessary for business,
              legal, or safety purposes.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              8. Marketing Communication
            </h2>
            <p className="text-gray-600">
              You may opt out of promotional communications at any time through
              unsubscribe options or by contacting us.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              9. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Access or correct personal data</li>
              <li>Restrict marketing communications</li>
              <li>Request account or data deletion</li>
            </ul>
          </section>

          {/* 10 */}
          <section className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              10. Contact Information
            </h2>
            <p><strong>Email:</strong> support@heritowellness.com</p>
            <p><strong>Phone:</strong> +91 94454 54943</p>
            <p>
              <strong>Address:</strong> 115/33, Gobichettipalayam,
              Erode – 638476, Tamil Nadu, India
            </p>
          </section>

        </div>

        {/* Acceptance */}
        <footer className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 text-center">
          <p className="font-medium text-gray-800">
            By interacting with Herito Wellness, you acknowledge that you have
            read and understood this Privacy Policy.
          </p>
        </footer>

      </div>
    </main>
  )
}
