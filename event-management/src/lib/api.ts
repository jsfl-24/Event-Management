const API_BASE_URL = 'http://localhost:8000/api';

interface LoginCredentials {
  phone: string;
  password: string;
}

interface RegisterData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  age: string;
  college: string;
  year: string;
  branch: string;
}

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  age: string;
  college: string;
  year: string;
  branch: string;
  created_at: string;
}

interface LoginResponse {
  token: string;
  user: User;
  message: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  fee: string;
  fee_amount: number;
  event_type: string;
  day: number;
  is_key_event: boolean;
  max_participants: number;
  registered_count: number;
  spots_left: number;
  created_at: string;
}

const api = {
  // Events
  getEvents: async (): Promise<Event[]> => {
    const response = await fetch(`${API_BASE_URL}/events/`);
    if (!response.ok) throw new Error('Failed to fetch events');
    return response.json();
  },

  getEvent: async (id: string): Promise<Event> => {
    const response = await fetch(`${API_BASE_URL}/events/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch event');
    return response.json();
  },

  // Auth
  registerUser: async (userData: RegisterData): Promise<LoginResponse> => {
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

  loginUser: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await fetch(`${API_BASE_URL}/users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }
    return response.json();
  },

  getUserProfile: async (token: string): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/users/profile/`, {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
  },

  logoutUser: async (token: string): Promise<{ message: string }> => {
    const response = await fetch(`${API_BASE_URL}/users/logout/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
      },
    });
    if (!response.ok) throw new Error('Logout failed');
    return response.json();
  },

  // Registrations
  registerForEvent: async (eventId: number, token: string, paymentData: any) => {
    const response = await fetch(`${API_BASE_URL}/registrations/register/${eventId}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Registration failed');
    }
    return response.json();
  },
};

export default api;