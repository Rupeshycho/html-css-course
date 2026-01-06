function bruteforce(charset, check) {
    const n = charset.length;
    let indices = [0];

    while (true) {
        let attempt = indices.map(i => charset[i]).join("");

        if (check(attempt)) {
            return attempt;
        }

        // move to next combination
        let i = indices.length - 1;
        while (i >= 0) {
            indices[i]++;
            if (indices[i] < n) break;
            indices[i] = 0;
            i--;
        }

        if (i < 0) {
            indices.unshift(0);
        }
    }
}

const charset = "abc";

function check(password) {
    return password === "cab";
}

const result = bruteforce(charset, check);
console.log("Found:", result);
