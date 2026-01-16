const USERS_KEY = "users_database";

const initDatabase = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify([]));
  }
};

export const getAllUsers = () => {
  initDatabase();
  return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
};

export const findUserByUsername = (username) => {
  const users = getAllUsers();
  return users.find((user) => user.username === username);
};

export const findUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find((user) => user.email === email);
};

export const addUser = (username, email, password) => {
  const users = getAllUsers();
  
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
    password,
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

export const getCurrentUser = () => {
  const userStr = localStorage.getItem("currentUser");
  return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUser = (user) => {
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    localStorage.removeItem("currentUser");
  }
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};

export const exportUsers = () => {
  return getAllUsers();
};
