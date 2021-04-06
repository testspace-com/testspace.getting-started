---
testspace:
title: Vars and Include
subdomain: s2
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
Some description

## Case 1
- Do this
- Do that

{% include inc.md domain="testspace.com" %}