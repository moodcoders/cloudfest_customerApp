export async function getServices() {
  try {
    const response = await fetch(
      `http://192.168.1.11:4001/v1/services/listAll`,
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
