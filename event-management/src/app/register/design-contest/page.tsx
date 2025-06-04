import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DesignContestRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="UI/UX Design Contest"
        eventDate="June 5, 2025"
        eventTime="11:00 AM - 3:00 PM"
        eventDescription="Design user-friendly interfaces and exceptional user experiences."
        registrationFee="₹149"
        feeAmount={149}
      />
    </ProtectedRoute>
  );
}