---
date: 2025-01-01
slug: extracting-discords-welcome-messages
title: Extracting Discord's Welcome Messages
authors:
  - shubh
draft: false
---
I was learning about [WebSockets](https://en.wikipedia.org/wiki/WebSocket) today for a college project and decided to build a chat webapp as defined in the [homework section](https://socket.io/get-started/chat#homework) of Socket.io's getting started guide.

Inspired by how Discord displays a fun random message—e.g. _Welcome, \{name\}. We hope you've brought pizza._—I wanted to use those in my project too. So I thought why not just use Discord's messages, and instantly jumped on to extract those. Who doesn't love [yak shaving](https://www.youtube.com/watch?v=AbSehcT19u0), right?

<!-- truncate -->

First, I loaded all the past chats of a channel by spamming the <kbd>Home</kbd> key. To extract only the welcome messages among others in the channel, I had to identify something which all welcome messages shared in common. It turns out that Discord uses a green arrow icon (<span className="discord-welcome-msg-svg-in-line"> ![](db0473de8224a02f3a88.svg) </span>) for such messages, which has a `.icon_d76df7` class.

Using the class name of the icon, I extracted the parent DOM node of the chat message:

```js
document
  .querySelectorAll('.icon_d76df7')
  .forEach(e => console.log(e.parentNode.parentNode.innerHTML))
```

This filled up my console with the required HTML, which I saved to a file by doing a [Right click -> Save as...](https://stackoverflow.com/questions/7627113/save-the-console-log-in-chrome-to-a-file/31059700#31059700) in the console. This gave me a 319 line long .log file containing the HTML code for each message.

After a bit of regex magic in VSCode and a `uniq` command later, I ended up with a list of these unique messages:

## Unique welcome messages

```
{name} hopped into the server.
{name} is here.
{name} joined the party.
{name} just landed.
{name} just showed up!
{name} just slid into the server.
A wild {name} appeared.
Everyone welcome {name}!
Glad you're here, {name}.
Good to see you, {name}.
Welcome {name}. Say hi!
Welcome, {name}. We hope you've brought pizza.
Yay you made it, {name}!
```

After doing all this work, all I had were 13 measly template strings. Honestly, I had expected Discord to have many more of these random message templates.

If you come across other messages not in the list, let me know and I'll update it.