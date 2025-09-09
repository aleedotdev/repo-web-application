import { ChangeEvent } from "react";
export interface InputNumberFeildProps {
  icon?: string;
  disabled?: boolean;
  label?: string;
  isAuth?: boolean;
  name?: string;
  value?: number | string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  styling?: string;
  labelStyles?: string;
  textColor?: string;
  [key: string]: any;
  onFocus?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface InputPasswordFieldProps {
  disabled?: boolean;
  label?: string;
  value?: string;
  isDashboard?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: any;
  placeholder?: string;
  required?: boolean;
  isAuth?: boolean;
  name?: string;
  labelStyles?: string;
  error?: string;
  styling?: string;
  textColor?: string;
  strengthChecker?: boolean;
  maxLength?: number;
  [key: string]: any;
}

export interface InputFieldProps {
  disabled?: boolean;
  label?: string;
  name?: string;
  icon?: string;
  value?: string | number;
  codeValue?: string;
  onCodeChange?: (value: string) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onFocus?: any;
  onBlur?: any;
  styling?: string;
  labelStyles?: string;
  textColor?: string;
  [key: string]: any;
  maxLength?: number;
  isAuth?: boolean;
}

export interface Testimonial {
  id: number;
  rating: string;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface CarouselImage {
  src: string;
  alt: string;
  path:string;
}

export interface ProjectCarouselProps {
  images: CarouselImage[];
}
export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface PhoneFieldProps extends Omit<InputFieldProps, "onChange"> {
  selectedCountryCode?: string;
  onChange: (countryCode: string, phoneNumber: string) => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
