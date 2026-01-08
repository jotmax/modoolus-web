"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function OnboardingPage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [courseInterest, setCourseInterest] = useState("");

  if (!isLoaded) return null;

  if (!user) {
    router.push("/sign-in");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await user.update({
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        unsafeMetadata: {
          phone,
          country,
          courseInterest,
          onboardingCompleted: true,
        },
      });

      router.push("/dashboard");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative hidden lg:block">
          <img
            src="/images/onboarding.png"
            alt="Students learning"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right: Form */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-xl">
            <h1 className="text-2xl font-bold">Complete your profile</h1>
            <p className="mt-2 text-sm text-black/70">
              This helps us place you in the right cohort and course track.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">First name</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Last name</label>
                  <input
                    className="mt-1 w-full rounded-md border px-3 py-2"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Makinde"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Phone (optional)</label>
                <input
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234..."
                />
              </div>

              <div>
                <label className="text-sm font-medium">Country</label>
                <select
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="">Select your country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Course interest</label>
                <select
                  className="mt-1 w-full rounded-md border px-3 py-2"
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="AI">AI</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="Data">Data</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-black px-4 py-3 text-white font-semibold disabled:opacity-60"
              >
                {loading ? "Saving..." : "Continue to dashboard"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
