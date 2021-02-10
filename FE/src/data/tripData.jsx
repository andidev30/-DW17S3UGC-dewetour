import Axios from "axios";

export const tripData = async () => {
  try {
    const result = await Axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/api/v1/trips`,
    });

    return result.data.data;
  } catch (error) {
    console.log(error.message);
  }
};
