// Auth Utility Functions
// Simulates a JSON database stored in localStorage

const USERS_KEY = "users_database";

// Initialize users database if not exists
const initDatabase = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
  }
};

// Get all users from database
export const getAllUsers = () => {
  initDatabase();
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

// Find user by username
export const findUserByUsername = (username) => {
  const users = getAllUsers();
  return users.find((user) => user.username === username);
};

// Find user by email
export const findUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

// Add new user to database
export const addUser = (username, email, password) => {
  const users = getAllUsers();
  
  // Check if user already exists
  if (findUserByUsername(username)) {
    return { success: false, message: "Username sudah terdaftar" };
  }
  
  if (findUserByEmail(email)) {
    return { success: false, message: "Email sudah terdaftar" };
  }

  const newUser = {
    id: Date.now(),
    username,
    email,
    password, // In production, hash the password
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  return { success: true, message: "Akun berhasil dibuat" };
};

// Validate login credentials
export const validateLogin = (username, password) => {
  if (!username) {
    return { success: false, message: "Username harus diisi" };
  }
  
  if (!password) {
    return { success: false, message: "Password harus diisi" };
  }

  const user = findUserByUsername(username);
  
  if (!user) {
    return { success: false, message: "Username tidak terdaftar" };
  }

  if (user.password !== password) {
    return { success: false, message: "Password salah" };
  }

  return { success: true, message: "Login berhasil", user };
};

// Reset password by email
export const resetPassword = (email, newPassword) => {
  if (!email) {
    return { success: false, message: "Email harus diisi" };
  }

  if (!newPassword) {
    return { success: false, message: "Password baru harus diisi" };
  }

  const user = findUserByEmail(email);

  if (!user) {
    return { success: false, message: "Email belum terdaftar" };
  }

  const users = getAllUsers();
  const userIndex = users.findIndex((u) => u.email === email);
  users[userIndex].password = newPassword;
  users[userIndex].updatedAt = new Date().toISOString();

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  
  return { success: true, message: "Password berhasil direset" };
};

// Get current logged-in user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem("currentUser");
  return userStr ? JSON.parse(userStr) : null;
};

// Set current logged-in user
export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("currentUser");
  }
};

// Logout
export const logout = () => {
  localStorage.removeItem("currentUser");
};

// Export all users for debugging (optional)
export const exportUsers = () => {
  return getAllUsers();
};
