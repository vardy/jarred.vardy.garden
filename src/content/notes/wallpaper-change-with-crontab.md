---
draft: false
title: Changing Wallpapers 
date: 2023-06-05
---

# Change your wallpaper on a schedule with Feh and Crontab

Depends on 'Feh'. Used to set wallpapers and preview images. Preinstalled on many distributions of Linux.

'Crontab' is a table of jobs that are run on a schedule (`$ man crontab`). 
Update with `$ crontab -e`. 

My crontab:
```
@reboot DISPLAY=:0.0 feh --bg-fill --randomize /home/me/Wallpapers
1 0 * * * * DISPLAY=:0.0 feh --bg-fill --randomize /home/me/Wallpapers
```

`@reboot` runs at reboot. 
`1 0 * * * *` runs every hour on the zeroeth minute.
