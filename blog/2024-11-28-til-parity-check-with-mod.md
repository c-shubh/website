---
date: 2024-11-28
slug: til-parity-check-with-mod
title: TIL Parity check with %
tags: [TIL]
authors: shubh
---

The result of modulo operator (%) varies between programming languages especially when one of the operand is negative.

<!-- truncate -->

For example, here's what Python outputs:

```python
>>> 29 % 2
1
>>> -29 % 2
1
>>> 29 % (-2)
-1
```

And here's the output from Java

```java
jshell> 29 % 2
$1 ==> 1
jshell> -29 % 2
$2 ==> -1
jshell> 29 % (-2)
$3 ==> 1
```

Both give different results. Hence, to check if an integer is odd, it's better to define the function as

```c
bool is_odd(int n) {
    return n % 2 != 0;
}
```
than

```c
bool is_odd(int n) {
    // !!! incorrect for n < 0 !!!
    return n % 2 == 1; 
}
```

See Wikipedia entry on this: https://en.wikipedia.org/wiki/Modulo#Common_pitfalls