import { profileDataType } from "../screens/UserProfile";

export async function getProfileDetails(id: string | null) {
  try {
    const response = await fetch(
      `http://192.168.0.113:4000/auth/customer/?id=${id}`,
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

export async function saveProfileDetails(id: string | null, profileData: any) {
  try {
    const response = await fetch(
      `http://192.168.0.113:4000/auth/customer/update/?id=${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData)
      },
    );
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}