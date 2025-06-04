import RegistrationForm from "@/components/RegistrationForm";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function HackathonRegistration() {
  return (
    <ProtectedRoute>
      <RegistrationForm
        eventTitle="24-Hour Hackathon"
        eventDate="June 6, 2025"
        eventTime="24 Hours"
        eventDescription="Non-stop coding marathon to build innovative solutions with fellow developers."
        registrationFee="₹499"
        feeAmount={499}
      />
    </ProtectedRoute>
  );
}
