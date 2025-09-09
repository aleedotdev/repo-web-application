import axios from "axios";
import { ContactUsRequest } from "../api-types";

export const submitContactForm = async (request: ContactUsRequest) => {
  const response = await axios.post(
    "https://hook.us1.make.com/cdnys7pgajtcqrewtr2rpx4fs3bc5rli",
    request
  );
  return response.data;
};
