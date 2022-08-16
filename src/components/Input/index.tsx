import { InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import { InputContainer } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    placeholder?: string;
    borderColor?: string;
    password?:boolean;
    select?:boolean;
    error?: FieldError | null;
}

export const Input: React.FC <InputProps> = ({ label, name, placeholder, error, borderColor, password = false, select = false, ...rest }) => {
    
    const openEye = <FontAwesomeIcon icon={faEye} />;
    const slashEye = <FontAwesomeIcon icon={faEyeSlash} />;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const conditionalRender = () => {
        if(password){
            return (
                <div>
                    <input
                        placeholder={placeholder}
                        type={passwordShown ? "text" : "password"}
                        {...rest}
                    />
                    <i onClick={togglePasswordVisiblity}>{passwordShown ? openEye : slashEye}</i>
                </div>
            )
        } else if (select){
            return (
                <div>
                    <select name="course_module">
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                    </select>
                </div>
            )
        } else {
            return (
                <input 
                    placeholder={placeholder}
                    {...rest}
                />
            )
        }
    }
    
    return (
        <InputContainer borderColor={borderColor}>
            <label>{label}</label>
            {conditionalRender()}
            {!!error && <span>{error.message}</span> }
        </InputContainer>

    )
}