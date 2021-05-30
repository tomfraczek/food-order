import React, { useState } from 'react';
import { Form, Field } from 'react-final-form'
import TimeField from 'react-simple-timefield';

import CustomButton from '../custom-button/custom-button.component';
import CustomField from '../custom-field/custom-field.component';
import SpicinessLevel from  '../spiciness-level/spiciness-level.component';
import ModalSummary from '../modal-summary/modal-summary.component';
import Spinner from '../spinner/spinner.component';

import { CustomFormContainer, TypeOptions, IconContainer, ButtonContainer } from './custom-form.styles';
import { Label, CustomFieldContainer } from '../custom-field/custom-field.styles';

import { ReactComponent as PizzaActive } from '../../assets/pizza.svg';
import { ReactComponent as PizzaUnctive } from '../../assets/pizza-unactive.svg';
import { ReactComponent as SoupActive } from '../../assets/soup.svg';
import { ReactComponent as SoupUnactive } from '../../assets/soup-unactive.svg';
import { ReactComponent as SandwichActive } from '../../assets/sandwich.svg';
import { ReactComponent as SandwichUnactive } from '../../assets/sandwich-unactive.svg';





const CustomForm = () => {

    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async values => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
        fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', requestOptions)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setIsModal(true);
                setIsLoading(false);
            });
    }
    const parse = value => parseFloat(value);

    const RenderFields = value => {
        if(value.type === 'pizza'){
            return <div className="pizza-option">
                        <CustomField 
                            name="no_of_slices" 
                            component="input" 
                            placeholder="Number of slices" 
                            label='Number of slices' 
                            parse={parse}
                            type='number'
                            required 
                            min='6'
                            max='16'
                        />

                        <CustomField 
                            name="diameter" 
                            component="input" 
                            placeholder="Diameter" 
                            label='Diameter' 
                            parse={parse}
                            type='number'
                            required 
                            min="22" 
                            max="52"  
                            step='0.1'
                        />
                    </div>
        } else if( value.type === 'soup' ){
            return <CustomField 
                        name="spiciness_scale" 
                        component="input" 
                        placeholder="1-10" 
                        label='Spiciness scale' 
                        parse={parse}
                        type='number'
                        min='1' 
                        max='10'
                        required 
                    />
            
        } else if( value.type === 'sandwich'){
            return <CustomField 
                        name="slices_of_bread" 
                        component="input" 
                        placeholder="1-2" 
                        label='Slices of bread' 
                        parse={parse}
                        type='number'
                        min='1' 
                        max='2'
                        required 
                    />
        }

        return null;
    }

    const RenderIcons = value => {
        return <TypeOptions>
            {
                value.type === 'pizza' ? 
                <IconContainer>
                    <PizzaActive />
                </IconContainer> 
                : 
                <IconContainer>
                    <PizzaUnctive />
                </IconContainer> 
            }
            {
                value.type === 'sandwich' ? 
                <IconContainer>
                    <SandwichActive /> 
                </IconContainer> 
                : 
                <IconContainer>
                    <SandwichUnactive /> 
                </IconContainer> 
            }
            {
                value.type === 'soup' ? 
                <IconContainer>
                    <SoupActive /> 
                </IconContainer> 
                : 
                <IconContainer>
                    <SoupUnactive /> 
                </IconContainer> 
            }
        </TypeOptions>
    }

    const RenderSpinner = () => {
        if(isLoading){
            return <Spinner />
        }

        return null;
    }

    const RenderModal = () => {
        if(isModal){
            return <ModalSummary toggleModal={toggleModal} data={data}/>
        }

        return null;
    }

    const toggleModal = () => {
        setIsModal(!isModal);
    }

    return(
            <CustomFormContainer>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form
                            onSubmit={event => {
                            handleSubmit(event).then(form.reset);
                        }}
                >

                    <CustomField 
                        name="name" 
                        component="input" 
                        label='Name' 
                        type='text'
                        required 
                    />

                    <Field name='preparation_time' required>
                        {props => (
                            <CustomFieldContainer>
                                <Label>Preparation time: </Label>
                                <TimeField
                                    showSeconds
                                    onChange={props.input.onChange} 
                                />
                            </CustomFieldContainer>
                        )}
                    </Field>

                    <CustomField
                        name="type" 
                        component='select'
                        label='Type'
                        required
                    >
                        <option />
                        <option value="pizza">Pizza</option>
                        <option value="sandwich">Sandwich</option>
                        <option value="soup">Soup</option>
                    </CustomField>

                    <RenderIcons type={values.type} />

                    <div>
                        <RenderFields type={values.type} />
                        {
                            values.type === 'soup' ?
                            <SpicinessLevel level={values.spiciness_scale} /> 
                            : null
                        }
                    </div>

                    <ButtonContainer>
                        <CustomButton 
                            type="submit" 
                            disabled={submitting}
                        >
                            Submit
                        </CustomButton>

                        <CustomButton 
                            inverted
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </CustomButton>
                  </ButtonContainer>

                  <RenderSpinner />
                  
                </form>
              )}
            />

            <RenderModal />

            </CustomFormContainer>
    )
}

export default CustomForm;