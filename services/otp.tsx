const AUTH_API = 'http://192.168.1.11:4000';

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
    alert(JSON.stringify(jsonResponse.message));
  } catch (err) {
    alert(err);
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
    console.log(await response.json());
  } catch (err) {
    alert(err);
  }
};

/**googleAuth is used for Google Authentication */
export const googleAuth = async () => {
  try {
    const response = await fetch(`${AUTH_API}/auth/google/login`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(await response.json());
  } catch (err) {
    console.log(err);
  }
};
