# ionic-todo-firebase

*README last updated April 3rd, 2019*

## Introduction

This Ionic 4 PWA is based on the article [Using Firebase and AngularFire2 in an Ionic Real-Time TODO application](https://www.javascripttuts.com/using-firebase-and-angularfire2-in-an-ionic-real-time-todo-application/), this repo properly sets-up [home.pages.ts](<./ionic-todo-firebase/src/app/home/home.page.ts>) which has changed since the article was published, due to breaking changes in version 5 of angularfire2 and changes to Ionic 4's button declaration tags.
(https://github.com/angular/angularfire2/issues/1180)

## generating the app
```
ionic start ionic-todo-firebase blank
npm install firebase angularfire2 --save
```

## git-secret

This repo uses git-secret to protect firebase credentials, like so:
```
git secret init
git secret tell jay@heynow.com
git rm --cached ionic-todo-firebase/src/environments/environment.ts
git secret add ionic-todo-firebase/src/environments/environment.ts
git secret hide
```

## Bonus: a nodemailer cloud function example

This repo also includes an example of how to send an email email notification when a new task has been created. See [firebase-cloud-functions/index.js](<./firebase-cloud-functions/index.js>)

You'll need to setup email from the `firebase` command line, as so:
```
firebase functions:config:set gmail.email="someone@gmail.com" gmail.password="email-password" sendto.email="someone@example.com"
```
Note that `gmail.email` has to be a valid gmail email address and that `sendto.email` can be any email address you'd like the notification email sent to.

Before you issue `firebase deploy --only functions` you'll need to do an `npm install nodemailer` from the `firebase-cloud-functions` directory.
