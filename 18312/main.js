// '/dev/stdin'
let [n, k] = require('fs').readFileSync('18312/example.txt').toString().trim().split(" ");

const cntTime = () => {
    let cnt = 0;

    for (let h = 0; h <= Number(n); h++) {
        const hStr = (h < 10) ? '0' + h.toString() : h.toString();
        for (let m = 0; m < 60; m++) {
            const mStr = (m < 10) ? '0' + m.toString() : m.toString();
            for (let s = 0; s < 60; s++) {
                const sStr = (s < 10) ? '0' + s.toString() : s.toString();
                if (hStr.includes(k) || mStr.includes(k) || sStr.includes(k)) {
                    cnt++;
                }
            }
        }
    }
    console.log(cnt);
};

cntTime();