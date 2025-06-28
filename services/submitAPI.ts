

export const submitAPI = async (customer

): Promise<Response> => {
  const url = 'http://localhost:3000/api/submit/'
  const userResponse = await fetch(url, {method:'POST',
    body: JSON.stringify(customer)

  });

  if (!userResponse.ok) {
    const errorMessage = `Error: ${userResponse.status} ${userResponse.statusText}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return userResponse.json();
};
