import { CheckGeneratedOtp } from "@/components/service/VonageService";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { clientId, otp } = await request.json();
  // console.log(clientId, otp, "comming from server side");
  try {
    const response = await CheckGeneratedOtp(clientId, otp);
    // console.log("response form otp route page", response);
    return NextResponse.json({
      status: 200,
      success: true,
      message: response,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send Otp" });
  }
}
