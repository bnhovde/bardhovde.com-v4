---
layout: "job"
title: "booking app"
type: "Web Application"
tags: "Planning, Development"
icon: "suitcase"
variant: "v1"
order: "1"
sitemap:
  exclude: 'yes'
---

> Psst! This article is still work in progress

The booking app is a web application in development at [@cddnation](http://cddnation.com). It is due to go into production in the next few weeks. Once this is live I'll add a link here.

The app will serve as the booking platform for a chain of hotels in the UK, running in multiple separate instances on the hotel websites.

The booking application has been developed as a stand-alone website component, and will be deployed into the hotel websites separately. This means that new versions can be rolled out without affecting their environments, but it has also introduced challenges I'll briefly touch on later.

---

## Features

The application is running on Angularjs, uses UI-router for internal routing and a custom-built session manager to store input data. JWT's are used for authentication and Karma is the test runner.

### Application structure

The application have been built using [best practices](https://github.com/johnpapa/angular-styleguide) and is fully tested. Every piece of UI has been split into components and the controllers are very lean, making the application easy to reason about and understand, not to mention test.

<figure markdown="1">
![Application structure](/images/work/booking-app-1.svg)
{: .-img-wide}
<figcaption>General application structure</figcaption>
</figure>

### Accessibility

This is something I've put a lot of work and time into. The application is fully usable with a keyboard and by screenreaders. This was achieved using semantic markup along with proper ARIA-roles for custom UI elements.


---


## Challenges

### 3rd party API

A requirement is that all booking & room data needs to go through a third party provider that's well established in the UK.

This provided us with a few challenges as we're not fully in control of the structure of the data we can access, but thorough planning has helped us develop the application around this without limiting functionality.

#### Style leaks

Style leaks were a concern as we didn't want any styling to leak between the booking app and the website it would be running within.

The way we got around this is using a namespace for all booking app styles. We already use BEM-notation for all modules, but to prevent any base styles, font sizing from leaking across the namespace was our savior. It's a shame web components isn't there yet as this could have prevented this worry via the shadow DOM.

#### Testing

For such an important part of the business, testing has been at the front of my mind throughout the build. I've found this quite challenging as there are a lot of modules and the app itself is very data-driven, but it's been hugely educational for me. 

The knowledge that changing something won't break something else is very liberating, and will be crucial once the app goes into production.