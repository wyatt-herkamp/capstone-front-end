const API_URL = process.env.EXPO_PUBLIC_API_URL;

const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}, Error: ${response.status}`);
    }
    return await response.json();
  },
  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to post ${endpoint}, Error: ${response.status}`);
    }
    return await response.json();
  },

  participants: {
    fetchById: async (id: string) => {
      return await api.get(`/participants/get/${id}`);
    },
  },

  login: async (username: string, password: string) => {
    const response = await api.post('/user/login/password', { username, password });
    console.log({ response });
    return response;
  },
};

export default api;
