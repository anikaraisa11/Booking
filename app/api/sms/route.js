import { sendOtp } from "@/components/service/VonageService";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { to } = await request.json();
  try {
    const requestId = await sendOtp(to);
    // console.log("you are getting request id", requestId);
    return NextResponse.json({
      success: true,
      message: "SMS sent successfully",
      resquestId: requestId,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to send SMS" });
  }
}
