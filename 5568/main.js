// '/dev/stdin'
let [n, k, ...cards] = require("fs").readFileSync('5568/example.txt').toString().trim().split("\n");
const [N, K] = [n, k].map(Number);

const nums = [];
const ch = Array.from({ length: 100 }).fill(0);
let cnt = 0;

// 각 숫자 개수
for (let i = 0; i < cards.length; i++) {
  if (ch[cards[i]]) continue;
  ch[cards[i]] = cards.filter((card) => card === cards[i]).length;
}

function dfs(L, num) {
  if (L === K) {
    if (!nums.includes(num)) {
      cnt++;
      nums.push(num);
    }
  } else {
    // 정수 만들기
    for (let i = 0; i < N; i++) {
      const nx = cards[i];
      if (ch[nx]) {
        ch[nx] -= 1; // 사용 O
        dfs(L + 1, num + nx);
        ch[nx] += 1; // 사용 X
      }
    }
  }
}

dfs(0, "");
console.log(cnt);