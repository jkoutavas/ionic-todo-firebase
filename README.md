# ionic-todo-firebase

*README last updated March 31st, 2019*

## Introduction

This Ionic PWA is based on the article [Using Firebase and AngularFire2 in an Ionic Real-Time TODO application](https://www.javascripttuts.com/using-firebase-and-angularfire2-in-an-ionic-real-time-todo-application/), this repo properly sets-up [home.pages.ts](<./ionic-todo-firebase/src/app/home/home.page.ts>) which has changed since the article was published.

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
