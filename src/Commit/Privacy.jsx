import React from 'react'

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">PRIVACY POLICY</h1>

      <section className="mb-6">
        <p><strong>Company:</strong> Herito Wellness Private Limited</p>
        <p><strong>Effective Date:</strong> 12/08/2025</p>
        <p><strong>Jurisdiction:</strong> Republic of India</p>
        <p className="mt-3">Herito Wellness is committed to protecting your personal information and using it responsibly. This Privacy Policy explains how we collect, use, store, disclose, and secure personal information when customers, partners, or visitors interact with our functional beverages, foods, websites, applications, and services.</p>
      </section>

      {/* 1. Information We Collect */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>

        <h3 className="font-semibold mt-3">A. Information You Provide Directly</h3>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone / WhatsApp number</li>
          <li>Date of birth (optional)</li>
          <li>Shipping / Billing address</li>
          <li>Payment information (handled by payment partners, not stored by us)</li>
          <li>Product feedback, complaints, survey responses</li>
        </ul>

        <h3 className="font-semibold mt-4">B. Information Collected Automatically</h3>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>IP address</li>
          <li>Browser and device details</li>
          <li>Operating system</li>
          <li>Approximate location (optional via permissions)</li>
          <li>Usage data: clicks, time spent, browsing patterns</li>
          <li>Cookies and tracking information</li>
        </ul>

        <h3 className="font-semibold mt-4">C. Social Media / Campaign Sources</h3>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Public profile name</li>
          <li>Engagement details</li>
          <li>Campaign or referral participation</li>
        </ul>

        <p className="mt-3">We do not intentionally collect information from children under 14 years without guardian supervision.</p>
      </section>

      {/* 2. How We Use Your Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Process and deliver orders</li>
          <li>Customer support and complaint resolution</li>
          <li>Send updates, promotions, and loyalty rewards</li>
          <li>Analyze user behavior to improve products</li>
          <li>Validate identity and prevent fraud</li>
          <li>Maintain safety and regulatory compliance</li>
          <li>Conduct optional anonymized research</li>
        </ul>
        <p className="mt-2">Personal information is not used for medical diagnosis or profiling of health conditions.</p>
      </section>

      {/* 3. Legal Basis */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Legal Basis for Processing</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Customer consent</li>
          <li>Performance of a purchase/contract</li>
          <li>Legitimate business interests</li>
          <li>Safety and regulatory obligations</li>
          <li>Fraud prevention and security</li>
        </ul>
      </section>

      {/* 4. Sharing of Information */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
        <p>We do not sell or rent personal data.</p>
        <p className="mt-2">Information may be shared only with essential service partners:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Courier and delivery companies</li>
          <li>Payment gateways</li>
          <li>CRM and customer support tools</li>
          <li>SMS, email, WhatsApp communication services</li>
          <li>Analytics and hosting providers</li>
          <li>Regulatory authorities (only when legally required)</li>
        </ul>
        <p className="mt-2">All partners must use the data only for Herito Wellness services.</p>
      </section>

      {/* 5. Cookies */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h2>
        <p>Cookies help us:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Improve site performance and navigation</li>
          <li>Personalize shopping and recommendations</li>
          <li>Measure campaign and website analytics</li>
        </ul>
        <p className="mt-2">Users may disable cookies, but some features may not function properly.</p>
      </section>

      {/* 6. Security */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Information Security</h2>
        <p>We safeguard personal data through:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Encrypted data storage</li>
          <li>Role-based access control</li>
          <li>Cybersecurity monitoring</li>
          <li>PCI-DSS-compliant payment processing</li>
        </ul>
        <p className="mt-2">No system can guarantee 100% security. The Company is not liable for breaches caused by user negligence, device compromise, or unrelated suspicious links.</p>
      </section>

      {/* 7. Data Retention */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
        <p>Personal information is retained only for:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Order fulfilment and support</li>
          <li>Legal or accounting requirements</li>
          <li>Safety and fraud prevention</li>
          <li>Anonymous analytics after purpose expiry</li>
        </ul>
        <p className="mt-2">Customers may request deletion (see Section 10).</p>
      </section>

      {/* 8. Marketing */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Marketing & Communications</h2>
        <p>With your consent, we may send:</p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Membership and loyalty benefits</li>
          <li>Product announcements</li>
          <li>Offers, promotions, contests</li>
          <li>Brand or educational content</li>
        </ul>
        <p className="mt-2">You may unsubscribe anytime.</p>
      </section>

      {/* 9. Children's Privacy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Children’s Privacy</h2>
        <p>Digital services are not designed for children under 14. Parental supervision is recommended.</p>
      </section>

      {/* 10. Your Rights */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Your Privacy Rights</h2>
        <p>You may request the following:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Access to stored personal data</li>
          <li>Correction or updates</li>
          <li>Restriction of marketing messages</li>
          <li>Deletion of your account and personal data</li>
        </ul>
        <p className="mt-2">Contact us at: <strong>[Insert consumer support email]</strong></p>
      </section>

      {/* 11. Third-Party Links */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">11. Third-Party Links & Embedded Content</h2>
        <p>We are not responsible for the privacy or security practices of external websites or platforms.</p>
      </section>

      {/* 12. Changes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">12. Changes to the Privacy Policy</h2>
        <p>We may update this policy to reflect regulatory changes, safety improvements, or technological upgrades. Revised versions will include a new effective date.</p>
      </section>

      {/* 13. Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">13. Contact Information</h2>
        <p><strong>Email:</strong> [Insert official support email]</p>
        <p><strong>Customer Support:</strong> +91 9445454943</p>
        <p><strong>Address:</strong> 115/33, Chola Nagar, Vadugapalayam, Modachur, Gobichettipalayam, Erode, Tamil Nadu - 638476</p>
      </section>

      <section className="text-center font-medium">
        <p>By interacting with or purchasing from Herito Wellness Company, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
      </section>
    </div>
  )
}