---
layout: "job"
title: "MyFleet"
type: "Mobile App & Web Application"
tags: "Conception, Planning, Development"
icon: "compass"
variant: "v2"
order: "2"
sitemap:
  exclude: 'yes'
---

> Psst! This article is still work in progress

MyFleet is a 2-part web and mobile application built to manage a fleet of geo-devices.

The goal is to allow the user to add any amount of devices to their account and track the movement of these via a web interface. The user can create "geo-fences", which will track devices within their boundaries.

![General idea](/images/work/myfleet.svg)
{: .-img-wide}

The bulk of the work is building the web UI, but the tracking-app is done and was built using [ionic](http://ionicframework.com/). 

I'd been looking for an excuse to play with ionic for a while, and this seemed like the perfect use-case.

The mobile app itself is pretty simple:

1. Authenticate the user via Oauth
2. Access the device geolog API via Cordova
3. Periodically pass long/lat to [Firebase](https://www.firebase.com/). 

Here's the initial test run. The yellow line is where I actually walked:

<figure markdown="1">
![First test run](/images/work/tracking-test-1.jpg)
{: .-img-wide}
<figcaption>Running from home to the gym</figcaption>
</figure>

Although the precision is pretty good there's a few "stray" readings. I'd like to implement some sort of login to weed these out.

Aside from that, there's a few future improvements I'd like to make:

- Battery saver mode
- Scheduled logging
- Gesture detection

---

### Resources:

Once the initial work on the web UI is completed I'll write a proper blog post to share some more code and learnings from this build.