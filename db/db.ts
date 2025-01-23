"use server";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load environment variables from .env file
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Executes a SQL query and returns the results.
 * @param query - The SQL query string.
 * @param values - Optional array of values for parameterized queries.
 * @returns A promise resolving to an array of results.
 */
async function executeQuery<T>(
  query: string,
  values?: (string | number | undefined)[]
): Promise<T[]> {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query<mysql.RowDataPacket[]>(
      query,
      values
    );
    return results as T[];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    connection.release();
  }
}

// ----------------------------- Provider Auth Like Google <Start> -----------------------------

/**
 * Handles user credentials for provider-based authentication (e.g., Google).
 * @param email - User's email.
 * @param name - User's name (optional).
 * @param image - User's profile image URL (optional).
 * @returns An object containing the user data.
 */
export async function userCredentials(
  email: string,
  name?: string,
  image?: string
) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  const user: any = existingUser[0];

  // Update user's name and image if they have changed
  if (user && (user.name !== name || user.image_url !== image)) {
    await executeQuery(
      "UPDATE users SET name = ?, image_url = ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
      [name, image, email]
    );
    user.name = name;
    user.image_url = image;
    return { user };
  }

  // Create a new user if they don't exist
  if (!user) {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const randomPassword = Math.floor(Math.random() * 100000000000000);
    const hashedPassword = await bcrypt.hash(`${randomPassword}`, 10);
    const verified = 1;

    const userData: any = await executeQuery(
      "INSERT INTO users (name, email, password, verified, verCode, image_url) VALUES (?, ?, ?, ?, ?, ?) RETURNING id, phone, role, country, state",
      [name, email, hashedPassword, verified, verificationCode, image]
    );

    const userId = userData[0].id;

    const newUser = {
      id: userId,
      name: name,
      email: email,
      phone: userData[0].phone,
      role: userData[0].role,
      profilePath: image,
      verified: 1,
      country: userData[0].country,
      state: userData[0].state,
    };

    return { user: newUser };
  }

  return { user };
}

// ----------------------------- Provider Auth Like Google <End> -----------------------------

// ----------------------------- Add New User <Start> -----------------------------
/**
 * Adds a new user to the database.
 * @param email - User's email.
 * @param password - User's password.
 * @param verCode - Verification code.
 * @returns An empty object on success, or an error object if the email already exists.
 */
export async function addNewUser(
  email: string,
  password: string,
  verCode: number
) {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await executeQuery(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?, ?)",
    [email, hashedPassword, verCode]
  );

  return {};
}
// ----------------------------- Add New User <End> -----------------------------

// ----------------------------- Login Authentication <Start> -----------------------------
/**
 * Authenticates a user based on email and password.
 * @param email - User's email.
 * @param password - User's password.
 * @returns An object containing user data on success, or an error object if authentication fails.
 */
export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery(
    "SELECT id, name, phone, bio, role, image_url, password FROM users WHERE email = ?",
    [email]
  );
  
  if (existingUser.length === 0) {
    return { errors: { email: "* Invalid email" } };
  }

  const user: any = existingUser[0];
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }

  return { user };
}

// ----------------------------- Login Authentication <End> -----------------------------

/**
 * Retrieves user data from the database by ID.
 * @param id - User's ID.
 * @returns An object containing user data, or an error object if the user is not found.
 */
export async function getUserDataFromDB(id: number) {
  const existingUser = await executeQuery("SELECT * FROM users WHERE id = ?", [
    id,
  ]);

  if (existingUser.length === 0) {
    return { errors: { id: "* Invalid user ID" } };
  }

  return existingUser[0];
}

// ---------------------------------------------------------------------------------------

/**
 * Updates a user's profile data.
 * @param email - User's email.
 * @param bio - User's bio.
 * @param name - User's name.
 * @param age - User's age.
 * @param phone - User's phone number.
 * @param country - User's country.
 * @param city - User's city.
 * @param university - User's university.
 * @param school - User's school.
 * @param image_url - User's profile image URL.
 * @returns The result of the update query.
 */
export async function updateUserProfileData(
  email: string,
  bio: string,
  name: string,
  age: number,
  phone: string,
  country: string,
  city: string,
  university: string,
  school: string,
  image_url: string
) {
  const updateData = await executeQuery(
    "UPDATE users SET bio = ?, name = ?, age = ?, phone = ?, country = ?, city = ?, university = ?, school = ?, image_url = ? WHERE email = ?",
    [bio, name, age, phone, country, city, university, school, image_url, email]
  );

  return updateData;
}
