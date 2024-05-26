export interface PollOption {
    id: string;
    title: string;
    votes: number;
}
export interface Poll {
    id: string;
    title: string;
    description: string;
    allowMultipleAnswers: boolean;
    options: PollOption[];
}
export interface PollsModuleStore {
    myPolls: Poll[];
    actionPoll: Poll | null;
    addPoll: (poll: Poll) => void;
    removePoll: (poll: Poll) => void;
    addOption: (option: PollOption) => void;
    removeOption: (option: PollOption) => void;
    vote: (option: PollOption) => void;
    reset: () => void;
    setActionPollTitle: (title: string) => void;
    setActionPollDescription: (description: string) => void;
}
export interface CreationStep {
    title: string
    description?: string
}
//Polls Creation flow
export interface PollsUiStore {
    currentStep: number,
    steps: CreationStep[],
    nextStep: () => void,
    previousStep: () => void,
    getStepsCount: () => number,
    getActionStep: () => CreationStep,
}