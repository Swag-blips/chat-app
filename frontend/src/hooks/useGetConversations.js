import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const getConversations = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getConversations();
  }, []);
  return { loading, getConversations };
};

export default useGetConversations;
