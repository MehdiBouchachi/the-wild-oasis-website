import EditReservationForm from "@/app/_components/EditReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // CHANGE
  const reservationId = params.bookingId;
  const { cabinId, numGuests, observations } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);
  const booking = { numGuests, observations };

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <EditReservationForm
        reservationId={reservationId}
        booking={booking}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
