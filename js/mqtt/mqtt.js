var host = mq.host;// 设置当前用户的接入点域名，接入点获取方法请参考接入准备章节文档，先在控制台创建实例
var port = window.location.protocol=="https:" ? 8084 : 8083;//WebSocket 协议服务端口，如果是走 HTTPS，设置443端口
var topic = mq.barrage_topic;//需要操作的 Topic,第一级父级 topic 需要在控制台申请
var useTLS = window.location.protocol=="https:" ? true : false;//是否走加密 HTTPS，如果走 HTTPS，设置为 true
var accessKey = mq.AccessKeyId;//账号的 AccessKey，在阿里云控制台查看
var secretKey = mq.AccessKeySecret;
var cleansession = true;
var clientId = mq.clientId;//GroupId@@@DeviceId，由控制台创建的 Group ID 和自己指定的 Device ID 组合构成
var mqtt;
var reconnectTimeout = 2000;
var username = accessKey
var password = secretKey;

function MQTTconnect() {
	mqtt = new Paho.MQTT.Client(
		host,//MQTT 域名
		port,//WebSocket 端口，如果使用 HTTPS 加密则配置为443,否则配置80
		clientId//客户端 ClientId
	);
	var options = {
		timeout: 3,
		onSuccess: onConnect,
		mqttVersion: 4,
		onFailure: function (message) {
			setTimeout(MQTTconnect, reconnectTimeout);
		}
	};
	mqtt.onConnectionLost = onConnectionLost;
	mqtt.onMessageArrived = onMessageArrived;
	if (username != null) {
		options.userName = username;
		options.password = password;
		options.useSSL = useTLS;//如果使用 HTTPS 加密则配置为 true
	}
	mqtt.connect(options);
}
function onConnect() {
	// Connection succeeded; subscribe to our topic
	mqtt.subscribe(topic, { qos: 0 });
	console.log("Hello mqtt!!");
	/*message = new Paho.MQTT.Message("Hello mqtt!!");//set body
	message.destinationName = topic;// set topic
	mqtt.send(message);*/
}
function onConnectionLost(response) {
	setTimeout(MQTTconnect, reconnectTimeout);
};
function onMessageArrived(message) {
	var topic = message.destinationName;
	var payload = message.payloadString;
	var msg = (typeof payload == "string") ? JSON.parse(payload) : payload;//解析内容
	console.log(msg);
	mqtt_callback(msg);
};
MQTTconnect();