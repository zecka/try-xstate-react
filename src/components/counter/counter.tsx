import React, { FC } from "react";
import { useMachine } from "@xstate/react";
import { counterMachine } from "./counter.machine";

export type CounterProps = {};
export const Counter: FC<CounterProps> = () => {
  const [state, send] = useMachine(counterMachine);
  return (
    <section>
      <output>{state.context.count}</output>
      <button onClick={() => send("INCREMENT")}>Count</button>
    </section>
  );
};
