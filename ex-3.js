// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = scores[0]
for (let i = 1; i < scores.length; i++) {
    if (minScore > scores[i] ) {
       minScore = scores[i];
    } 
    console.log(minScore)
}

console.log(minScore);
