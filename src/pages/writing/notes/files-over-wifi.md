---
layout: ../../../layouts/BlogPostLayout.astro
title: Files Over Wifi
---

# Transfering Files Between Laptops Over Wifi

This method utilises Rsync installed on the machine you are connecting from 
and an SSH server (like OpenSSH-Server) on the machine you are connecting to.

Both machines must be on the same local network (like a wifi network or LAN 
connection).

Open port 22 on the machine you are connecting to (`$ ufw allow 22`).

```bash
$ rsync -av user@machine:/home/user/source \
/home/user2/destination \
--info=progress2 --no-i-r
```

```py
def test(v1, v2):
    if v1 == v2:
        return "some value"
```

Invoke `rsync` with the `-av` flag to copy a directory (`-a`) and provide a 
verbose output (`-v`).  This will copy the 'source' directory on the remote 
machine to the local directory 'destination'. The options `--info=progress2` 
and `--no-i-r` will show a progress bar in the terminal. 'no-i-r' is short 
for no incremental recursion - it will check all directories and 
sub-directories before it starts doing the copy. This is to make the progress 
bar accurate.
