export async function getBookingsForUser(userId: string) {
  try {
    const response = await fetch(
      `http://192.168.1.25:4001/v1/bookings/?id=${userId}`,
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
      `http://192.168.1.25:4001/v1/booking/?id=${bookingId}`,
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
