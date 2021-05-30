import React from 'react';

import { ReactComponent as Icon } from '../../assets/tick.svg';

import CustomButton from '../custom-button/custom-button.component';

import { 
    ModalContainer, 
    ModalNotification, 
    IconContainer, 
    OrderContainer,
    DetailContainer,
    DetailHeader
 } from './modal-summary.styles';


const ModalSummary = ({toggleModal, data}) => (
    <ModalContainer>

        <ModalNotification>
            Your order has been submited
        </ModalNotification>        

        <IconContainer>
            <Icon />
        </IconContainer>

        <OrderContainer>
            <DetailHeader>Order Details</DetailHeader>
            {
                data.name ? 
                    <DetailContainer>
                        <span>Name:</span><span>{data.name}</span>
                    </DetailContainer> 
                : null
            }

            {
                data.preparation_time ? 
                    <DetailContainer>
                        <span>Preparation time:</span><span>{data.preparation_time}</span>
                    </DetailContainer> 
                : null
            }

            {
                data.type ? 
                    <DetailContainer><span>Type:</span><span>{data.type}</span></DetailContainer> 
                : null
            }

            {
                data.slices_of_bread ? 
                    <DetailContainer>
                        <span>Slices of bread:</span><span>{data.slices_of_bread}</span>
                    </DetailContainer> 
                : null
            }

            {
                data.no_of_slices ? 
                    <DetailContainer>
                        <span>Number of slices:</span><span>{data.no_of_slices}</span>
                    </DetailContainer> 
                : null
            }

            {
                data.diameter ? 
                    <DetailContainer>
                        <span>Diameter:</span><span>{data.diameter}'</span>
                    </DetailContainer> 
                : null
            }

            {
                data.spiciness_scale ? 
                    <DetailContainer>
                        <span>Spiciness scale:</span><span>{data.spiciness_scale}/10</span>
                    </DetailContainer> 
                : null
            }

            <CustomButton onClick={toggleModal}>
                close
            </CustomButton>

        </OrderContainer>

    </ModalContainer>
)

export default ModalSummary;