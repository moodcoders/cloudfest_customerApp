const AUTH_API = 'http://192.168.1.11:4000';
import { notifyMessage } from '../constants/NotifyMessage';

/**generateOtpAPI is generating OTP for the user */
export const generateOtpAPI = async (mobileNumber: string) => {
  try {
    const response = await fetch(`${AUTH_API}/auth/userOtp/generate-otp`, {
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
    const response = await fetch(`${AUTH_API}/auth/userOtp/userlogin`, {
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
    if (!response.ok) {
      throw new Error(jsonResponse.message);
    }
    return jsonResponse;
  } catch (err) {
    notifyMessage('Wrong Otp');
    throw err;
  }
};
