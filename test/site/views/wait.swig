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

    function selectCountry() {
      setTimeout(function() {
        document.querySelector('#country').value = '0';
      }, 3000);
    }

    function createAnElement() {
      setTimeout(function() {
        var div = document.createElement('div');
        div.innerHTML = 'created element';
        div.id = 'createdElement';
        document.body.appendChild(div);
      }, 3000);
    }

    function deleteAnElement() {
      setTimeout(function() {
        var div = document.querySelector('#createdElement');
        document.body.removeChild(div);
      }, 3000);
    }

    function disableElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.disabled = 'disabled';
      }, 3000);
    }

    function enableElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.removeAttribute('disabled');
      }, 3000);
    }

    function putValueElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.value = 'I have a value';
      }, 3000);
    }

    function removeValueElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.value = '';
      }, 3000);
    }

    function hideElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.setAttribute('style', 'display:none;visibility:hidden;');
      }, 3000);
    }

    function showElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.setAttribute('style', 'display:inline;visibility:visible;');
      }, 3000);
    }

    function checkElement() {
      setTimeout(function() {
        var el = document.querySelector('.checkboxElement');
        el.checked = true;
      }, 3000);
    }

    function uncheckElement() {
      setTimeout(function() {
        var el = document.querySelector('.checkboxElement');
        el.checked = false;
      }, 3000);
    }

  </script>
  <div>
    <h1>Wait Page</h1>

    <h2>Actions</h2>
    All actions will take place after 3 seconds <br/>
    <button class="fillWaitContent" onClick="fillWaitContent()">fill wait content</button>
    <button class="cleanWaitContent" onClick="cleanWaitContent()">clean wait content</button>
    <button class="selectCountry" onClick="selectCountry()">select country on select field</button>
    <button class="createAnElement" onClick="createAnElement()">create element</button>
    <button class="deleteAnElement" onClick="deleteAnElement()">delete element</button>
    <button class="disableElement" onClick="disableElement()">disable element</button>
    <button class="enableElement" onClick="enableElement()">enable element</button>
    <button class="putValueElement" onClick="putValueElement()">put value element</button>
    <button class="removeValueElement" onClick="removeValueElement()">remove value element</button>
    <button class="hideElement" onClick="hideElement()">hide element</button>
    <button class="showElement" onClick="showElement()">show element</button>
    <button class="checkElement" onClick="checkElement()">check element</button>
    <button class="uncheckElement" onClick="uncheckElement()">uncheck element</button>

    <h2>Contents</h2>
    <div class="waitContent"></div>

    <label for="country">Country</label>
    <select name="country" id="country">
        <option value="0">France</option>
        <option value="1">Italy</option>
        <option value="2">USA</option>
        <option value="3">UK</option>
    </select>

    <input type="checkbox" class="checkboxElement"/>

    <input class="disabledElement"/>

  </div>
{% endblock %}
