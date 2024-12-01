import axios from "axios";

const API_BASE = "https://jsonplaceholder.typicode.com";


export const fetchUsers = async () => {
  return handleApiError(
    fetch(`${API_URL}/users`).then(res => res.json())
  );
};


export const fetchUserSummary = async (userId) => {
  const [posts, comments, todos] = await Promise.all([
    axios.get(`${API_BASE}/posts?userId=${userId}`).then((res) => res.data),
    axios.get(`${API_BASE}/comments?userId=${userId}`).then((res) => res.data),
    axios.get(`${API_BASE}/todos?userId=${userId}`).then((res) => res.data),
  ]);

  return {
    summary: { posts: posts.length, comments: comments.length, todos: todos.length },
    posts,
  };
};

export const fetchPost = async (id) => {
  const response = await axios.get(`${API_BASE}/posts/${id}`);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_BASE}/posts/${id}`);
  return response.status === 200;
};

export const updatePost = async (id, data) => {
  const response = await axios.put(`${API_BASE}/posts/${id}`, data);
  return response.status === 200;
};
