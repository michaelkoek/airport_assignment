import React from 'react';

interface InputProps {
    name: string;
    type?: 'text' | 'number' | 'search' | 'password';
    disabled?: boolean;
    onChange(): void;
}

export const Input = ({ name, type = "text", disabled = false, onChange }: InputProps) => {

    return (
        <section>
            <input type={type} name={name} disabled={disabled} onChange={onChange} />
        </section>
    );
};