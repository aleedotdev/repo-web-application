import { ContactUsRequest } from "@/api/api-types";
import { submitContactForm } from "@/api/service";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useContactForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactUsRequest) => submitContactForm(data),
    onSuccess: () => {
      toast.success("Form submitted successfully");
    },
    onError: () => {
      toast.error("Something went wrong. Please try again");
    },
  });

  return { mutate, isPending };
};
