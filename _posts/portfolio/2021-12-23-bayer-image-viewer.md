---
layout: post
title:  "Bayer Image Viewer"
date:   2021-10-01
tags: Python PyQt5
permalink: posts/:title.html
img: "https://user-images.githubusercontent.com/26250290/144701942-4a17fac7-f067-47ff-8e0c-e4b1bbec1bd0.png"
code: "https://github.com/GSNikhil/bayer-image-viewer"
---


Viewing Bayer format images is a problem professional photographers and camera engineers face everyday. There are some tools which help solve the issue a bit. However, most of these solutions/tools are designed by the camera manufacturers and only support their own format(s). Viewing RAW images without header is a bigger <!--more--> issue and there are very few tools which have this feature.

An inherent problem with header-less RAW images is the fact that there is no information about the width and height. Formats like JPEG, PNG carry this information and thus it is very easy to view these images one after the other.

This tool was designed to overcome the above problem by asking the user the image dimensions before hand.

I admit, this tool solves a few problems, not all.