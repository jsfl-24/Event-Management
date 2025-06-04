"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface UserData {
  name: string;
  email: string;
  age: string;
  phone: string;
  college: string;
  year: string;
  branch: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<UserData>({
    name: "",
    email: "",
    age: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validation for step 1 (Personal Details)
  const isStep1Valid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.age.trim() !== "" &&
    formData.phone.trim() !== "";

  // Validation for step 2 (Academic Details)
  const isStep2Valid =
    formData.college.trim() !== "" &&
    formData.year.trim() !== "" &&
    formData.branch.trim() !== "";

  const handleNextStep = () => {
    if (isStep1Valid) {
      setCurrentStep(2);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isStep2Valid) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store user data in localStorage
    localStorage.setItem("userDetails", JSON.stringify(formData));

    setIsSubmitting(false);

    // Check for redirect URL
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirect");

    // Redirect to original page or home
    router.push(redirectUrl || "/");
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 border border-zinc-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Take Down 2.0
            </h1>
            <p className="text-zinc-400">
              {currentStep === 1
                ? "Personal Information"
                : "Academic Information"}
            </p>
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

          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    max="30"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="Enter your age"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={!isStep1Valid}
                  className="w-full bg-zinc-600 text-white py-3 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next: Academic Details &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Academic Details */}
          {currentStep === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  College/University *
                </label>
                <input
                  type="text"
                  name="college"
                  required
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  placeholder="Enter your college/university name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Year of Study *
                  </label>
                  <select
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  >
                    <option value="">Select Year</option>
                    <option value="1st">1st Year</option>
                    <option value="2nd">2nd Year</option>
                    <option value="3rd">3rd Year</option>
                    <option value="4th">4th Year</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Post Graduate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">
                    Branch/Department *
                  </label>
                  <input
                    type="text"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
                    placeholder="e.g., Computer Science, IT, etc."
                  />
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <button
                  type="submit"
                  disabled={!isStep2Valid || isSubmitting}
                  className="w-full bg-zinc-600 text-white py-3 px-4 rounded-md hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Saving..." : "Enter Event"}
                </button>

                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="w-full bg-zinc-700 text-white py-2 px-4 rounded-md hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition duration-300"
                >
                  &larr; Back to Personal Details
                </button>
              </div>
            </form>
          )}

          {/* Step indicator text */}
          <div className="mt-6 text-center">
            <p className="text-xs text-zinc-500">
              Step {currentStep} of 2 -{" "}
              {currentStep === 1
                ? "Personal Information"
                : "Academic Information"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
