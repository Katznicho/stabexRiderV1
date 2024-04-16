
// export const BASE_URL = "https://development.stabexinternational.com/loyaltyapi";

// export const BASE_URL = "https://checksum.co.ke/stabexmobileapi";
export const BASE_URL = "https://development.stabexinternational.com/loyaltyapi";




export const FETCH_COUNTRIES = `${BASE_URL}/api/Countries/CountriesList`
export const REGISTER_CUSTOMER = `${BASE_URL}/api/Account/Register`
export const REQUEST_SMS_OTP = `${BASE_URL}/api/Account/RequestSMSOTP`
export const REQUEST_EMAIL_OTP = `${BASE_URL}/api/Account/RequestEmailOTP`
export const VERIFY_EMAIL_OTP = `${BASE_URL}/api/Account/VerifyEmailOTP`
export const VERIFY_SMS_OTP = `${BASE_URL}/Account/VerifySMSOTP`
export const LOGIN_IN_USER = `${BASE_URL}/Token`;
export const VERIFY_LOGIN_OTP = `${BASE_URL}/api/Account/VerifyLoginSMSOTP`
export const LOGOUT_USER = `${BASE_URL}/api/Account/Logout`;
export const USER_FORGOT_PASSWORD = `${BASE_URL}/api/Account/ForgotPassword`
export const USER_SET_PASSWORD = `${BASE_URL}/api/Account/SetPassword`;
export const GET_STATIONS_LIST = `${BASE_URL}/api/Stations/StationsList`;
export const PRODUCT_LIST = `${BASE_URL}/api/Products/ProductsList`;
export const SUMBIT_DELIVERY_ADDRESS = `${BASE_URL}/api/Orders/SubmitDeliveryAddress`;
export const GET_CUSTOMER_ADDRESSES = `${BASE_URL}/api/Orders/MyDeliveryAddresses`;

//rider orders
export const GET_RIDER_ORDERS = `${BASE_URL}/api/Rider/RiderOrders`;



export const PROFILE_UPLOAD = `${BASE_URL}/auth/profileUpload`













