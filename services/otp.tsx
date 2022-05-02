export const AUTH_SERVICE = 'https://auth-service-ffptpmrzya-el.a.run.app';
import { notifyMessage } from '../constants/NotifyMessage';
import * as SecureStore from 'expo-secure-store';

/**generateOtpAPI is generating OTP for the user */
export const generateOtpAPI = async (mobileNumber: string) => {
  try {
    const response = await fetch(`${AUTH_SERVICE}/auth/userOtp/generate-otp`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mobileNumber: mobileNumber,
      }),
    });
    const jsonResponse = await response.json();
    notifyMessage(JSON.stringify(jsonResponse.message));
  } catch (err) {
    if (err instanceof Error) {
      notifyMessage(err.message);
    }
  }
};

/**validateOtp is generating token for the user */
export const validateOtp = async (mobileNumber: string, otp: string) => {
  try {
    const response = await fetch(`${AUTH_SERVICE}/auth/userOtp/userlogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: mobileNumber,
        password: otp,
      }),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    await SecureStore.setItemAsync('id', jsonResponse.user.user._id);
    return jsonResponse;
  } catch (err) {
    notifyMessage('Wrong Otp');
    throw err;
  }
};
