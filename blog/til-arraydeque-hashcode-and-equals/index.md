---
slug: til-arraydeque-hashcode-and-equals
title: TIL ArrayDeque hashCode and equals
date: '2024-08-16'
tags:
  - TIL
---

TIL that `LinkedList` overrides equals and hashCode, but ArrayDeque doesn't!

This means that regardless of the contents of `ArrayDeque`, it gives the same `hashCode` value.  
This bit me when using `Deque<T> dq = new ArrayDeque<>();`

See Stack Overflow: [Why doesn't ArrayDeque override equals() and hashCode()?](https://stackoverflow.com/questions/18203855/why-doesnt-arraydeque-override-equals-and-hashcode/18203894#18203894)
