import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useUserStore } from "@/store/useUserStore";

const useAiResponse = (query: any) => {
    const [messages, setMessages] = useState<any>([]);
    const genAI = new GoogleGenerativeAI('AIzaSyDV7BI4njPDTjJuxX8zehLtFafYfV_dhXw');
    const [loading, setLoading] = useState(false);
    const [processingIndex, setProcessingIndex] = useState<number>()
    const [val,setValue] = useState(0)
    const last =  messages?.length -1
    const {userName} = useUserStore()

    // console.log(JSON.stringify(messages,null,2))
    // console.log(JSON.stringify(messages.length))
    // console.log(JSON.stringify(messages[last]?.content))

    if(messages[last]?.role === "assistent" && loading){
      console.log("last message from ai :", messages[last]?.content)
    }



    const handleRunAI = async () => {
        setLoading(true);
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = query;
            setMessages([...messages,{ role: "user", content: query }])

            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = response.text();
            setLoading(false);

            setMessages([...messages, { role: "assistent", content: text }]);

        } catch (error) {
            // @ts-ignore
            console.error("Error running AI:", error.message);
        }
        setLoading(false);
    };

    async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        setLoading(true);
        setProcessingIndex(messages.length)
        
        setMessages((prevMessages:any) => [...prevMessages, { role: "user", content: query }]);

        try {
        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: `Hello, i am ${userName} , i am programmer ` }],
            },
            {
              role: "model",
              parts: [{ text: `hello ${userName} ,  i am  personal assistent Ali` }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 1000,
          },
        });
      
        const msg = query;
      
        const result = await chat.sendMessage(msg);
        const response =  result.response;
        const text = response.text();
        

        setMessages((prevMessages:any) => [...prevMessages, { role: "assistent", content: text }]);

            
        } catch (error) {
            // @ts-ignore
            console.error("Error running AI:", error.message);
        }

        setLoading(false)

      }

    return { handleRunAI, loading,messages,run,processingIndex,val };
};

export default useAiResponse;
