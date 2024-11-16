"use client";
import { create, State } from "@/app/actions/create-board";
import { Button } from "@/components/ui/button";
import React from "react";
import { useFormState } from "react-dom";
import FormInput from "./form-input";

const Form = () => {
  const initialState: State = { message: "", errors: {} };
  const [state, dispatch] = useFormState(
    async (prevState: State, formData: FormData) => {
      return await create(prevState, formData);
    },
    initialState
  );

  return (
    <form action={dispatch}>
      <FormInput />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
