import { useEffect, useRef } from 'react';

export class Helper {
  static random(from: number = 20, to: number = 80): number {
    return Math.random() * to + from;
  }

  static usePrevious = <T extends unknown>(
    value: T,
  ): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
}
