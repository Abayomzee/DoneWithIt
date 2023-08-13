import { useState } from "react";

export default useApi = (apiFunc) => {
  // State
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  // Methods
  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
    setLoading(false);
    if (!response.ok) return setErrors(true);

    setErrors(false);
    setData(response.data);
  };

  return { request, data, errors, loading };
};
