(function () {

  'use strict';

  var runtime = chrome.app.runtime;

  var isMacOs = (navigator.platform === 'MacIntel');

  function launch (path) {

    chrome.app.window.create(
    	'background.html', 
	    {

	      'id': 'wunderlist',
	      'bounds': {
	        'width': 1024,
	        'height': 600
	      },
	      'resizable': true,
	      'minWidth': 320,
	      'minHeight': 540,
	      'singleton': true,
	      'frame': isMacOs ? 'none' : 'chrome',
	      'transparentBackground': true
	    }, function (win) {

	      var window = win.contentWindow;
	      var document = window.document;
    });
  }

  runtime.onLaunched.addListener(launch);

}).call(this);