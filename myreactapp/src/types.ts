export type ErrorProps = {
    message: string;
    timeoutLength: number;
}

export type ChoicePageProps = {
    handleButtonClick: (buttonSelected: string, choices: Array<string[]>, disableNavigation?: boolean) => void;
    choiceJob: string;
}