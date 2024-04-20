export type ErrorProps = {
    message: string;
    timeoutLength: number;
}

export type ChoicePageProps = {
    handleButtonClick: (buttonSelected: string, choices: Array<string[]>) => void;
    choiceJob: string;
}