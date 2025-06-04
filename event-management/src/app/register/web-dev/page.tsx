import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function WebDevRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Web Development Sprint"
        eventDate="June 6, 2025"
        eventTime="9:00 AM - 5:00 PM"
        eventDescription="Build responsive websites using modern frameworks and tools."
        registrationFee="₹199"
        feeAmount={199}
      />
    </ProtectedRoute>
  );
}
