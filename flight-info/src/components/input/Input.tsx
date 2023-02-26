import React from "react";
import { InputContainer, InputElement, Label } from "./Input.styles";

interface InputProps {
    name: string;
    type?: "text" | "number" | "search" | "password";
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input = ({
    name,
    type = "text",
    disabled = false,
    onChange,
    label,
    placeholder,
}: InputProps) => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label}</Label>
            <InputElement
                type={type}
                id={name}
                name={name}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
            />
        </InputContainer>
    );
};
