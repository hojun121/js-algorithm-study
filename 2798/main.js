let [inputs, cardArr] = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(str => str.split(" ").map(str => Number(str)));
const [cardCnt, maxSumOfCard] = inputs;
let resultSum = 0;

const newBlackJack = () => {
    for(let first = 0; first < cardCnt-2; first++) {
       for(let second = first + 1; second < cardCnt-1; second++) {
           if (first+second >= maxSumOfCard) break;
           for(let thrid = second +1; thrid < cardCnt; thrid++) {
               let sum = cardArr[first] + cardArr[second] + cardArr[thrid];
               if (sum > resultSum && sum <= maxSumOfCard) resultSum = sum;
           }
       }
    }
    console.log(resultSum);
};

newBlackJack();