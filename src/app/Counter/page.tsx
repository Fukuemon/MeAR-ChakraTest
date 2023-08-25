"use client";
import React, { FC } from "react";
import { useAppSelector } from "@/store/hooks";
import {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} from "@/store/features/counterSlice";
import { useAppDispatch } from "@/store/hooks";
import { Button, VStack, Box, Heading } from "../components";

export const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <VStack p={8}>
        <Heading size="md">Counter: {count}</Heading>
        <VStack>
          <Button onClick={() => dispatch(reset())}>Reset</Button>
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
          <Button onClick={() => dispatch(incrementByAmount(5))}>
            Increment by 5
          </Button>
          <Button onClick={() => dispatch(decrementByAmount(5))}>
            Decrement by 5
          </Button>
        </VStack>
      </VStack>
    </div>
  );
};

export default Counter;
