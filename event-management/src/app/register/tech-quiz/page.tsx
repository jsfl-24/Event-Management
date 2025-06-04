import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TechQuizRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Tech Quiz Competition"
        eventDate="June 6, 2025"
        eventTime="3:00 PM - 6:00 PM"
        eventDescription="Test your knowledge in various technology domains and win prizes."
        registrationFee="₹99"
        feeAmount={99}
      />
    </ProtectedRoute>
  );
}
