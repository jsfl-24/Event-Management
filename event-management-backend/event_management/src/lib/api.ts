const API_BASE_URL = 'http://localhost:8000/api';

// API Functions
const api = {
  // Events
  getEvents: async () => {
    const response = await fetch(`${API_BASE_URL}/events/`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },

  getEvent: async (id: string) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch event');
    return response.json();
  },

  // Auth
  registerUser: async (userData: any) => {
    const response = await fetch(`${API_BASE_URL}/users/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }
    return response.json();
  },

  loginUser: async ({ phone, password }: LoginRequest): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    return response.json();
  },

  getUserProfile: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/users/profile/`, {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
  },

  logoutUser: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/users/logout/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
      },
    });
    if (!response.ok) throw new Error('Logout failed');
    return response.json();
  },
};

export default api;

interface LoginRequest {
  phone: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  age: string;
  college: string;
  year: string;
  branch: string;
  createdAt: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    age: string;
    college: string;
    year: string;
    branch: string;
    createdAt: string;
  };
}