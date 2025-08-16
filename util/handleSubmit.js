
"use client";
const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: apiKey,
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }),
  });
  const result = await response.json();
  if (result.success) {
    console.log(result);
  }
}

export default handleSubmit;
