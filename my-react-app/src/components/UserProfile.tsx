type UserProfileProps = {
  name: string;
  hobby: string;
  bio?: string;
  age?: number;
};

function UserProfile({
  name,
  hobby,
  bio = "よろしくお願いします。",
  age,
}: UserProfileProps) {
  return (
    // ルール1: 単一のルート要素で囲む
    // ルール3: classではなくclassNameを使う
    <div>
      <p>名前: {name}</p>
      {bio && <p>自己紹介: {bio}</p>}
      <p>趣味: {hobby}</p>
      {age && <p>年齢: {age}歳</p>}
      {/* ルール2: 閉じタグを忘れない */}
      <hr />
    </div>
  );
}

export default UserProfile;
