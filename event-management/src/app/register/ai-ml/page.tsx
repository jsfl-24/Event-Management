import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AIMLRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="AI/ML Workshop"
        eventDate="June 5, 2025"
        eventTime="10:00 AM - 4:00 PM"
        eventDescription="Hands-on workshop covering machine learning fundamentals and neural networks."
        registrationFee="₹299"
        feeAmount={299}
      />
    </ProtectedRoute>
  );
}
