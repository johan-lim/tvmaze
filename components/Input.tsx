import React, { FunctionComponent } from 'react';

type InputProps = {
    value: string;
    placeholder: string;
    onChange: (e: any) => void;
    onEnterPress: () => void;
}

export const Input: FunctionComponent<InputProps> = ({ value, onChange, placeholder, onEnterPress }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onEnterPress();
        }
    }
    return (
        <input
            type="text"
            value={value}
            onKeyDown={handleKeyDown}
            onChange={onChange}
            className="block p-2 border w-3/4 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            placeholder={placeholder}
        />)
}
