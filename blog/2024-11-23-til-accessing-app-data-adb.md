---
date: 2024-11-23
slug: til-accessing-app-data-adb
title: TIL Accessing App Data using ADB
authors: shubh
tags: [TIL]
---

TIL how to access an app's data directory using adb.

While working on an android app, I had some issues with the SQLite database and wanted to delete it. This db is stored in app's internal data directory (`/data/data/com.cshubh.myapp`) which is inaccessible using file managers on device.

<!-- truncate -->

Android Studio has Device Explorer which allows us to access the internal data directory of a debuggable app, but I didn't want to open that resource hungry IDE for such a simple task. There ought to be a way to do it using adb.

Here it is:

```bash
adb shell
run-as com.cshubh.myapp
```

It drops you into a shell in the app directory `/data/user/0/com.cshubh.myapp` where you can manipulate files and directories.

Pulling a file from the data directory (here, sqlite db):

```bash
adb exec-out run-as com.cshubh.myapp cat files/SQLite/myapp.db > pulled.db
```

Use `tar` for directories, and `cat` the archive file instead.

Pulling a file to data directory (here, scratch.txt):

```bash
adb push scratch.txt "/data/local/tmp/"
adb shell
run-as com.cshubh.myapp
cp /data/local/tmp/scratch.txt .
```
