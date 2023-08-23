import { useState } from "react";

export default useApi = (apiFunc) => {
  // State
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setErrors(!response.ok);
    setData(response.data);

    return response;
  };

  return { request, data, errors, loading };
};
