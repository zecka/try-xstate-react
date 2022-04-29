import { createMachine, assign } from "xstate";

interface DogContext {
  dog?: string;
}

type DogEventType = "WAKE_UP" | "FALLS_ASLEEP" | "RUN" | "STOP" | "FETCH";
type DogStates = "idle" | "rejected" | "asleep" | "awake" | "running";
type DogEvent = {
  type: DogEventType;
};
type DogTypestate = {
  value: DogStates;
  context: {};
};

export const DogMachine = createMachine<DogContext, DogEvent, DogTypestate>({
  initial: "idle",
  context: {},
  states: {
    idle: {
      on: {
        FETCH: "loading",
      },
    },
    loading: {
      invoke: {
        id: "fetchDog",
        src: (context, event) =>
          fetch("https://dog.ceo/api/breeds/image/random").then((data) =>
            data.json()
          ),
        onDone: {
          target: "asleep",
          actions: assign({
            dog: (_, event) => event.data.message,
          }),
        },
        onError: "rejected",
      },
    },
    rejected: {},
    asleep: {
      on: {
        WAKE_UP: "awake",
      },
    },
    awake: {
      on: {
        FALLS_ASLEEP: "asleep",
        RUN: "running",
      },
    },
    running: {
      on: {
        STOP: "awake",
      },
    },
  },
});
