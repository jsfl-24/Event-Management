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
    try {
      const response = await fetch(`${API_BASE_URL}/events/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Failed to fetch events');
    }
  },

  getEvent: async (id: string): Promise<Event> => {
    try {
      console.log('API: Fetching event with ID:', id);
      const response = await fetch(`${API_BASE_URL}/events/${id}/`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API: Error fetching event, trying fallback:', error);
      
      // Fallback data for testing
      const fallbackEvents: { [key: string]: Event } = {
        '1': {
          id: 1,
          title: 'AI/ML Workshop',
          description: 'Hands-on workshop covering machine learning fundamentals',
          date: '2025-06-05',
          time: '10:00 AM - 4:00 PM',
          fee: '₹299',
          fee_amount: 299,
          event_type: 'technical',
          day: 1,
          is_key_event: true,
          max_participants: 50,
          registered_count: 12,
          spots_left: 38,
          created_at: new Date().toISOString()
        },
        '2': {
          id: 2,
          title: '24-Hour Hackathon',
          description: 'Non-stop coding marathon to build innovative solutions',
          date: '2025-06-06',
          time: '24 Hours',
          fee: '₹499',
          fee_amount: 499,
          event_type: 'technical',
          day: 2,
          is_key_event: true,
          max_participants: 100,
          registered_count: 25,
          spots_left: 75,
          created_at: new Date().toISOString()
        }
      };
      
      if (fallbackEvents[id]) {
        console.log('Using fallback event data');
        return fallbackEvents[id];
      }
      
      throw new Error('Failed to fetch event and no fallback available');
    }
  },

  // Auth
  registerUser: async (userData: RegisterData): Promise<LoginResponse> => {
    try {
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
      
      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  loginUser: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
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
      
      return await response.json();
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  getUserProfile: async (token: string): Promise<User> => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/profile/`, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Profile fetch error:', error);
      throw error;
    }
  },

  logoutUser: async (token: string): Promise<{ message: string }> => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/logout/`, {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  // Registrations
  registerForEvent: async (eventId: number, token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/registrations/register/${eventId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Event registration error:', error);
      throw error;
    }
  },

  getUserRegistrations: async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/registrations/my-registrations/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch registrations');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching registrations:', error);
      throw error;
    }
  },
};

export default api;