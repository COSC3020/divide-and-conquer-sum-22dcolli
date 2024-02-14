# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

ANSWER(Revised):
Start with
T(n)=1 for n<1 and T(n)=3*T(n/3)

=>T(n/3)=3*T(n/3/3)

=>T(n)=3(3T(n/9))

=>9T(n/9)

=>(3^i)*T(n/3^i)

Now with i=log_3

=>3^log_3 of n*T(n/3^log_3 of n)

=>n*T(1)

=> $\Theta$(n)


I apologize if this is incorrect, but I'm having a hard time with the analysis portions. My thought process is to identify the constants first, they do not matter when thinking about the asymptotic complexity, the comparisons at the very begining, the actual division of the of the arrays in addition to when they are added together all are constant in their time, so we can call it a +C to the end I think. We then start with T(n)=1 for any n less than one [T(n)=1 for n<1]. If n is greater than one, it then lookes like T(n) = 3*T(n/3). Solving further means we have to replace the n with n/3(n/3 because of the 3 array split). It would apply to both sides[T(n/3=3T(n/3/3)], but to get just T(n) on the left we need to perform multiple operations that leaves us with T(n) = 3(3T(n/9)) which simplifies to 9T(n/9).(Unsure past this point)Analyzing this same pattern as it repeats we see that it is (3^i)*T(n/3^i),then to terminate with a base case i would need to be log_3 to achieve T(n). Going along further it becomes n*T(1) (simplified from 3^log_3 of n*T(n/3^log_3 of n) which ultimates results in n. So we can assume the runtime is $\Theta$(n)
