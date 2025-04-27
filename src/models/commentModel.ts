import pool from "../config/db";

export const createComment = async (
  postId: number,
  userId: number,
  content: string
) => {
  const result = await pool.query(
    "INSERT INTO comments (post_id, user_id, content) VALUES ($1, $2, $3) RETURNING *",
    [postId, userId, content]
  );
  return result.rows[0];
};
