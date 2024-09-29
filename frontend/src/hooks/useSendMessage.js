import { useState } from "react";
import useConversation from "../store/useConversations";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    console.log("hook function called");
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.error) throw new Error(data.error);
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
