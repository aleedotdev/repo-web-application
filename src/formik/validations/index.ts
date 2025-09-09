import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),

  phoneNo: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10,15}$/, "Phone number must be between 10 and 15 digits"),

  projectDetails: Yup.string()
    .required("Project details are required")
    .min(5, "Please provide at least 5 characters"),
});
