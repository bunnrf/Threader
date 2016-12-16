const apiRequest = async (url, method, payload) => {
  let options = {
    method,
    body: null,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (payload) options = { ...options, body: JSON.stringify(payload) };
  const response = await fetch(url, options);
  return await response.json();
};

export const getRequest = async (url) => apiRequest(url, 'GET');
