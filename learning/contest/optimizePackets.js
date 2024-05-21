/**You've just been hired as a network engineer at SuperStream, a leading video streaming service One of your first tasks is to optimize the number of video data packets sent to users based on their
 
internet connectivity
 
When a user hits "play" video data is transmitted in packets. If their device acknowledges these packets quickly, it means they have a strong connection and can neceive more packets simultaneously for smoother streaming. If acknowledgments lag, fewer packets should be sent to prevent buffering
 
Given an array A where each entry represents the acknowledgment time (in milliseconds) for individual packets, and two integers B and C, can you determine if there's a continuous sequence of B packets with an average acknowledgment time less than or equal to C milliseconds? If so, it's a green signal (integer 1) to send more packets. Otherwise, it's time to throttle back (integer a)
 
Note: For average, take the floor of (sum/total number of elements)
 
Problem Constraints
 
1 N 10
 
1A10
 
1B-N
 
<1<C<10
 
Input Format
 
First argument A is an array of integers
 
The remaining arguments B and Care integers

Input 1: 
A [30, 25, 40, 35, 20, 45, 50, 55, 22, 18, 15], B = 3 C = 30
 
Input 2:
 
A = [4, 2, 2, 5, 1] B = 4 C = 1
 
Example Output
 
Output 1:
 
1
 
Output 2:
 
0

Example Explanation
 
Explanation 1:
 
Q1
 
Average of [30, 25, 40] = 31.67 milliseconds
 
Average of [25, 40, 35] = 33.33 milliseconds
 
Q2
 
Average of [40, 35, 20] = 31.67 milliseconds
 
Average of [35, 20, 45] = 33.33 milliseconds
 
Q3
 
Average of [20, 45, 50] 38.33 milliseconds
 
Average of [45, 50, 55] = 50 milliseconds
 
Average of [50, 55, 22] = 42.33 milliseconds
 
Average of [55, 22, 18] = 31.67 milliseconds
 
Average of [22, 18, 15] 18.33 milliseconds
 
From the data, we see that the sequence [22, 18, 15] has an average acknowledgment time of 18.33 milliseconds, which is less than C 30 milliseconds. Thus, Jake's device meets the criteria, and SuperStream's server can ramp up the data packets to Jake's device for an enhanced streaming experience. Hence the answer is 1.
 
Explanation 2:
 
There are no such subarray.
has context menu */

function optimizePackets(A, B, C) {
    let sum = 0
    for (let i = 0; i < B; i++) {
        sum += A[i]
    }

    if (Math.floor(sum / B) <= C) {
        return 1
    }

    for (let i = B; i < A.length; i++) {
        sum = sum - A[i - B] + A[i]
        if (Math.floor(sum / B) <= C) {
            return 1
        }
    }
    
    return 0
}

console.log(optimizePackets([30, 25, 40, 35, 20, 45, 50, 55, 22, 18, 15], 3, 30)) // 1
console.log(optimizePackets([4, 2, 2, 5, 1], 4, 1)) // 0
console.log(optimizePackets([46, 10, 15, 44, 29, 39, 7, 50, 33, 3, 7, 25, 50, 5, 22, 30, 23, 0], 1, 22)) // 1
