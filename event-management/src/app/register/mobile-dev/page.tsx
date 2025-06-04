import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function MobileDevRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="Mobile App Development"
        eventDate="June 6, 2025"
        eventTime="10:00 AM - 4:00 PM"
        eventDescription="Create cross-platform mobile applications from scratch."
        registrationFee="₹299"
        feeAmount={299}
      />
    </ProtectedRoute>
  );
}
