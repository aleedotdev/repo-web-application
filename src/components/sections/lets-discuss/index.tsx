"use client";
import { Button } from "@/components/shared/button";
import InputPhoneField from "@/components/shared/input-fields/input-phone-no-field";
import InputTextField from "@/components/shared/input-fields/input-text-field";
import TextAreaField from "@/components/shared/input-fields/text-area-field";
import { Typography } from "@/components/shared/typography";
import { ContactUsInitialValues } from "@/formik/initial-values";
import { ContactFormSchema } from "@/formik/validations";
import { useContactForm } from "@/hooks/api/useContactUsForm";
import { useFormik } from "formik";
import { useState } from "react";

const ContactFormSection = () => {
  const [phoneData, setPhoneData] = useState({
    countryCode: "+1",
    phoneNumber: "",
  });

  const { mutate, isPending } = useContactForm();

  const formik = useFormik({
    initialValues: ContactUsInitialValues,
    validationSchema: ContactFormSchema,
    onSubmit: (values, handleReset) => {
      const payload = {
        name: values.name,
        email: values.email,
        phoneNo: `${phoneData.countryCode}${phoneData.phoneNumber}`,
        projectDetails: values.projectDetails,
      };

      mutate(payload, {
        onSuccess: () => {
          handleReset.resetForm();
          setPhoneData({ countryCode: "+1", phoneNumber: "" });
        },
      });
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const handlePhoneChange = (countryCode: string, phoneNumber: string) => {
    setPhoneData({ countryCode, phoneNumber });
    formik.setFieldValue("phoneCountryCode", countryCode);
    formik.setFieldValue("phoneNo", phoneNumber);
  };

  return (
    <section
      id="contactUs"
      className="bg-white flex items-center justify-center py-12 sm:py-15 px-5 sm:px-20 xl:px-32"
    >
      <div className="max-width-section w-full grid lg:grid-cols-2 lg:gap-12">
        {/* Left Side - Content */}
        <div className="flex items-center justify-center leading-normal">
          <div className="flex flex-col gap-3">
            <div>
              <Typography
                as="h1"
                size="h1"
                className="text-black leading-none font-eurostile"
              >
                Let's Discuss
              </Typography>
              <Typography
                as="h1"
                size="h1"
                className="leading-none text-orange font-eurostile"
              >
                Your Next Big Idea
              </Typography>
            </div>
            <div>
            <Typography
              size="lg"
              className="text-dark-gray lg:max-w-[580px] leading-normal"
            >
              Every successful product starts with a conversation. Get expert
              consultation from our team to validate your idea, define your
              scope, and discover the best-fit technology — free of charge.
            </Typography>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="sm:min-h-[696px] min-h-[600px] flex items-center w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl w-full p-5 sm:p-10 border border-gray"
          >
            <div className="space-y-4 sm:space-y-5">
              <InputTextField
                name="name"
                onBlur={handleBlur}
                value={values?.name}
                placeholder="Name"
                onChange={handleChange}
                error={touched.name && errors.name ? errors.name : ""}
              />

              <InputTextField
                name="email"
                value={values?.email}
                placeholder="Email Address"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && errors.email ? errors.email : ""}
              />

              <InputPhoneField
                required
                name="phoneNo"
                onBlur={handleBlur}
                value={phoneData.phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter Phone No."
                selectedCountryCode={phoneData.countryCode}
                error={touched.phoneNo && errors.phoneNo ? errors.phoneNo : ""}
              />

              <TextAreaField
                name="projectDetails"
                value={values?.projectDetails}
                placeholder="Project Details"
                onBlur={handleBlur}
                onChange={handleChange}
                error={
                  touched.projectDetails && errors.projectDetails
                    ? errors.projectDetails
                    : ""
                }
                rows={6}
              />

              <div className="flex justify-end items-center">
                <Button
                  disabled={!isValid || isPending}
                  type="submit"
                  className="w-full sm:w-[176px] py-4 text-lg font-semibold"
                >
                  {isPending ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
