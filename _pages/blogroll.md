---
layout: single
title: "Friends & Links"
permalink: /blogroll/
author_profile: true
toc: false
---

Below are blogs and sites I enjoy reading. If you'd like to exchange links, feel free to [email me](mailto:{{ site.author.email }})!

<div class="friends-grid">
{% for friend in site.data.friends %}
  <a href="{{ friend.url }}" class="friend-card" target="_blank" rel="noopener" title="{{ friend.name }}">
    {% if friend.avatar and friend.avatar != "" %}
    <div class="friend-card__avatar">
      <img src="{{ friend.avatar }}" alt="{{ friend.name }}" loading="lazy" />
    </div>
    {% else %}
    <div class="friend-card__avatar friend-card__avatar--placeholder">
      <i class="fas fa-globe"></i>
    </div>
    {% endif %}
    <div class="friend-card__info">
      <h3 class="friend-card__name">{{ friend.name }}</h3>
      {% if friend.description %}
      <p class="friend-card__desc">{{ friend.description }}</p>
      {% endif %}
    </div>
  </a>
{% endfor %}
</div>

{% if site.data.friends.size == 0 %}
<p style="text-align: center; color: #999; padding: 2rem 0;">No friends added yet. Edit <code>_data/friends.yml</code> to add some!</p>
{% endif %}
