import React from 'react'

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">TERMS & CONDITIONS</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Company: Herito Wellness Private Limited</h2>
        <p><strong>Products Covered:</strong> All functional beverages and foods manufactured and sold by the Company.</p>
        <p className="mt-2">By purchasing, consuming, distributing, handling, or accessing our products or services, you agree to the following Terms & Conditions.</p>
      </section>

      {/* 1. Responsible Consumption */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">1. Responsible Consumption</h3>
        <p>Our products are intended to support general wellness, hydration, energy and nutritional support.</p>
        <p className="mt-2">By consuming our products, you confirm:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>You are at least 10 years of age, OR consumption is under parental supervision</li>
          <li>You understand that functional foods and beverages are not medicines</li>
        </ul>
        <p className="mt-2">Consumers are responsible for moderate and responsible intake, especially for products containing caffeine, B-vitamins, herbal extracts, or nutraceutical ingredients.</p>
      </section>

      {/* 2. Not a Medical Substitute */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">2. Not a Medical Substitute</h3>
        <p>Our functional foods & beverages are not intended to diagnose, treat, cure, or prevent any disease, as per global standards.</p>
        <p className="mt-2">Individuals with specific medical conditions should consult a doctor before consumption, including:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Diabetes</li>
          <li>Heart disease</li>
          <li>Hypertension</li>
          <li>Kidney or liver issues</li>
          <li>Caffeine sensitivity</li>
          <li>Pregnancy / breastfeeding</li>
          <li>Allergies to any ingredient printed on the label</li>
        </ul>
      </section>

      {/* 3. Ingredients, Formulation & Nutrition Transparency */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">3. Ingredients, Formulation & Nutrition Transparency</h3>
        <p>All ingredients, nutritional facts, allergen declarations, and usage recommendations printed on the product are correct to the best of our knowledge.</p>
        <p className="mt-2">However, the Company reserves the right to revise formulations, flavors, shelf life, packaging, or serving guidelines without prior notice to:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Improve product performance</li>
          <li>Meet raw material availability</li>
          <li>Maintain regulatory compliance</li>
          <li>Enhance consumer safety</li>
        </ul>
      </section>

      {/* 4. Storage & Usage */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">4. Storage & Usage</h3>
        <p>For best safety and product experience:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Store in a cool, dry place</li>
          <li>Avoid direct sunlight</li>
          <li>Do not freeze</li>
          <li>Do not heat</li>
          <li>Keep sealed until use</li>
          <li>Once opened, consume immediately (for beverages) or within 48 hours if resealable (for foods)</li>
        </ul>
        <p className="mt-2">The Company is not responsible for deterioration caused by improper storage, exposure, tampering, or repackaging.</p>
      </section>

      {/* 5. Intellectual Property */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">5. Intellectual Property</h3>
        <p>All brand assets including business name, logos, product names, artwork, designs, digital content, and formulations are the exclusive intellectual property of the Company.</p>
        <p className="mt-2">Refilling, dilution, relabeling, copying, repackaging, reselling, or counterfeiting Herito products is strictly prohibited and may result in legal action.</p>
      </section>

      {/* 6. Returns, Exchanges & Refunds */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">6. Returns, Exchanges & Refunds</h3>
        <p>Returns are accepted only if the product is damaged, leaked, defective, or expired at delivery time.</p>
        <p className="mt-2"><strong>Claim Window:</strong> 48 hours from delivery</p>
        <p><strong>Proof Required:</strong> Photo/video with defect and batch code</p>
        <p className="mt-2">Replacement is prioritised over refunds. Approval is subject to quality inspection.</p>
      </section>

      {/* 7. Online Orders, Pricing & Campaigns */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">7. Online Orders, Pricing & Campaigns</h3>
        <p>Product prices may vary due to raw material cost, seasonal availability, distribution zones, or promotions.</p>
        <p className="mt-2">Orders may be cancelled if:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Stock is unavailable</li>
          <li>Shipping limitations occur</li>
          <li>Safety-related concerns arise</li>
          <li>Bulk/resale misuse is suspected</li>
        </ul>
      </section>

      {/* 8. Distributor & Retailer Responsibilities */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">8. Distributor & Retailer Responsibilities</h3>
        <p>Partners must sell only sealed, original Herito products, follow MRP/MAP rules, maintain storage standards, and avoid expired or damaged goods.</p>
        <p className="mt-2">Violations may result in termination and legal action.</p>
      </section>

      {/* 9. Limitations of Liability */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">9. Limitations of Liability</h3>
        <p>The Company is not liable for improper storage, misuse, allergic reactions, counterfeit purchases, logistics delays, or product alteration.</p>
        <p className="mt-2">Maximum liability equals the product's purchase value only.</p>
      </section>

      {/* 10. Data Privacy */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">10. Data Privacy</h3>
        <p>Customer data may be collected for order delivery, support, experience improvement, and promotional benefits.</p>
        <p className="mt-2">Personal data is not sold, and is only shared with essential service partners.</p>
      </section>

      {/* 11. Governing Law & Jurisdiction */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">11. Governing Law & Jurisdiction</h3>
        <p>These Terms are governed by Indian law. Disputes fall under the exclusive jurisdiction of Tamil Nadu courts unless mutually agreed otherwise.</p>
      </section>

      {/* 12. Amendments */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">12. Amendments</h3>
        <p>The Company may modify these Terms anytime due to legal updates, market changes, or safety improvements.</p>
        <p className="mt-2">Continued use of our products indicates acceptance of updated Terms.</p>
      </section>

      <section className="mt-10 text-center font-medium">
        <p>By purchasing, consuming, distributing, or accessing Herito functional beverages or foods, you confirm that you have read, understood, and agreed to these Terms & Conditions.</p>
      </section>
    </div>
  )
}
