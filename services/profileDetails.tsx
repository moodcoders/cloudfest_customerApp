import { profileDataType } from "../screens/UserProfile";
import { AUTH_SERVICE } from './otp';

export async function getProfileDetails(id: string | null) {
  try {
    const response = await fetch(
      `https://https://auth-service-ffptpmrzya-el.a.run.app/auth/customer/?id=${id}`,
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
      `${AUTH_SERVICE}/auth/customer/update/?id=${id}`,
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