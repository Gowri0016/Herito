import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0f172a] text-gray-600 dark:text-gray-400">

      {/* Certifications */}
      <div className="border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap gap-6 justify-center text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">ISO Certified</span>
          <span className="font-medium">GMP Compliant</span>
          <span className="font-medium">FSSAI Approved</span>
          <span className="font-medium">Quality Assured</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 md:grid-cols-5">

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Herito Wellness Private Limited
          </h2>
          <p className="text-sm leading-relaxed">
            A science-driven wellness company delivering functional beverages
            and nutrition solutions designed for modern, balanced living.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-gray-900 dark:hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-gray-900 dark:hover:text-white transition">About Us</a></li>
            <li><a href="/products" className="hover:text-gray-900 dark:hover:text-white transition">Products</a></li>
            <li><a href="/enquiry" className="hover:text-gray-900 dark:hover:text-white transition">Enquiry</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Legal & Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/privacy" className="hover:text-gray-900 dark:hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-900 dark:hover:text-white transition">Terms & Conditions</a></li>
            <li>
              <button className="hover:text-gray-900 dark:hover:text-white transition text-left">
                Help Center
              </button>
            </li>
            <li>
              <button className="hover:text-gray-900 dark:hover:text-white transition text-left">
                Customer Support
              </button>
            </li>
          </ul>
        </div>

      {/* Registered Office */}
<div>
  <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
    Registered Office
  </h3>

  <p className="text-sm leading-relaxed">
    Herito Wellness Private Limited<br />
    115/33, Gobichettipalayam,<br />
    Erode – 638476,<br />
    Tamil Nadu, India
  </p>

  <div className="mt-3 text-sm space-y-1">
    <p>
      <span className="font-medium">Phone:</span>{' '}
      <a
        href="tel:+919445454943"
        className="hover:text-gray-900 dark:hover:text-white transition"
      >
        +91 94454 54943
      </a>
    </p>

    <p>
      <span className="font-medium">CIN:</span> UXXXXXXXXXX2025PTCXXXXXX
    </p>

    <p>
      <span className="font-medium">GSTIN:</span> 33XXXXXXXXXXZ5
    </p>
  </div>
</div>


        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Get wellness insights and product updates.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-slate-700
                         rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400
                         dark:bg-slate-900"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium bg-gray-900 text-white
                         rounded-md hover:bg-gray-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Herito Wellness Private Limited. All rights reserved.
          </p>
          <p className="mt-1">
            Crafted by{' '}
            <span className="font-medium hover:text-gray-900 dark:hover:text-white transition">
              Poeage Technology Pvt. Ltd.
            </span>
          </p>

          {/* Social */}
          <div className="mt-3 flex justify-center gap-4 text-base">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-900 dark:hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-900 dark:hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-900 dark:hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-gray-900 dark:hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
