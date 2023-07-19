import { useState } from "react";

const ChatBox = () => {
  const [final, setfinal] = useState("");
  const [txt, settxt] = useState("");
  const chat = ["hi", "hello", "i", "am", "kuberan"];

  const handleclick = (props) => {
    settxt(txt+" "+props.string);
    console.log(txt);
  };

  const stringElements = chat.map((string, index) => (
    <button key={index} onClick={() => handleclick({ string })}>
      {string}
    </button>
  ));

  return (
    <div>
      {stringElements}
      <textarea className="textbox" value={txt}></textarea>
      <button
        onClick={() => {
          setfinal(txt);
        }}
      >
        Sumbit
      </button>
      <button
        onClick={() => {
          setfinal("");
          settxt("");
        }}
      >
        clear
      </button>
      <p>{final}</p>
    </div>
  );
};

export default ChatBox;
