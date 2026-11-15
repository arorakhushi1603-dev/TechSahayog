
const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function submitForm(endpoint, formData) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Submission failed.");
  }

  return result;
}
