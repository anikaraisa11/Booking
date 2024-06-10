import { Vonage } from "@vonage/server-sdk";

const vonage = new Vonage({
  apiKey: process.env.NEXT_PUBLIC_VONAGE_API_KEY,
  apiSecret: process.env.NEXT_PUBLIC_VONAGE_API_SECRET,
  brandName: process.env.NEXT_PUBLIC_VONAGE_BRAND_NAME,
});

export async function sendOtp(RECIPIENT_NUMBER) {
  try {
    const response = await vonage.verify.start({
      number: RECIPIENT_NUMBER,
      brand: "solvemeet",
    });

    const requestId = response.request_id;

    if (response.errorText) {
      throw response.errorText;
    } else {
      return requestId;
    }
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}

export async function CheckGeneratedOtp(REQUEST_ID, CODE) {
  console.log(REQUEST_ID, CODE, "comming from CheckGeneratedOtp otp");
  try {
    const response = await vonage.verify.check(REQUEST_ID, CODE);

    const { status, errorText } = response || {};

    // console.log(response);
    let resultStatus = "";

    if (errorText) {
      resultStatus = errorText;
    } else if (status === "0") {
      resultStatus = "OK";
    } else if (status === "16") {
      resultStatus = "Wrong";
    } else {
      resultStatus = "Invalid Or Something Getting Wrong";
    }

    return resultStatus;
  } catch (error) {
    console.log("Error", error);
    throw error;
  }
}
