---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Zifan Tang

📧 3340589482@qq.com | 🐙 [github.com/TZF0237](https://github.com/TZF0237)

### Education

*Add your education history here.*

### Experience

*Add your work/research experience here.*

### Skills

*Add your skills here.*

### Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

### Competition Awards

<ul>{% for post in site.competitions reversed %}
  <li>
    <strong>{{ post.title }}</strong> — {{ post.award }}{% if post.date %} ({{ post.date | date: "%Y" }}){% endif %}
  </li>
{% endfor %}</ul>
