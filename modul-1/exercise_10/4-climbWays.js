function climb(n) {
    prev = 0;
    current = 1;
    next = 0;
    for (let i = 1; i <= n; i++) {
        next = prev + current;
        prev = current;
        current = next;
    }
    return current
}

console.log(climb(4))