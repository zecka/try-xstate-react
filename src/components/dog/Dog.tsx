import { useMachine } from "@xstate/react";
import React, { FC } from "react";
import { DogMachine } from "./dog.machine";
export type DogProps = {};
export const Dog: FC<DogProps> = () => {
  const [state, send] = useMachine(DogMachine);
  return (
    <div>
      {state.context.dog && (
        <img
          alt="Dog"
          style={{ width: "100%", height: "auto" }}
          src={state.context.dog}
        />
      )}
      <button onClick={() => send("WAKE_UP")}>Wake up</button>
      <button onClick={() => send("FALLS_ASLEEP")}>Falls asleep</button>
      <button onClick={() => send("RUN")}>RUN</button>
      <button onClick={() => send("STOP")}>STOP</button>
      <button onClick={() => send("FETCH")}>Fetch</button>
      <div>
        Dog is <>{state.value}</>
      </div>
    </div>
  );
};
