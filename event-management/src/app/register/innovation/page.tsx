import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function InnovationRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Innovation Ideas Showcase"
        eventDate="June 5, 2025"
        eventTime="2:00 PM - 5:00 PM"
        eventDescription="Present your innovative ideas and creative solutions."
        registrationFee="Free"
        feeAmount={0}
      />
    </ProtectedRoute>
  );
}
