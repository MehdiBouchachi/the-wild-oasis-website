"use client";
import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();
  // CHANGE

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;
  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const { regularPrice, discount } = cabin;
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <div className="pb-4 md:pb-0">
        <DayPicker
          className="pt-6 md:pt-12 place-self-center"
          mode="range"
          onSelect={setRange}
          selected={displayRange}
          min={minBookingLength + 1}
          max={maxBookingLength}
          fromMonth={new Date()}
          fromDate={new Date()}
          toYear={new Date().getFullYear() + 5}
          captionLayout="dropdown"
          numberOfMonths={2}
          disabled={(curDate) =>
            isPast(curDate) ||
            bookedDates.some((date) => isSameDay(date, curDate))
          }
        />
      </div>

      <div className="flex justify-between items-center flex-wrap gap-x-2 gap-y-2 px-4 sm:px-6 py-4 bg-accent-500 text-primary-800 text-sm sm:text-base md:text-xl">
        <div className="flex flex-wrap items-baseline gap-2">
          <p className="flex gap-1 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>

          {numNights && (
            <>
              <p className="bg-accent-600 px-2 py-1 text-xs sm:text-sm rounded-sm">
                × {numNights}
              </p>
              <p className="text-xs sm:text-sm">
                <span className="font-bold uppercase">Total</span>{" "}
                <span className="text-base md:text-xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          )}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 px-3 py-1.5 text-xs sm:text-sm font-semibold whitespace-nowrap"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
