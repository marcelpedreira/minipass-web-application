import React, { createContext, useEffect, useState } from 'react'
import mqtt, {QoS, MqttClient} from 'mqtt';

interface Payload {
  topic: string;
  message: string;
}

interface ConectionParameters {
  host: string;
  clientId: string;
  port: number;
  username: string;
  password: string;
}

interface SubsParameters {
  topic: string; 
  qos: QoS;
}

export interface MqttContext {
  connect: (values?: ConectionParameters) => void;
  subscribe: (values?: SubsParameters) => void;
  payload: Payload;
  connectStatus: string;
};

export const MqttContext = createContext<MqttContext>({
  connect: (values?: ConectionParameters) => {},
  subscribe: (values?: SubsParameters) => {},
  payload: {topic: '', message: ''},
  connectStatus: ''
});

  
export default function AuthMqttProvider(props: any) {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isSubed, setIsSub] = useState(false);
  const [payload, setPayload] = useState<Payload>({topic: '', message: ''});
  const [connectStatus, setConnectStatus] = useState('Connect');

  useEffect(() => {
    if (client) {
      client.on('connect', () => {
        setConnectStatus('Connected');
        console.log('Connected');
      });
      client.on('error', (err: any) => {
        console.error('Connection error: ', err);
        client.end();
      });
      client.on('reconnect', () => {
        setConnectStatus('Reconnecting');
      });
      client.on('message', (topic: string, message: string) => {
        const payload = { topic, message: message.toString() };
        console.log('payload', payload);
        setPayload(payload);
      });
    }
  }, [client]);

  const connect = (values: ConectionParameters = {
    host: 'broker.emqx.io',
      clientId: 'mqttx_4c0179dc',
      port: 8083,
      username: 'testing',
      password: 'testing'
  }) => {
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
    // const client = mqtt.connect(url, options)
    setClient(mqtt.connect(url, options));
  }

  const subscribe = (values: SubsParameters = {
    topic: 'access_control_topic',
      qos: 0
  }) => {
    // const subscription: {topic: string; qos: QoS} = {
    //   topic: 'access_control_topic',
    //   qos: 0
    // };
    const { topic, qos } = values;
    if (client) {
    client.subscribe(topic, { qos }, (error) => {
      if (error) {
        console.log('Subscribe to topics error', error)
        return
      }
      setIsSub(true)
    });
  }
  }

  return (
    <MqttContext.Provider value={{payload, connectStatus, subscribe, connect}}>
      {props.children}
    </MqttContext.Provider>
  )

  // return (
  //   <div>
  //     <p>{connectStatus}</p>
  //     <p>{isSubed ? `subscribed to ${subscription.topic} topic` : 'unsubscribed'}</p>
  //     <p>{payload&&payload.message}</p>
  //   </div>
  // )
}

