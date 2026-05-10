const API_BASE = "/api";

export function getToken(): string | null {
  return localStorage.getItem("admin_token");
}

export function setToken(token: string) {
  localStorage.setItem("admin_token", token);
}

export function clearToken() {
  localStorage.removeItem("admin_token");
}

async function request<T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken();
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// Auth
export const authApi = {
  login: (username: string, password: string) =>
    request<{ token: string; user: any }>("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    }),
};

// Posts
export const postsApi = {
  list: () => request<any[]>("/posts"),
  adminList: () => request<any[]>("/admin/posts"),
  get: (slug: string) => request<any>(`/posts/${slug}`),
  create: (data: any) =>
    request<any>("/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  update: (id: number, data: any) =>
    request<any>(`/admin/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/posts/${id}`, { method: "DELETE" }),
};

// Events
export const eventsApi = {
  list: () => request<any[]>("/events"),
  create: (data: any) =>
    request<any>("/admin/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  update: (id: number, data: any) =>
    request<any>(`/admin/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/events/${id}`, { method: "DELETE" }),
};

// Books
export const booksApi = {
  list: () => request<any[]>("/books"),
  create: (data: any) =>
    request<any>("/admin/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  update: (id: number, data: any) =>
    request<any>(`/admin/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/books/${id}`, { method: "DELETE" }),
};

// Courses
export const coursesApi = {
  list: () => request<any[]>("/courses"),
  create: (data: any) =>
    request<any>("/admin/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  update: (id: number, data: any) =>
    request<any>(`/admin/courses/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/courses/${id}`, { method: "DELETE" }),
};

// Videos
export const videosApi = {
  list: () => request<any[]>("/videos"),
  create: (data: any) =>
    request<any>("/admin/videos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  update: (id: number, data: any) =>
    request<any>(`/admin/videos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/videos/${id}`, { method: "DELETE" }),
};

// Gallery
export const galleryApi = {
  list: () => request<any[]>("/gallery"),
  create: (data: any) =>
    request<any>("/admin/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }),
  delete: (id: number) =>
    request<any>(`/admin/gallery/${id}`, { method: "DELETE" }),
};