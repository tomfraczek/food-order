import React from 'react';
import { Field } from 'react-final-form'

import { CustomFieldContainer, Label } from './custom-field.styles';

const CustomField = ({
    children,
    label,
    ...otherProps
}) => (
    <CustomFieldContainer>
        {label ? <Label>{label}: </Label> : null}
        <Field {...otherProps}>
            {children}
        </Field>
    </CustomFieldContainer>
)

export default CustomField;