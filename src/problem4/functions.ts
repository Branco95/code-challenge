
// The for loop iterates n times, adding each number to the accumulator sum.

function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;

}

// Similar to the previous function, the while loop iterates n times.

function sum_to_n_b(n: number): number {
    let sum = 0;
    let i = 1;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}´


// Using the formula n*(n+1)/2 to calculate the sum of the first n numbers.

function sum_to_n_c(n: number): number {
    return (n * (n + 1)) / 2;
}
