---
layout: default
post_list: false
toc: false
comment: true
home_btn: true
btn_text: true
footer: true
title: ""
author: ""
encrypted_text: true
permalink: /
---

# 唐子蕃的博客网站

<br>
> 该网站源码来自于http://jekyllthemes.org/themes/jekyll-theme-chirpy/，本人只是稍微修改部分页面，以用做日常博客写作。



### 示例

下面是C++代码

```c++
#include<bits/stdc++.h>
using namspace std;
typedef long long ll;
const int N=2e5;
void solve(){

}
int main(){
    ios::sync_with_stdio(false),cin.tie(0),cout.tie(0);
    int T=1;
    cin>>T;
    while(T--) solve();
    return 0;
}
```


下面是Python代码

```python
# Python program for implementation of Quicksort Sort

# This function takes last element as pivot, places
# the pivot element at its correct position in sorted
# array, and places all smaller (smaller than pivot)
# to left of pivot and all greater elements to right
# of pivot
def partition(arr,low,high):
    i = ( low-1 )         # index of smaller element
    pivot = arr[high]     # pivot

    for j in range(low , high):

        # If current element is smaller than or
        # equal to pivot
        if   arr[j] <= pivot:

            # increment index of smaller element
            i = i+1
            arr[i],arr[j] = arr[j],arr[i]

    arr[i+1],arr[high] = arr[high],arr[i+1]
    return ( i+1 )

# The main function that implements QuickSort
# arr[] --> Array to be sorted,
# low  --> Starting index,
# high  --> Ending index

# Function to do Quick sort
def quickSort(arr,low,high):
    if low < high:

        # pi is partitioning index, arr[p] is now
        # at right place
        pi = partition(arr,low,high)

        # Separately sort elements before
        # partition and after partition
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

# Driver code to test above
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
quickSort(arr,0,n-1)
print ("Sorted array is:")
for i in range(n):
    print ("%d" %arr[i]),

# This code is contributed by Mohit Kumra
```
