import React, { FC } from 'react'

interface FormTextAreaProps {
    classes?: string[];
    label?: string;
    placeholder?: string;
    type?: string;
    id?: string;
    onChange?: (value: any) => void;
    value?: string;
}

export const FormTextArea: FC<FormTextAreaProps> = (props) => {

    const { classes, label, placeholder, type, id, onChange, value } = props;

    const onChangeEvent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(event?.target?.value);
        }
    }

    return (
        <span className={`flex flex-col w-full gap-2 ${classes?.join(' ')}`}>
            <label htmlFor={id} className='text-lg text-slate-800'>{label}</label>
            <textarea 
                id={id} 
                placeholder={placeholder} 
                className='w-full rounded-xl border-2 border-slate-300 p-2 text-slate-600'
                value={value}
                rows={5}
                cols={50}
                onChange={onChangeEvent}
            />
        </span>
    )
}
