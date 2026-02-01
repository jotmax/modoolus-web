import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar - Notion Style */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/80">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/courses" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Courses
            </Link>
            <Link href="/sign-up" className="text-sm bg-gray-900 text-white px-4 py-1.5 rounded-md hover:bg-gray-800 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content - Notion Style */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Page Icon & Title */}
        <div className="mb-8">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ lineHeight: '1.2' }}>
            Learning Resources
          </h1>
          <p className="text-lg text-gray-600">
            Free webinars, guides, templates, and tools to accelerate your learning journey.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Last updated: January 31, 2026</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Public</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-200 mb-12"></div>

        {/* Table of Contents - Notion Style */}
        <div className="bg-gray-100 rounded-lg p-6 mb-12 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Table of Contents</h2>
          </div>
          <div className="space-y-2">
            <a href="#featured-webinar" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded transition-colors">
              📹 Featured Webinar: Tax Laws for Freelancers
            </a>
            <a href="#session-materials" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded transition-colors">
              📥 Session Materials
            </a>
            <a href="#guides" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded transition-colors">
              📖 Learning Guides
            </a>
            <a href="#community" className="block text-gray-600 hover:text-gray-900 hover:bg-gray-200 px-3 py-2 rounded transition-colors">
              👥 Community & Support
            </a>
          </div>
        </div>

        {/* Featured Webinar Section */}
        <section id="featured-webinar" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📹</span>
            <h2 className="text-3xl font-bold text-gray-900">Featured Webinar</h2>
          </div>
          
          {/* Callout Box - Notion Style */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-red-900 mb-1">Recently Recorded</p>
                <p className="text-sm text-red-800">This session was recorded on January 2026 and is available for viewing</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ask Me Anything: Tax Laws for Freelancers & SMEs
              </h3>
              <p className="text-gray-600 mb-6">
                Essential tax knowledge for freelancers and small business owners. Learn compliance, deductions, and best practices from tax experts.
              </p>
              
              {/* Video Embed */}
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/QAlMGXFDK5E?si=vTtRXTNYJTejEPTY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Video Metadata */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center py-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">1hr 30mins</div>
                </div>
                <div className="text-center py-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Date</div>
                  <div className="font-semibold text-gray-900">Jan 2026</div>
                </div>
                <div className="text-center py-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Speaker</div>
                  <div className="font-semibold text-gray-900">Tax Experts</div>
                </div>
              </div>

              {/* Topics Toggle List - Notion Style */}
              <details className="group mb-6">
                <summary className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-gray-900 font-medium mb-2">
                  <svg className="w-4 h-4 transform group-open:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Topics Covered (6)
                </summary>
                <div className="ml-6 space-y-2 mt-3">
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Tax filing requirements for freelancers</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Allowable business deductions</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>VAT registration and compliance</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Record keeping best practices</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>PAYE for small business owners</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Common tax mistakes to avoid</span>
                  </div>
                </div>
              </details>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href="https://www.youtube.com/watch?v=QAlMGXFDK5E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Watch on YouTube
                </a>
                <a
                  href="#session-materials"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Materials
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Session Materials - Database Style */}
        <section id="session-materials" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📥</span>
            <h2 className="text-3xl font-bold text-gray-900">Session Materials</h2>
          </div>

          {/* Database View - Notion Style */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Resource</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Size</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📋</span>
                      <span className="font-medium text-gray-900">Tax Filing Checklist</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">PDF</td>
                  <td className="px-6 py-4 text-gray-600">2 MB</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Download</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📊</span>
                      <span className="font-medium text-gray-900">Deduction Calculator</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">Excel</td>
                  <td className="px-6 py-4 text-gray-600">1.5 MB</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Download</a>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📑</span>
                      <span className="font-medium text-gray-900">Session Slides</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">PDF</td>
                  <td className="px-6 py-4 text-gray-600">5 MB</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">Download</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Learning Guides - Card Grid */}
        <section id="guides" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">📖</span>
            <h2 className="text-3xl font-bold text-gray-900">Learning Guides</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    AI Tools Quick Start Guide
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Get started with ChatGPT, Claude, and other AI tools
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded">PDF</span>
                    <span>3 MB</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  💡
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Prompt Engineering Cheat Sheet
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    500+ proven prompts for content creation and coding
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded">PDF</span>
                    <span>1.5 MB</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="group bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🗺️
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Career Roadmap: AI & Tech
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Step-by-step guide to building your tech career
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded">Interactive PDF</span>
                    <span>4 MB</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Community & Support */}
        <section id="community" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">👥</span>
            <h2 className="text-3xl font-bold text-gray-900">Community & Support</h2>
          </div>

          <div className="space-y-3">
            <a href="#" className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Discord Community</h3>
                  <p className="text-sm text-gray-600">Join 200+ learners, get help, share projects</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a href="#" className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Weekly Office Hours</h3>
                  <p className="text-sm text-gray-600">Every Friday, 3-5 PM WAT. Direct instructor support</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a href="#" className="flex items-center justify-between bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center text-xl">
                  💼
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Job Board</h3>
                  <p className="text-sm text-gray-600">Exclusive opportunities for Modoolus students</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Bottom CTA - Subtle Notion Style */}
        <section className="bg-gray-900 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want More Exclusive Resources?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Enroll in any course to access premium resources, live sessions, and our private community.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Browse Courses
            </Link>
            <Link
              href="/sign-up"
              className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              Get Started Free
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>© 2026 Modoolus. All rights reserved.</p>
        </footer>

      </main>
    </div>
  );
}