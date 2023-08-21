import React, { FC, useRef, useState } from 'react';
import { useEventEmitter } from './index';
import type { EventEmitter } from './index';

const Acom: FC<{ receive: EventEmitter<string> }> = (props) => {
  const [message, setMessage] = useState('暂未收到信息');
  props.receive.useSubscription((value: string) => {
    setMessage(value);
  });
  return (
    <div style={{ fontSize: '12px' }}>
      <div>
        A 🔚 B组件发送来的信息：<i style={{ color: 'red' }}>{message}</i>
      </div>
    </div>
  );
};

const Bcom: FC<{ send: EventEmitter<string> }> = (props) => {
  const inputRef = useRef<any>();
  return (
    <div style={{ fontSize: '12px' }}>
      <input
        ref={inputRef}
        placeholder="Enter reply"
        style={{ width: '50%', padding: '4px' }}
      />
      <button
        onClick={() => {
          if (!inputRef.current.value) {
            inputRef.current.focus();
            alert('输入信息内容');
          } else {
            props.send.emit(inputRef.current.value);
          }
        }}
      >
        发送
      </button>
    </div>
  );
};

export default function Demo() {
  const emitter = useEventEmitter<string>();

  return (
    <>
      <div title="组件 A 订阅">
        <div className="title">组件 A 订阅</div>
        <Acom receive={emitter} />
      </div>
      <div title="组件 B 触发">
        <div className="title">组件 B 触发</div>
        <Bcom send={emitter} />
      </div>
    </>
  );
}
