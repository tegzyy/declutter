import axios from "axios";

export default async function reverseGeocode(latitude, longitude) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    
    if (data.display_name) {
      return data.display_name;
    } else {
      throw new Error("Reverse geocoding failed.");
    }
  } catch (error) {
    throw error;
  }
  }