chrome.app.runtime.onLaunched.addListener(function(){
	chrome.app.window.create('zoom.html',{
		id:'zoomtext',
		resizable:true
	});
});