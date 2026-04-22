// UI要素を取得
const postsContainer = document.querySelector("#posts-container");
const loading = document.querySelector("#loading");
const error = document.querySelector("#error");
const empty = document.querySelector("#empty");

// 要素の表示・非表示を管理する関数
function show(element) {
  element.style.display = "block";
}
function hide(element) {
  element.style.display = "none";
}

async function fetchPosts() {
  // 1. 初期化：ローディング表示
  show(loading);
  hide(postsContainer);
  hide(error);
  hide(empty);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const posts = await response.json();

    // 成功したのでローディングを非表示
    hide(loading);

    // 2. 成功時の状態分岐
    if (posts.length === 0) {
      // データが空の場合
      show(empty);
    } else {
      // データがある場合
      show(postsContainer);
      postsContainer.innerHTML = ""; // コンテナをクリア
      posts.forEach((post) => {
        const card = document.createElement("div");
        card.className = "post-card";
        card.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postsContainer.appendChild(card);
      });
    }
  } catch (e) {
    // 3. エラー発生時の状態
    hide(loading);
    show(error);
    console.error("投稿の取得に失敗しました:", e);
  }
}

// 実行
fetchPosts();
