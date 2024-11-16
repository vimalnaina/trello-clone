"use client";

import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col space-y-2">
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FormInput;
