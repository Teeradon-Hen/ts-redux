import React from 'react';
import { Field } from 'redux-form';
export default function Form() {
    return (
        <div>Form</div>
    )
}
type testProps = {
    input: object;
    label: string;
    type: string;
    meta: {
        touched: string;
        error: string;
        warning: string;

    }
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }: testProps) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    </div>
)


export const TextField = () => {
    <Field name="username" type="text" component={renderField} label="Username" />

}