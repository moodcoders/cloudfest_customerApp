const GENERATE_OTP_API = 'http://192.168.1.11:4000/auth/otp/generate-otp';
const VALIDATE_OTP_API = 'http://192.168.1.11:4000/auth/otp/login';

export const generateOtpAPI = async (mobileNumber: string) => {
    const response = await fetch(GENERATE_OTP_API, {
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
};

export const validateOtp = async (mobileNumber: string, otp: string) => {
    console.log(mobileNumber, otp)
    const response = await fetch(VALIDATE_OTP_API, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: mobileNumber,
            password: otp
        }),
    })
    console.log(await response.json());

}