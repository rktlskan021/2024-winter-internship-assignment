function friendRecommendations(network, user) {
    let queue = [...network[user]];
    let memory = [user, ...network[user]];
    let result = [];
    while(queue.length != 0){
        d = queue.shift();

        network[d].map((v) => {
            if(!memory.includes(v)){
                result.push(v);
                memory.push(v);
                queue.push(v);
            }
        });
    }

    return result;
}

const network = {
    Alice: ["Bob", "Charlie"],
    Bob: ["Alice", "David"],
    Charlie: ["Alice", "Eve"],
    David: ["Bob"],
    Eve: ["Charlie"]
};

console.log(friendRecommendations(network, "Alice")); 
// 출력: ["David", "Eve"]
console.log(friendRecommendations(network, "Bob")); 
// 출력: ["Charlie"]
console.log(friendRecommendations(network, "Charlie")); 
// 출력: ["Bob", "David"]
console.log(friendRecommendations(network, "David")); 
// 출력: ["Alice", "Charlie", "Eve"]
console.log(friendRecommendations(network, "Eve")); 
// 출력: ["Alice", "Bob", "Charlie"]