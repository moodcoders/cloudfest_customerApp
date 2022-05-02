import { AUTH_SERVICE } from './otp';

const APP_SERVICE='https://app-service-ffptpmrzya-el.a.run.app';

export async function getBookingsForUser(userId: string) {
  try {
    const response = await fetch(
      `${APP_SERVICE}/v1/bookings/?id=${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBookingDetails(bookingId: string) {
  try {
    const response = await fetch(
      `${APP_SERVICE}/v1/booking/?id=${bookingId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
