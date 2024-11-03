import { useState } from "react";
import substitutionTable from "./assets/table.json";
import { getDecrypted } from "./helpers/getDecrypted";

function App() {
  const [inputText, setInputText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleDecrypt = () => {
    const encrypted = getDecrypted(inputText, substitutionTable);
    setDecryptedText(encrypted);
  };

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center p-20 gap-4">
      <h1 className="text-md">Гомофонний шифр</h1>
      <textarea
        className="border p-2"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введіть шифр"
        rows="5"
        cols="50"
      />
      <button
        className="w-full px-4 py-2 bg-black text-white text-sm max-w-[460px]"
        onClick={handleDecrypt}
      >
        Розшифрувати
      </button>
      <h2 className="text-md">Розшифрований текст:</h2>
      <textarea
        className="border p-2"
        value={decryptedText}
        readOnly
        rows="5"
        cols="50"
      />
    </div>
  );
}

export default App;
