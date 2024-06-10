export async function SendOtp(url, RECIPIENT_NUMBER) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: RECIPIENT_NUMBER,
    }),
  });

  const data = await response.json();

  if (data.success) {
    const { resquestId } = data;

    return resquestId;
  } else {
    return null;
  }
}
