---
testspace:
title: Use Setup Fixture
before:
  name: github::fixture
  description: example input
  payload: 
    a: one
    b: two
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
This is a manual test.

## Test Case One
Some description here.

* check this  
* check that

## Test Case Two
Some description here.

* check this
* check that