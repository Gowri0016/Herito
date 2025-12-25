import React from 'react'

export default function Terms() {
  return (
    <main className="bg-[#f7f8f5] text-gray-700">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto">
            These Terms & Conditions govern the purchase, consumption,
            distribution, and use of all products manufactured and sold by
            Herito Wellness Private Limited.
          </p>
        </header>

        {/* Company Info */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Company Information
          </h2>
          <p><strong>Company:</strong> Herito Wellness Private Limited</p>
          <p className="mt-2">
            <strong>Products Covered:</strong> All functional beverages and foods
            manufactured and sold by the Company.
          </p>
          <p className="mt-4 text-gray-600">
            By purchasing, consuming, distributing, handling, or accessing our
            products or services, you agree to the following Terms & Conditions.
          </p>
        </section>

        {/* Sections Wrapper */}
        <div className="space-y-10">

          {[
            {
              title: '1. Responsible Consumption',
              body: (
                <>
                  <p>
                    Our products are intended to support general wellness,
                    hydration, energy, and nutritional support.
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>You are at least 10 years of age or under parental supervision</li>
                    <li>Functional foods and beverages are not medicines</li>
                  </ul>
                  <p className="mt-3">
                    Consumers are responsible for moderate and responsible intake,
                    especially for products containing caffeine, B-vitamins,
                    herbal extracts, or nutraceutical ingredients.
                  </p>
                </>
              )
            },
            {
              title: '2. Not a Medical Substitute',
              body: (
                <>
                  <p>
                    Our products are not intended to diagnose, treat, cure, or
                    prevent any disease.
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Diabetes</li>
                    <li>Heart disease</li>
                    <li>Hypertension</li>
                    <li>Kidney or liver conditions</li>
                    <li>Caffeine sensitivity</li>
                    <li>Pregnancy or breastfeeding</li>
                    <li>Known allergies</li>
                  </ul>
                </>
              )
            },
            {
              title: '3. Ingredients & Nutrition Transparency',
              body: (
                <>
                  <p>
                    Ingredient lists, nutrition facts, allergen declarations,
                    and usage guidelines are accurate to the best of our knowledge.
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-1">
                    <li>Improve product performance</li>
                    <li>Meet regulatory compliance</li>
                    <li>Enhance consumer safety</li>
                  </ul>
                </>
              )
            },
            {
              title: '4. Storage & Usage',
              body: (
                <>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Store in a cool, dry place</li>
                    <li>Avoid direct sunlight</li>
                    <li>Do not freeze or heat</li>
                    <li>Consume immediately after opening</li>
                  </ul>
                  <p className="mt-3">
                    The Company is not responsible for damage due to improper storage.
                  </p>
                </>
              )
            },
            {
              title: '5. Intellectual Property',
              body: (
                <p>
                  All brand assets, formulations, designs, and digital content
                  are the exclusive intellectual property of the Company.
                  Unauthorized use may result in legal action.
                </p>
              )
            },
            {
              title: '6. Returns, Exchanges & Refunds',
              body: (
                <>
                  <p>
                    Returns are accepted only for damaged, defective, or expired
                    products at delivery.
                  </p>
                  <p className="mt-2">
                    <strong>Claim Window:</strong> 48 hours from delivery
                  </p>
                  <p>
                    <strong>Proof Required:</strong> Photo/video with batch code
                  </p>
                </>
              )
            },
            {
              title: '7. Online Orders & Pricing',
              body: (
                <p>
                  Prices may vary due to promotions, raw material costs, or
                  distribution zones. Orders may be cancelled due to availability
                  or safety concerns.
                </p>
              )
            },
            {
              title: '8. Distributor & Retailer Responsibilities',
              body: (
                <p>
                  Partners must sell only original, sealed products and comply
                  with MRP, storage, and quality standards.
                </p>
              )
            },
            {
              title: '9. Limitation of Liability',
              body: (
                <p>
                  Maximum liability is limited to the purchase value of the product.
                </p>
              )
            },
            {
              title: '10. Data Privacy',
              body: (
                <p>
                  Customer data is collected only for operational and service
                  purposes and is not sold to third parties.
                </p>
              )
            },
            {
              title: '11. Governing Law & Jurisdiction',
              body: (
                <p>
                  These Terms are governed by Indian law with jurisdiction in
                  Tamil Nadu courts.
                </p>
              )
            },
            {
              title: '12. Amendments',
              body: (
                <p>
                  The Company may update these Terms at any time. Continued use
                  indicates acceptance of revised Terms.
                </p>
              )
            }
          ].map((section, index) => (
            <section
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <div className="text-gray-600 leading-relaxed">
                {section.body}
              </div>
            </section>
          ))}

        </div>

        {/* Acceptance */}
        <footer className="mt-16 text-center bg-white border border-gray-200 rounded-2xl p-8">
          <p className="font-medium text-gray-800">
            By purchasing, consuming, distributing, or accessing Herito products,
            you confirm that you have read, understood, and agreed to these
            Terms & Conditions.
          </p>
        </footer>

      </div>
    </main>
  )
}
