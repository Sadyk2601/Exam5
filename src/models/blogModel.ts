import pool from "../config/db";

export const createBlog = async (
  userId: number,
  name: string,
  description: string
) => {
  const result = await pool.query(
    "INSERT INTO blogs (user_id, name, description) VALUES ($1, $2, $3) RETURNING *",
    [userId, name, description]
  );
  return result.rows[0];
};

export const getMyBlogs = async (userId: number) => {
  const result = await pool.query("SELECT * FROM blogs WHERE user_id = $1", [
    userId,
  ]);
  return result.rows;
};

export const getBlogById = async (id: number) => {
  const result = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);
  return result.rows[0];
};
