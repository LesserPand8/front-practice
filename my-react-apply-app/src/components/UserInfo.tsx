import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function UserInfo() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: controller.signal },
        );
        if (!response.ok) {
          throw new Error("ユーザー情報の取得に失敗しました");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      controller.abort();
    };
  }, [userId]);

  const handleNextUser = () => {
    setUserId((id) => id + 1);
  };

  return (
    <div>
      <h1>ユーザー情報</h1>
      <p>User ID: {userId}</p>

      {/* 条件付きレンダリング */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {user && (
        <div>
          <p>
            <strong>名前:</strong> {user.name}
          </p>
          <p>
            <strong>ユーザー名:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      )}

      <button onClick={handleNextUser} disabled={loading}>
        {loading ? "読み込み中..." : "次のユーザーへ"}
      </button>
    </div>
  );
}

export default UserInfo;
