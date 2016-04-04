{% extends "layout/main.swig" %}

{% block title %}Wait Page{% endblock %}

{% block content %}
  <script>

    var timeout = 3000;

    function fillWaitContent() {
      setTimeout(function() {
        document.querySelector('.waitContent').innerHTML = 'test';
      }, timeout);
    }

    function cleanWaitContent() {
      setTimeout(function() {
        document.querySelector('.waitContent').innerHTML = '';
      }, timeout);
    }

    function selectCountry() {
      setTimeout(function() {
        document.querySelector('#country').value = '0';
      }, timeout);
    }

    function createAnElement() {
      setTimeout(function() {
        var div = document.createElement('div');
        div.innerHTML = 'created element';
        div.id = 'createdElement';
        document.body.appendChild(div);
      }, timeout);
    }

    function deleteAnElement() {
      setTimeout(function() {
        var div = document.querySelector('#createdElement');
        document.body.removeChild(div);
      }, timeout);
    }

    function disableElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.disabled = 'disabled';
      }, timeout);
    }

    function enableElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.removeAttribute('disabled');
      }, timeout);
    }

    function putValueElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.value = 'I have a value';
      }, timeout);
    }

    function removeValueElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.value = '';
      }, timeout);
    }

    function hideElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.setAttribute('style', 'display:none;visibility:hidden;');
      }, timeout);
    }

    function showElement() {
      setTimeout(function() {
        var el = document.querySelector('.disabledElement');
        el.setAttribute('style', 'display:inline;visibility:visible;');
      }, timeout);
    }

    function checkElement() {
      setTimeout(function() {
        var el = document.querySelector('.checkboxElement');
        el.checked = true;
      }, timeout);
    }

    function uncheckElement() {
      setTimeout(function() {
        var el = document.querySelector('.checkboxElement');
        el.checked = false;
      }, timeout);
    }

    function longerTimeout() {
      timeout = 6000;
    }

    function shorterTimeout() {
      timeout = 3000;
    }

    function changePage() {
      setTimeout(function() {
        location = '/form';
        // history.pushState({}, 'Forms', '/form');
      }, timeout);
    }

    function changeHash() {
      setTimeout(function() {
        document.querySelector('.btanchor').click();
      }, timeout);
    }

    function changeParameter() {
      setTimeout(function() {
        location = '/wait?var=1';
      }, timeout);
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
    <button class="changePage" onClick="changePage()">change URL page</button>
    <button class="changeHash" onClick="changeHash()">change URL hash</button>
    <button class="changeParameter" onClick="changeParameter()">change URL parameter</button>

    <button class="longerTimeout" onClick="longerTimeout()">longer timeout (6s)</button>
    <button class="shorterTimeout" onClick="shorterTimeout()">shorter timeout (3s)</button>

    <h2>Contents</h2>
    <div class="waitContent"></div>
    <div class="waitContent">2222</div>

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
