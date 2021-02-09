import React, { createContext, useEffect, useState } from 'react'
import mqtt, {QoS} from 'mqtt';

interface Payload {
  topic: string;
  message: string;
}

export default function Connection() {
  // const [client, setClient] = useState(null);
  const [isSubed, setIsSub] = useState(false);
  const [payload, setPayload] = useState<Payload | null>(null);
  const [connectStatus, setConnectStatus] = useState('Connect');

  const values = {
    host: 'broker.emqx.io',
    clientId: 'mqttx_4c0179dc',
    port: 8083,
    username: 'testing',
    password: 'testing'
  };

  const subscription: {topic: string; qos: QoS} = {
    topic: 'access_control_topic',
    qos: 0
  };

  useEffect(() => {
    const { host, clientId, port, username, password } = values;
    const url = `ws://${host}:${port}/mqtt`;
    const options = {
      keepalive: 30,
      protocolId: 'MQTT',
      protocolVersion: 4,
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
      // will: {
      //   topic: 'WillMsg',
      //   payload: 'Connection Closed abnormally..!',
      //   qos: 0,
      //   retain: false
      // },
      rejectUnauthorized: false,
      clientId,
      username,
      password
    };
    
    setConnectStatus('Connecting');
    const client = mqtt.connect(url, options)

    const { topic, qos } = subscription;
    client.subscribe(topic, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
      setIsSub(true)
    });

    if (client) {
      client.on('connect', () => {
        setConnectStatus('Connected');
        console.log('Connected');
      });
      client.on('error', (err) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting');
      });
      client.on('message', (topic, message) => {
        const payload = { topic, message: message.toString() };
        console.log('payload', payload);
        setPayload(payload);
      });
    }
  // }, [client]);
  }, []);

  return (
    <div>
      <p>{connectStatus}</p>
      <p>{isSubed ? `subscribed to ${subscription.topic} topic` : 'unsubscribed'}</p>
      <p>{payload&&payload.message}</p>
    </div>
  )
}

