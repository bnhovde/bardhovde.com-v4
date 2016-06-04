---
layout: "job"
title: "Forkliftr"
type: "Hardware/IOT & Game Dev"
tags: "Development"
icon: "gamepad"
variant: "v1"
order: "6"
sitemap:
  exclude: 'yes'
---

Forkliftr is a forklift game controlled with three analogue joysticks.

One of CDD's Clients wanted to show off the responsiveness and quality of their joysticks. Since the joysticks are actually used in several types of forklifts, we thought a simple forklift game would be a perfect demo.

![Food mixing screenshot](/images/work/forkliftr-1.png)
{: .-img-wide}

An arduino Uno is used as the interface for the joysticks. This combined with nodejs, johnny-five and a game built in the phaser library lets the user control the forklift:

1. The aurduino firmware captures the raw inputs 
2. nodejs and johnny-five transposes the inputs into separate ranges
3. nodejs pushes updates to the client using websockets
4. the phaser game picks up the updates in the browser and updates the game

The game will be used for the Client's stand at several conventions across the world.

Here is a slightly awkward video of how it works:

<div class="embed embed--container">
    <iframe src="https://player.vimeo.com/video/131522137" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

---

### Resources:

I've bundled the core functionality into a reusable starter kit that's available on my [github page](https://github.com/bnhovde/AnalogueIO).

[Here's a post on the CDD site about the project](http://cddnation.com/insight/going-analogue).

### Demo:

[The development version of the game can be played here](http://cw.cddstaging.com/)