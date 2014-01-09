/*
 * plugins are loaded in the order specified here.
 * If loading jQuery, it must come before Angular.
 */
var app = {
	name : 'Plus.io Frontend',
	plugins : ['jquery', "angular", "plus", 'hammer', 'overthrow', 'dragend'],
	theme : 'drive-list',
	projectId : "revision-3",
	driveKey : "0ApVS-WbxyoqHdERGVDlGb2llQ3pvMzJTSWgzREQ5V2c",
	serverSecret : "",
	pageTransition : ''
}