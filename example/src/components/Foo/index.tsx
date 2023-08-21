import React, { type FC } from 'react';

interface A {
  a: string;
}

const Foo: FC<{
  /**
   * @description Title
   * @description.zh-CN 标题
   * @default ""
   */
  title?: string;
  /**
   * @description Sort
   * @description.zh-CN 顺序
   */
  order?: number;
  a: A[];
  b: { c?: string };
  c: '1' | '2' | '3';
  d: 1 | 2 | 3;
  e: A | 1;
  f: { g?: string }[];
  onClick: (e?: MouseEvent) => void;
  children: React.ReactNode;
  onConfirm: (output: { children: any[] }) => void;
  dom: HTMLElement;
}> = (props) => {
  return <>{props.title}</>;
};

export default Foo;
