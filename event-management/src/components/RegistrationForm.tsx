"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface RegistrationFormProps {
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  eventDescription: string;
  registrationFee?: string;
  feeAmount?: number;
}

interface UserData {
  name: string;
  email: string;
  age: string;
  phone: string;
  college: string;
  year: string;
  branch: string;
}

export default function RegistrationForm({
  eventTitle,
  eventDate,
  eventTime,
  eventDescription,
  registrationFee = "Free",
  feeAmount = 0,
}: RegistrationFormProps) {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserData | null>(null);
  const [eventData, setEventData] = useState({
    experience: "",
    teamSize: "1",
    teamMembers: "",
    expectations: "",
    dietaryRestrictions: "",
    tshirtSize: "M",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedDetails = localStorage.getItem("userDetails");
    if (storedDetails) {
      setUserDetails(JSON.parse(storedDetails));
    } else {
      // Redirect to login if not logged in
      router.push(
        "/login?redirect=" + encodeURIComponent(window.location.pathname)
      );
    }
  }, [router]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store registration data
    const registrationData = {
      ...userDetails,
      ...eventData,
      eventTitle,
      eventDate,
      eventTime,
      registrationFee,
      registeredAt: new Date().toISOString(),
    };

    // Store in localStorage (in real app, send to API)
    const existingRegistrations = JSON.parse(
      localStorage.getItem("registrations") || "[]"
    );
    existingRegistrations.push(registrationData);
    localStorage.setItem(
      "registrations",
      JSON.stringify(existingRegistrations)
    );

    setIsSubmitting(false);
    setSubmitted(true);
  };

  // Show loading if user data not loaded yet
  if (!userDetails) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="bg-zinc-800 rounded-lg shadow-xl p-8 text-center border border-zinc-700">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Registration Successful!
            </h2>
            <p className="text-zinc-300 mb-6">
              Thank you for registering for <strong>{eventTitle}</strong>.
              {feeAmount > 0 && (
                <span> Payment of {registrationFee} has been processed.</span>
              )}
              You'll receive a confirmation email shortly.
            </p>
            <Link
              href="/#events"
              className="inline-block bg-zinc-600 text-white px-6 py-2 rounded-lg hover:bg-zinc-500 transition duration-300"
            >
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Event Header */}
        <div className="bg-zinc-800 rounded-lg shadow-xl p-6 mb-8 border border-zinc-700">
          <Link
            href="/#events"
            className="text-zinc-400 hover:text-white mb-4 inline-block"
          >
            ← Back to Events
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">{eventTitle}</h1>
          <div className="text-zinc-300 space-y-1">
            <p>Date: {eventDate}</p>
            <p>Time: {eventTime}</p>
            <p>
              Registration Fee:{" "}
              <span className="text-green-400">{registrationFee}</span>
            </p>
          </div>
          <p className="text-zinc-400 mt-4">{eventDescription}</p>
        </div>

        {/* User Details Display */}
        <div className="bg-zinc-800 rounded-lg shadow-xl p-6 mb-8 border border-zinc-700">
          <h2 className="text-xl font-bold text-white mb-4">Registered User</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-zinc-400">Name:</span>{" "}
              <span className="text-white">{userDetails.name}</span>
            </div>
            <div>
              <span className="text-zinc-400">Email:</span>{" "}
              <span className="text-white">{userDetails.email}</span>
            </div>
            <div>
              <span className="text-zinc-400">Phone:</span>{" "}
              <span className="text-white">{userDetails.phone}</span>
            </div>
            <div>
              <span className="text-zinc-400">Age:</span>{" "}
              <span className="text-white">{userDetails.age}</span>
            </div>
            <div>
              <span className="text-zinc-400">College:</span>{" "}
              <span className="text-white">{userDetails.college}</span>
            </div>
            <div>
              <span className="text-zinc-400">Year:</span>{" "}
              <span className="text-white">{userDetails.year}</span>
            </div>
            <div>
              <span className="text-zinc-400">Branch:</span>{" "}
              <span className="text-white">{userDetails.branch}</span>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= 1
                  ? "bg-zinc-600 text-white"
                  : "bg-zinc-700 text-zinc-400"
              }`}
            >
              1
            </div>
            <div
              className={`h-1 w-16 ${
                currentStep >= 2 ? "bg-zinc-600" : "bg-zinc-700"
              }`}
            ></div>
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= 2
                  ? "bg-zinc-600 text-white"
                  : "bg-zinc-700 text-zinc-400"
              }`}
            >
              2
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-zinc-800 rounded-lg shadow-xl p-8 border border-zinc-700">
          <h2 className="text-2xl font-bold text-white mb-6">
            {currentStep === 1 ? "Event Details" : "Payment"}
          </h2>

          {/* Step 1: Event-specific details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={eventData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  >
                    <option value="">Select Experience</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    T-Shirt Size
                  </label>
                  <select
                    name="tshirtSize"
                    value={eventData.tshirtSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Team Size
                  </label>
                  <select
                    name="teamSize"
                    value={eventData.teamSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  >
                    <option value="1">Individual</option>
                    <option value="2">2 Members</option>
                    <option value="3">3 Members</option>
                    <option value="4">4 Members</option>
                    <option value="5">5+ Members</option>
                  </select>
                </div>
                {eventData.teamSize !== "1" && (
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                      Team Members (Names & Emails)
                    </label>
                    <textarea
                      name="teamMembers"
                      value={eventData.teamMembers}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                      placeholder="Enter team member details..."
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  What do you expect from this event?
                </label>
                <textarea
                  name="expectations"
                  value={eventData.expectations}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="Share your expectations..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Dietary Restrictions/Allergies
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={eventData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="Any dietary restrictions..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-zinc-600 text-white py-3 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition duration-300"
                >
                  {feeAmount > 0
                    ? `Proceed to Payment (${registrationFee})`
                    : "Complete Registration"}{" "}
                  &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-zinc-700 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Payment Summary
                </h3>
                <div className="space-y-2 text-zinc-300">
                  <div className="flex justify-between">
                    <span>Event:</span>
                    <span className="text-white">{eventTitle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration Fee:</span>
                    <span className="text-green-400 font-semibold">
                      {registrationFee}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-zinc-600 pt-2">
                    <span className="font-semibold">Total:</span>
                    <span className="text-green-400 font-semibold">
                      {registrationFee}
                    </span>
                  </div>
                </div>
              </div>

              {feeAmount > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Payment Method
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      className="p-4 border border-zinc-600 rounded-lg hover:border-zinc-500 transition duration-300"
                    >
                      <div className="text-white font-medium">UPI</div>
                      <div className="text-zinc-400 text-sm">
                        Google Pay, PhonePe, Paytm
                      </div>
                    </button>
                    <button
                      type="button"
                      className="p-4 border border-zinc-600 rounded-lg hover:border-zinc-500 transition duration-300"
                    >
                      <div className="text-white font-medium">Card</div>
                      <div className="text-zinc-400 text-sm">
                        Credit/Debit Card
                      </div>
                    </button>
                    <button
                      type="button"
                      className="p-4 border border-zinc-600 rounded-lg hover:border-zinc-500 transition duration-300"
                    >
                      <div className="text-white font-medium">Net Banking</div>
                      <div className="text-zinc-400 text-sm">All Banks</div>
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-6 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Processing..."
                    : feeAmount > 0
                    ? `Pay ${registrationFee} & Register`
                    : "Complete Registration"}
                </button>

                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-full bg-zinc-700 text-white py-2 px-4 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition duration-300"
                >
                  ← Back to Event Details
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
