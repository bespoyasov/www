---
title: Kursovik
description: Apps that shows the USD/RUB exchange rates.
datetime: 2017-01-14T10:25
tags:
  - design
  - javascript
  - kursovik
  - process
  - react
  - tools
---

# Kursovik

While I was on vacation, I decided to try some new technology. I started with Electron.

[Electron](https://electron.atom.io/) is a library that helps you write web-based desktop applications. You write a web application, wrap it in an “electron shell”, build it, and it works like a regular desktop application.

A todo list seemed too primitive for me, so I decided to create [Kursovik](https://github.com/bespoyasov/kursovik-redux-electron). It is an app that shows USD/RUB currency exchange rates. I made it [open source](https://github.com/bespoyasov/kursovik-redux-electron) so you can try it too 🙃

Kursovik shows the rates for today and the difference with the yesterday rates. If it knows the rates for the next day shows it too. Draws a chart of how the rates have changed by the week, month, or a quarter.

If there's no Internet connection, it shows the latest fetched data and a warning about the offline mode. Whe the Internet is accessible again the data will be automatically updated.

This is a prototype. I'll be glad if you help me to find bugs ad improve the app. Send issues and ideas to [GitHub](https://github.com/bespoyasov/kursovik-redux-electron/issues) or to bespoyasov@me.com.

As a result of developing this, I learned how to work with Electron's API and how to transfer data between different processes in the app. Learned how to work with tray on MacOS and found out a bit about the Windows architecture. Also, learned how unstable the site of the Central Bunk of Russia and its API are.
