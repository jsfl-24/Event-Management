import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CybersecurityRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Cybersecurity Challenge"
        eventDate="June 5, 2025"
        eventTime="1:00 PM - 6:00 PM"
        eventDescription="Test your skills in ethical hacking and security protocols."
        registrationFee="₹249"
        feeAmount={249}
      />
    </ProtectedRoute>
  );
}
