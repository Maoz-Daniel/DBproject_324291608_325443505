import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const BASE_URL = 'http://localhost:8000';

class ApiClient {
  private baseURL: string;
  private token: string | null;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.token = localStorage.getItem('token');
  }

  private formatEndpoint(endpoint: string) {
    return endpoint.endsWith('/') ? endpoint : endpoint + '/';
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${this.formatEndpoint(endpoint)}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token && { Authorization: `Bearer ${this.token}` }),
      ...options.headers,
    };

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      const isJson = response.headers
        .get('content-type')
        ?.includes('application/json');

      const data = isJson ? await response.json() : null;

      if (!response.ok) {
        const errorMessage = (data && data.detail) || response.statusText;
        throw new Error(errorMessage);
      }

      return data;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'An error occurred';
      console.error('❌ API request failed:', message);
      throw new Error(message);
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint);
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const urlParams = params
      ? '?' +
        Object.entries(params)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join('&')
      : '';

    return this.request<T>(endpoint + urlParams, {
      method: 'DELETE',
    });
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }
}

export const apiClient = new ApiClient(BASE_URL);

export function useApi<T>(endpoint: string, deps: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await apiClient.get<T>(endpoint);
      setData(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return { data, loading, error, refetch: fetchData };
}

export function useMutation<T, P = any>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async (
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: P | Record<string, any>
  ): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      let result: T;

      if (method === 'delete') {
        result = await apiClient.delete<T>(endpoint, data as Record<string, any>);
      } else {
        result = await apiClient[method]<T>(endpoint, data);
      }

      if (method !== 'get') {
        toast.success('✅ Operation completed successfully');
      }

      return result;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      toast.error(`❌ ${errorMessage}`);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, loading, error };
}
