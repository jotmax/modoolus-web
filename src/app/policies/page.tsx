import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliciesPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#0B2447] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B2447] via-[#19376D] to-[#0B2447] opacity-90" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6">
            <span className="text-white">Our </span>
            <span 
              className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Policies
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            We believe in transparency. Read our policies to understand how we protect your data, ensure quality learning, and maintain a fair environment.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-[72px] z-40">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="#privacy" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Privacy Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#terms" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Terms of Service</a>
            <span className="text-gray-300">|</span>
            <a href="#refund" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Refund Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#cookie" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Cookie Policy</a>
            <span className="text-gray-300">|</span>
            <a href="#code-of-conduct" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">Code of Conduct</a>
            <span className="text-gray-300">|</span>
            <a href="#ndpr" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">NDPR Compliance</a>
          </nav>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Privacy Policy</h2>
            <p className="text-sm text-gray-500">Effective Date: January 1, 2026 | Last Updated: January 29, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Modoolus ("we," "us," or "our") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Nigeria Data Protection Regulation (NDPR) 2019 and international best practices.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h3>
            <p className="text-gray-700 mb-3">We collect several types of information:</p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Personal Information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full name, email address, phone number</li>
                <li>Date of birth, gender (optional)</li>
                <li>Physical address, city, state, country</li>
                <li>Payment information (processed securely via third-party providers)</li>
                <li>Profile photo (optional)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Educational Information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Course enrollment and completion data</li>
                <li>Assessment scores and project submissions</li>
                <li>Learning progress and activity logs</li>
                <li>Certificates and achievements</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Technical Information:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address, browser type, device information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Usage data and analytics</li>
                <li>Log files and crash reports</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Service Delivery:</strong> Process enrollments, deliver courses, provide mentorship, issue certificates</li>
              <li><strong>Communication:</strong> Send course updates, announcements, promotional materials (with consent)</li>
              <li><strong>Improvement:</strong> Analyze usage to enhance our platform, courses, and user experience</li>
              <li><strong>Support:</strong> Respond to inquiries, troubleshoot issues, provide customer service</li>
              <li><strong>Security:</strong> Prevent fraud, unauthorized access, and protect our platform</li>
              <li><strong>Legal Compliance:</strong> Meet regulatory requirements and legal obligations</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing (NDPR Compliance)</h3>
            <p className="text-gray-700 mb-3">We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our services to you</li>
              <li><strong>Legal Obligation:</strong> Required by Nigerian or international law</li>
              <li><strong>Legitimate Interests:</strong> For business operations that don't override your rights</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Sharing and Disclosure</h3>
            <p className="text-gray-700 mb-3">We share your information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> Payment processors, email services, cloud hosting (all under strict confidentiality agreements)</li>
              <li><strong>Partner Companies:</strong> For job placement and internship opportunities (with your consent)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect rights and safety</li>
              <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale (you'll be notified)</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>We never sell your personal data to third parties.</strong>
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. International Data Transfers</h3>
            <p className="text-gray-700 mb-4">
              Some of our service providers are located outside Nigeria. When we transfer your data internationally, we ensure appropriate safeguards through:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Standard Contractual Clauses approved by NITDA</li>
              <li>Adequacy decisions recognizing equivalent data protection</li>
              <li>Your explicit consent for specific transfers</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights Under NDPR</h3>
            <p className="text-gray-700 mb-3">As a Nigerian resident, you have the right to:</p>
            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-4">
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Access:</strong> Request a copy of your personal data</li>
                <li>✓ <strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li>✓ <strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li>✓ <strong>Restriction:</strong> Limit how we process your data</li>
                <li>✓ <strong>Portability:</strong> Receive your data in a portable format</li>
                <li>✓ <strong>Object:</strong> Object to processing based on legitimate interests</li>
                <li>✓ <strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
                <li>✓ <strong>Lodge Complaint:</strong> File complaint with NITDA</li>
              </ul>
            </div>
            <p className="text-gray-700 mb-4">
              To exercise these rights, contact us at <a href="mailto:privacy@modoolus.com" className="text-primary-600 hover:underline">privacy@modoolus.com</a>. We respond within 30 days.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h3>
            <p className="text-gray-700 mb-4">
              We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted storage of sensitive data</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Staff training on data protection</li>
              <li>Incident response and breach notification procedures</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Data Retention</h3>
            <p className="text-gray-700 mb-4">
              We retain your data for as long as necessary to provide services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Active account data: Duration of account + 2 years</li>
              <li>Course completion records: 7 years (for certificate verification)</li>
              <li>Financial records: 6 years (tax compliance)</li>
              <li>Marketing communications: Until you unsubscribe</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Children's Privacy</h3>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under 18. For users aged 13-17, we require verifiable parental consent before collecting any personal data. If you believe we've inadvertently collected data from a minor, contact us immediately at <a href="mailto:privacy@modoolus.com" className="text-primary-600 hover:underline">privacy@modoolus.com</a>.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Changes to This Policy</h3>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy periodically. We'll notify you of significant changes via email or platform notification 30 days before they take effect. Continued use after changes constitutes acceptance.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-3">Data Protection Officer:</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@modoolus.com" className="text-primary-600 hover:underline">privacy@modoolus.com</a></p>
              <p className="text-gray-700 mb-2">Address: Agidingbi, Ikeja, Lagos, Nigeria</p>
              <p className="text-gray-700 mb-2">Phone: +234 808 498 5719</p>
              <p className="text-gray-700 mt-4 text-sm">
                <strong>NITDA (Regulatory Authority):</strong><br />
                National Information Technology Development Agency<br />
                Email: info@nitda.gov.ng
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px"></div>

      {/* Terms of Service */}
      <section id="terms" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Terms of Service</h2>
            <p className="text-sm text-gray-500">Effective Date: January 1, 2026 | Last Updated: January 29, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h3>
            <p className="text-gray-700 mb-4">
              By accessing or using Modoolus ("Platform"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part, you may not access the Platform. These Terms apply to all users, including students, instructors, and visitors.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Account Registration</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>You must be at least 18 years old or have parental consent (13-17 years)</li>
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain the security of your password and account</li>
              <li>Immediately notify us of unauthorized access</li>
              <li>You're responsible for all activities under your account</li>
              <li>One person per account (no sharing or selling accounts)</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Course Enrollment and Access</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-3">Upon Enrollment:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Lifetime access to enrolled course materials (unless otherwise specified)</li>
                <li>Access to live sessions during cohort period</li>
                <li>Mentorship sessions as per course package</li>
                <li>Certificate upon successful completion</li>
                <li>Community access and networking opportunities</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-2">Important Notes:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Course content may be updated or modified to reflect industry changes</li>
                <li>• Live session dates are scheduled and communicated in advance</li>
                <li>• Mentorship sessions must be used within cohort period (non-transferable)</li>
                <li>• Certificate issuance requires 80% course completion + final project</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Payment and Fees</h3>
            <p className="text-gray-700 mb-3"><strong>Pricing:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>All prices displayed in Nigerian Naira (₦) unless otherwise stated</li>
              <li>Prices include applicable taxes</li>
              <li>Installment payment plans available (terms specified at checkout)</li>
              <li>Promotional pricing honored if enrolled during offer period</li>
            </ul>

            <p className="text-gray-700 mb-3"><strong>Payment Methods:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Credit/debit cards (Visa, Mastercard, Verve)</li>
              <li>Bank transfer</li>
              <li>Mobile money (via Paystack/Flutterwave)</li>
            </ul>

            <p className="text-gray-700 mb-3"><strong>Failed Payments:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Access suspended until payment received</li>
              <li>7-day grace period for installment defaults</li>
              <li>Account may be terminated after 30 days non-payment</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Intellectual Property Rights</h3>
            <p className="text-gray-700 mb-3"><strong>Our Content:</strong></p>
            <p className="text-gray-700 mb-4">
              All course materials, videos, documents, code, designs, trademarks, and content are owned by Modoolus or licensed to us. Protected by Nigerian and international copyright laws.
            </p>

            <p className="text-gray-700 mb-3"><strong>You May Not:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Copy, reproduce, or redistribute course materials</li>
              <li>Share login credentials or course access</li>
              <li>Screen record, download, or distribute videos</li>
              <li>Use course content for commercial purposes without permission</li>
              <li>Remove watermarks, copyright notices, or attributions</li>
            </ul>

            <p className="text-gray-700 mb-3"><strong>Your Content:</strong></p>
            <p className="text-gray-700 mb-4">
              Projects, submissions, and forum posts you create remain yours. However, you grant Modoolus a non-exclusive, worldwide, royalty-free license to use, display, and showcase your work for educational and promotional purposes (with attribution).
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Prohibited Conduct</h3>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-4">
              <p className="font-semibold text-gray-900 mb-3">You agree NOT to:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Harass, threaten, or abuse other users or staff</li>
                <li>✗ Submit plagiarized work or cheat on assessments</li>
                <li>✗ Spam, phish, or engage in fraudulent activities</li>
                <li>✗ Hack, reverse engineer, or compromise platform security</li>
                <li>✗ Upload viruses, malware, or harmful code</li>
                <li>✗ Impersonate others or create fake accounts</li>
                <li>✗ Use bots or automated tools without permission</li>
                <li>✗ Violate applicable laws or regulations</li>
              </ul>
              <p className="text-sm text-red-800 mt-4">Violation may result in immediate account termination without refund.</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Certificates and Credentials</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Certificates issued upon meeting completion requirements</li>
              <li>Certificates are non-transferable and digitally verifiable</li>
              <li>We reserve the right to revoke certificates for violations</li>
              <li>Certificates reflect skills learned, not job guarantees</li>
              <li>You may share certificates on LinkedIn and professional profiles</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Job Placement and Career Services</h3>
            <p className="text-gray-700 mb-4">
              We provide job placement support including interview prep, CV review, and partner company introductions. However:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>We do NOT guarantee employment</li>
              <li>Final hiring decisions rest with employers</li>
              <li>Placement rates are historical averages, not promises</li>
              <li>Career services require active participation and completion</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Disclaimers and Limitations of Liability</h3>
            <p className="text-gray-700 mb-4">
              <strong>Service "As Is":</strong> The Platform is provided "as is" without warranties of any kind. We don't guarantee uninterrupted access, error-free content, or specific outcomes.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, Modoolus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Maximum Liability:</strong> Our total liability shall not exceed the amount you paid for the specific course in question.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Termination</h3>
            <p className="text-gray-700 mb-3"><strong>By You:</strong> You may close your account anytime from settings.</p>
            <p className="text-gray-700 mb-3"><strong>By Us:</strong> We may suspend or terminate accounts that violate these Terms.</p>
            <p className="text-gray-700 mb-4"><strong>Effect:</strong> Upon termination, you lose access to all course materials and services. Completed certificates remain valid.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Governing Law and Dispute Resolution</h3>
            <p className="text-gray-700 mb-4">
              These Terms are governed by the laws of Nigeria. Disputes shall first be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be settled through arbitration in Lagos, Nigeria, in accordance with the Arbitration and Conciliation Act.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Changes to Terms</h3>
            <p className="text-gray-700 mb-4">
              We may modify these Terms at any time. Material changes will be notified 30 days in advance via email. Continued use after changes constitutes acceptance. If you disagree, close your account before the effective date.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Contact Information</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2">Email: <a href="mailto:support@modoolus.com" className="text-primary-600 hover:underline">support@modoolus.com</a></p>
              <p className="text-gray-700 mb-2">Address: Agidingbi, Ikeja, Lagos, Nigeria</p>
              <p className="text-gray-700 mb-2">Phone: +234 808 498 5719</p>
              <p className="text-gray-700">Support Hours: Monday-Friday, 9 AM - 6 PM WAT</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px"></div>

      {/* Refund Policy */}
      <section id="refund" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Refund Policy</h2>
            <p className="text-sm text-gray-500">Effective Date: January 1, 2026 | Last Updated: January 29, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <p className="font-semibold text-green-900 mb-2">Our Commitment</p>
              <p className="text-green-800">
                We're confident in the quality of our courses. If you're not satisfied, we offer a fair refund policy that protects both students and our educational mission.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. 7-Day Money-Back Guarantee</h3>
            <p className="text-gray-700 mb-3"><strong>Eligibility:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Request submitted within 7 days of enrollment</li>
              <li>Less than 20% of course content accessed</li>
              <li>No previous refund requests from your account</li>
              <li>Valid reason provided (dissatisfaction, technical issues, etc.)</li>
            </ul>

            <p className="text-gray-700 mb-3"><strong>Process:</strong></p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Email <a href="mailto:refunds@modoolus.com" className="text-primary-600 hover:underline">refunds@modoolus.com</a> with:
                <ul className="list-disc pl-6 mt-2">
                  <li>Enrollment confirmation number</li>
                  <li>Course name</li>
                  <li>Reason for refund</li>
                </ul>
              </li>
              <li>We review within 2-3 business days</li>
              <li>Approved refunds processed within 7-14 business days</li>
              <li>Refund issued to original payment method</li>
            </ol>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Exceptions (No Refunds)</h3>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-4">
              <p className="font-semibold text-red-900 mb-3">Refunds are NOT available for:</p>
              <ul className="space-y-2 text-red-800">
                <li>✗ Requests after 7-day period</li>
                <li>✗ Courses more than 20% completed</li>
                <li>✗ Promotional, discounted, or scholarship enrollments</li>
                <li>✗ Certificate issuance fees</li>
                <li>✗ Courses purchased via installment plans (after first payment)</li>
                <li>✗ Bundles or packages (partial refunds unavailable)</li>
                <li>✗ Account termination due to Terms violation</li>
                <li>✗ Third-party purchases (resellers, agents)</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Technical Issues</h3>
            <p className="text-gray-700 mb-4">
              If you experience technical problems preventing course access, contact support@modoolus.com immediately. We'll resolve issues or extend your access period. Refunds for technical issues are considered case-by-case.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Course Cancellations by Modoolus</h3>
            <p className="text-gray-700 mb-4">
              If we cancel a course due to low enrollment or instructor unavailability:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Full refund issued automatically</li>
              <li>Option to transfer to next cohort or different course</li>
              <li>Notification at least 7 days before start date</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Disputes</h3>
            <p className="text-gray-700 mb-4">
              If your refund request is denied and you disagree, you may escalate to our Compliance Officer at <a href="mailto:compliance@modoolus.com" className="text-primary-600 hover:underline">compliance@modoolus.com</a> for final review.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px"></div>

      {/* Cookie Policy */}
      <section id="cookie" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Cookie Policy</h2>
            <p className="text-sm text-gray-500">Effective Date: January 1, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h3>
            <p className="text-gray-700 mb-4">
              Cookies are small text files stored on your device when you visit our website. They help us provide a better experience by remembering your preferences and understanding how you use our Platform.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Types of Cookies We Use</h3>
            
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">Essential Cookies (Required)</p>
                <p className="text-gray-700 text-sm mb-2">Enable core functionality like authentication and security.</p>
                <p className="text-gray-600 text-sm italic">Examples: Login sessions, security tokens, load balancing</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">Performance Cookies (Optional)</p>
                <p className="text-gray-700 text-sm mb-2">Help us understand how visitors interact with our Platform.</p>
                <p className="text-gray-600 text-sm italic">Examples: Google Analytics, page load times, error tracking</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">Functional Cookies (Optional)</p>
                <p className="text-gray-700 text-sm mb-2">Remember your preferences and settings.</p>
                <p className="text-gray-600 text-sm italic">Examples: Language preference, theme choice, video playback settings</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-semibold text-gray-900 mb-2">Marketing Cookies (Optional)</p>
                <p className="text-gray-700 text-sm mb-2">Track your activity to show relevant ads and content.</p>
                <p className="text-gray-600 text-sm italic">Examples: Facebook Pixel, Google Ads, retargeting pixels</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Third-Party Cookies</h3>
            <p className="text-gray-700 mb-3">We use services that set their own cookies:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Google Analytics:</strong> Usage statistics and behavior analysis</li>
              <li><strong>Paystack/Flutterwave:</strong> Payment processing</li>
              <li><strong>YouTube:</strong> Embedded video playback</li>
              <li><strong>Facebook/LinkedIn:</strong> Social media integration and ads</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Managing Cookies</h3>
            <p className="text-gray-700 mb-3"><strong>Cookie Preferences:</strong></p>
            <p className="text-gray-700 mb-4">
              Upon first visit, you'll see a cookie banner. Click "Manage Preferences" to choose which cookies to accept. You can update preferences anytime from your account settings.
            </p>

            <p className="text-gray-700 mb-3"><strong>Browser Settings:</strong></p>
            <p className="text-gray-700 mb-4">
              Most browsers allow you to refuse cookies or delete existing ones. However, disabling essential cookies may affect Platform functionality.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 text-sm">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Cookies and Site Permissions</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Updates to This Policy</h3>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy as we adopt new technologies. Check this page periodically for changes.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px"></div>

      {/* Code of Conduct */}
      <section id="code-of-conduct" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">Community Code of Conduct</h2>
            <p className="text-sm text-gray-500">Last Updated: January 29, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-6">
              <p className="font-semibold text-gray-900 mb-2">Our Mission</p>
              <p className="text-gray-700">
                Modoolus is committed to providing a welcoming, inclusive, and respectful learning environment for everyone, regardless of background, identity, or experience level.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Expected Behavior</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Be respectful, kind, and professional in all interactions</li>
              <li>Welcome and support new learners</li>
              <li>Give and receive constructive feedback graciously</li>
              <li>Respect diverse perspectives and experiences</li>
              <li>Collaborate and share knowledge generously</li>
              <li>Honor intellectual property and attribution</li>
              <li>Report concerning behavior to staff</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Unacceptable Behavior</h3>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-4">
              <ul className="space-y-2 text-red-800">
                <li>✗ Harassment, discrimination, or hate speech</li>
                <li>✗ Threats, intimidation, or bullying</li>
                <li>✗ Sexual content, advances, or inappropriate imagery</li>
                <li>✗ Plagiarism or academic dishonesty</li>
                <li>✗ Sharing others' private information without consent</li>
                <li>✗ Spamming, trolling, or disruptive behavior</li>
                <li>✗ Impersonation or deceptive practices</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Reporting and Enforcement</h3>
            <p className="text-gray-700 mb-4">
              If you experience or witness unacceptable behavior:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-4">
              <li>Report to <a href="mailto:conduct@modoolus.com" className="text-primary-600 hover:underline">conduct@modoolus.com</a></li>
              <li>Provide details: date, time, individuals involved, description</li>
              <li>We investigate all reports confidentially</li>
              <li>Actions range from warning to permanent ban</li>
            </ol>

            <p className="text-gray-700 mb-4">
              <strong>We take reports seriously and protect reporters from retaliation.</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-100 h-px"></div>

      {/* NDPR Compliance */}
      <section id="ndpr" className="bg-white py-16 scroll-mt-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2">NDPR Compliance Statement</h2>
            <p className="text-sm text-gray-500">Nigeria Data Protection Regulation 2019</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-6">
              <p className="font-semibold text-green-900 mb-2">Our Commitment to Nigerian Data Protection</p>
              <p className="text-green-800">
                Modoolus is fully committed to complying with the Nigeria Data Protection Regulation (NDPR) 2019 and respecting the data protection rights of all Nigerian residents.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Data Protection Officer</h3>
            <p className="text-gray-700 mb-4">
              We have appointed a Data Protection Officer (DPO) responsible for overseeing our data protection strategy and NDPR compliance.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2"><strong>DPO Contact:</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:dpo@modoolus.com" className="text-primary-600 hover:underline">dpo@modoolus.com</a></p>
              <p className="text-gray-700 mb-2">Phone: +234 808 498 5719</p>
              <p className="text-gray-700">Address: Agidingbi, Ikeja, Lagos, Nigeria</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Lawful Processing Basis</h3>
            <p className="text-gray-700 mb-4">
              We process personal data only when we have a lawful basis under NDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Consent for marketing communications and optional features</li>
              <li>Contract performance for course delivery and services</li>
              <li>Legal obligation for tax, financial records, and regulatory compliance</li>
              <li>Legitimate interest for platform security and improvement</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Data Subject Rights</h3>
            <p className="text-gray-700 mb-4">
              Under NDPR, Nigerian residents have specific rights. See our Privacy Policy above for full details on exercising these rights.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Data Breach Notification</h3>
            <p className="text-gray-700 mb-4">
              In the event of a data breach affecting your personal data, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Notify NITDA within 72 hours</li>
              <li>Notify affected individuals without undue delay</li>
              <li>Describe the nature of the breach and likely consequences</li>
              <li>Outline measures taken and recommended actions</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Data Protection Audit</h3>
            <p className="text-gray-700 mb-4">
              We conduct regular data protection audits and maintain:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Data inventory and processing activities register</li>
              <li>Privacy impact assessments for high-risk processing</li>
              <li>Staff training records on data protection</li>
              <li>Vendor compliance agreements</li>
              <li>Annual NDPR compliance reports</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Contact NITDA</h3>
            <p className="text-gray-700 mb-4">
              If you believe we have violated your data protection rights under NDPR, you have the right to lodge a complaint with:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="font-semibold text-gray-900 mb-3">National Information Technology Development Agency (NITDA)</p>
              <p className="text-gray-700 mb-2">Email: info@nitda.gov.ng</p>
              <p className="text-gray-700 mb-2">Phone: +234 9 461 0572</p>
              <p className="text-gray-700 mb-2">Address: Plot 28 Port-Harcourt Crescent, Off Gimbiya Street, Area 11, Garki, Abuja</p>
              <p className="text-gray-700">Website: <a href="https://nitda.gov.ng" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">nitda.gov.ng</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#0B2447] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Questions About Our Policies?
          </h3>
          <p className="text-white/90 mb-8">
            Our team is here to help clarify anything you need to know about privacy, terms, or data protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@modoolus.com"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#0B2447] hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:privacy@modoolus.com"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white hover:text-[#0B2447] transition-all duration-200"
            >
              Data Protection Officer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}