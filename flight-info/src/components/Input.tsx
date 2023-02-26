import React from "react";
import styled from "styled-components";

interface InputProps {
    name: string;
    type?: "text" | "number" | "search" | "password";
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const InputContainer = styled.section`
    padding: 10px 5px;
    width: 100%;
`;

const InputElement = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    border: 2px solid var(--grey-storm);
`;

const Label = styled.label`
    margin-bottom: 5px;
    display: block;
    font-weight: 700;
`;

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
