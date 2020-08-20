import Axios from "axios";

export const tripData = async () => {
  try {
    const result = await Axios({
      method: "GET",
      url: "http://localhost:3008/api/v1/trips",
    });

    return result.data.data
  } catch (error) {
    console.log(error.message);
  }
};
