"use client";

import { FormInput } from "@/components/molecules/form-input";
import { FormTextArea } from "@/components/molecules/form-texr-area";
import { usePollsModuleStore } from "@/model/polls/polls-module-store";
import { usePollUIStore } from "@/model/ui-store/polls/polls-ui-model";
import { FC } from "react";

interface StepsOneProps {
	classes?: string[];
}

export const StepsOne: FC<StepsOneProps> = (props) => {

	const { classes } = props;

	const { actionPoll, setActionPollDescription, setActionPollTitle } = usePollsModuleStore(state => state);
	const { nextStep } = usePollUIStore(state => state);


	return (
		<form className={`flex w-8/12 pt-12 self-center flex-col gap-4 font-medium ${classes?.join(' ')}`}>

			<FormInput
				id="title"
				label="Poll title"
				placeholder="Enter title"
				type="text"
				value={actionPoll?.title}
				onChange={setActionPollTitle} 
			/>
			<FormTextArea
				id="description"
				label="Poll description"
				placeholder="Enter description"
				value={actionPoll?.description}
				onChange={setActionPollDescription} 
			/>

			<button type="button" onClick={nextStep} className="w-full text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        </form>
	)
}
