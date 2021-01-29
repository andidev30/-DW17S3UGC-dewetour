import Axios from "axios";

export const tripData = async () => {
  try {
    const result = await Axios({
      method: "GET",
      url: "http://147.139.192.126:3008/api/v1/trips",
    });

    return result.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
