const API_URL = process.env.EXPO_PUBLIC_API_URL;

const api = {
  get: async (endpoint: string) => {
    const url = appendEndpoint(endpoint);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}, Error: ${response.status}`);
    }
    return await response.json();
  },
  post: async (endpoint: string, data: any) => {
    const url = appendEndpoint(endpoint);
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error(`Failed to post ${endpoint}, Error: ${response.status}`);
    }
    return await response.json();
  },

  participants: {
    fetchById: async (id: string) => {
      const response = await api.get(`/participant/get/${id}`);
      console.log({ response });
      return response;
    },
  },

  login: async (username: string, password: string) => {
    const response = await api.post('/user/login/password', { username, password });
    console.log({ response });
    return response;
  },
};

function appendEndpoint(endpoint: string) {
  return `${API_URL}${endpoint}`;
}

export default api;
