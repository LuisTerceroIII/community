import { create } from 'zustand'
import { Poll, PollOption, PollsModuleStore } from './types/types';

export const usePollsModuleStore = create<PollsModuleStore>((set) => ({
    myPolls: [],
    actionPoll: {} as Poll,
    addPoll: (poll: Poll) => set((state) => ({
        myPolls: [...state.myPolls, poll]
    })),
    removePoll: (poll: Poll) => set((state) => ({
        myPolls: state.myPolls.filter((p) => p.id!== poll.id)
    })),
    addOption: (option: PollOption) => set((state) => ({
        actionPoll: { ...state.actionPoll, options: [...(state.actionPoll?.options || []), option] } as Poll
    })),
    removeOption: (option: PollOption) => set((state) => ({
        actionPoll: {...state.actionPoll, options: state.actionPoll?.options.filter((o) => o.id!== option.id) } as Poll
    })),
    vote: (option: PollOption) => set((state) => ({
        actionPoll: {...state.actionPoll, options: state.actionPoll?.options.map((o) => o.id === option.id? {...o, votes: o.votes + 1 } : o) } as Poll
    })),
    reset: () => set({
        myPolls: [],
        actionPoll: null
    }),
    setActionPollTitle: (title: string) => set((state) => ({
        actionPoll: {...state.actionPoll, title } as Poll
    })),
    setActionPollDescription: (description: string) => set((state) => ({
        actionPoll: {...state.actionPoll, description } as Poll
    }))
}));