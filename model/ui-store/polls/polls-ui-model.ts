import { CreationStep, PollsUiStore } from '@/model/polls/types/types';
import { create } from 'zustand'


export const usePollUIStore = create<PollsUiStore>((set, get) => ({
    currentStep: 1,
    steps: [
        {
            title: 'Poll title',
            description: 'Poll description'
        } as CreationStep,
        {
            title: 'Poll options',
            description: 'Add poll options'
        } as CreationStep,
        {
            title: 'Poll results',
            description: 'Poll results'
        } as CreationStep
    ],
    nextStep: () => set((state) => ({
        currentStep:state.currentStep + 1,
        actionStep: state.steps[state.currentStep + 1]
    })),
    previousStep: () => set((state) => ({
        currentStep:state.currentStep - 1,
        actionStep: state.steps[state.currentStep - 1]
    })),
    getStepsCount: () => get().steps?.length || 0,
    getActionStep: () => get()?.steps?.[get()?.currentStep] || null
}));