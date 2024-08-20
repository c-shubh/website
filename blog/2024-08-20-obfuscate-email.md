---
slug: obfuscate-email
title: Obfuscate email
authors:
  - shubh
---

- I was building [contact page](/contact) for this site where I've put up my email.
- Now how do I deal with bots harvesting plaintext emails from websites and sending spam?
- Initially got the idea of using [rot13](https://en.wikipedia.org/wiki/ROT13).
- rot13 of _gmail.com_ is _tznvy.pbz_
- A quick google search for _tznvy.pbz_ showed a lot of hits which might mean that it's a widely known and used trick to obfuscate emails and, the bots are probably aware of it too.
- So I went with the classic [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).
- The only downside is that it won't work with JS disabled.
