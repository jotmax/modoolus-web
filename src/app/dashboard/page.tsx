import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600" />
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome back!</p>
            </div>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="badge badge-success">Active</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">2</h3>
            <p className="text-sm text-gray-600">Enrolled Courses</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="badge badge-info">In Progress</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">67%</h3>
            <p className="text-sm text-gray-600">Overall Progress</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-warning-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="badge badge-warning">24h</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-1">3</h3>
            <p className="text-sm text-gray-600">Upcoming Sessions</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Current Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-display font-bold text-gray-900 mb-4">
                Continue Learning
              </h2>

              {/* Course Progress Card */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-400 to-secondary-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">UI/UX Design</h3>
                      <p className="text-sm text-gray-600 mb-3">Module 4: Prototyping</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }} />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>75% complete</span>
                        <span>3 of 4 modules</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-success-400 to-info-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1">Software Engineering</h3>
                      <p className="text-sm text-gray-600 mb-3">Module 2: Backend Development</p>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
                        <div className="bg-success-600 h-2 rounded-full" style={{ width: '45%' }} />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>45% complete</span>
                        <span>2 of 6 modules</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Upcoming & Quick Links */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-display font-bold text-gray-900 mb-4">
                Upcoming Sessions
              </h2>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary-50 border border-primary-200">
                  <p className="text-sm font-semibold text-gray-900">Design Review</p>
                  <p className="text-xs text-gray-600 mt-1">Tomorrow, 2:00 PM</p>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">Code Mentorship</p>
                  <p className="text-xs text-gray-600 mt-1">Jan 12, 4:00 PM</p>
                </div>
                
                <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">Career Workshop</p>
                  <p className="text-xs text-gray-600 mt-1">Jan 15, 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-display font-bold text-gray-900 mb-4">
                Quick Actions
              </h2>
              
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors">
                  📚 Browse Courses
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors">
                  💬 Message Mentor
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors">
                  📅 Schedule Session
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors">
                  🏆 View Achievements
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}