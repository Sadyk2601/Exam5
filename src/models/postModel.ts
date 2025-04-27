import pool from "../config/db";

export const createPost = async (
  blogId: number,
  userId: number,
  title: string,
  content: string
) => {
  const result = await pool.query(
    "INSERT INTO posts (blog_id, user_id, title, content) VALUES ($1, $2, $3, $4) RETURNING *",
    [blogId, userId, title, content]
  );
  return result.rows[0];
};

export const getPostsByBlogId = async (blogId: number) => {
  const result = await pool.query("SELECT * FROM posts WHERE blog_id = $1", [
    blogId,
  ]);
  return result.rows;
};
