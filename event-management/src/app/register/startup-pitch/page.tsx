import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function StartupPitchRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Startup Pitch"
        eventDate="June 5, 2025"
        eventTime="2:00 PM - 6:00 PM"
        eventDescription="Present your tech startup ideas to industry experts and investors."
        registrationFee="Free"
        feeAmount={0}
      />
    </ProtectedRoute>
  );
}
