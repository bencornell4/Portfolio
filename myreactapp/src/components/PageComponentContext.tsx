import React, {useState, useEffect, createContext} from "react";

export const PageComponentContext = createContext<{
    choiceJob: string;
    setChoiceJob: React.Dispatch<React.SetStateAction<string>>;
    handleButtonClick: (buttonSelected: string, choices: Array<string[]>) => void;
}>
({
    choiceJob: '. . .',
    setChoiceJob: () => {},
    handleButtonClick: () => {},
})

export default PageComponentContext;