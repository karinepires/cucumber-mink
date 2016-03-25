{% extends "layout/main.swig" %}

{% block title %}Wait Page{% endblock %}

{% block content %}
  <script>
    function fillWaitContent() {
      setTimeout(function() {
        document.querySelector('.waitContent').innerHTML = 'test';
      }, 3000);
    }

    function cleanWaitContent() {
      setTimeout(function() {
        document.querySelector('.waitContent').innerHTML = '';
      }, 3000);
    }
  </script>
  <div>
    <h1>Wait Page</h1>
    <h2>Actions</h2>
    <button class="fillWaitContent" onClick="fillWaitContent()">fill wait content</button>
    <button class="cleanWaitContent" onClick="cleanWaitContent()">clean wait content</button>
    <h2>Contents</h2>
    <div class="waitContent"></div>
  </div>
{% endblock %}
