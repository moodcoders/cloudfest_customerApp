export async function getProfileDetails(id: string | null) {
  try {
    const response = await fetch(
      `http://192.168.1.11:4000/auth/customer/?id=${id}`,
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
