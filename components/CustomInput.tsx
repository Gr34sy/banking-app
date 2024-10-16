import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
  type?: string;
}

const CustomInput = ({
  control,
  label,
  name,
  placeholder,
  type,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel>{label}</FormLabel>

          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={type ? type : "text"}
                id={`${name}-form-item`}
                {...field}
              />
            </FormControl>
          </div>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};

export default CustomInput;
