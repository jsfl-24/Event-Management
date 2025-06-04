import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function GamingRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Gaming Tournament"
        eventDate="June 6, 2025"
        eventTime="12:00 PM - 8:00 PM"
        eventDescription="Competitive gaming event featuring popular esports titles."
        registrationFee="₹199"
        feeAmount={199}
      />
    </ProtectedRoute>
  );
}
