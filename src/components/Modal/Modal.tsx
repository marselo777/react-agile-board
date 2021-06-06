import {Box} from 'components/Box';
import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {StyledModalWrapper} from './Modal.styles';

const modalRoot = document.getElementById('modal-root') as HTMLDivElement;

interface IModalProps {
    children?: React.ReactNode;
    onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Modal = ({children, onClose = () => null}: IModalProps) => {
    const [open, setOpen] = useState(true);

    const ref = useRef(null);

    const onModalClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === ref.current) {
            onClose && onClose(e);
            setOpen(false);
        }
    };

    if (!open) return null;

    const ModalContainer = (
        <StyledModalWrapper ref={ref} onClick={onModalClose}>
            <Box>{children}</Box>
        </StyledModalWrapper>
    );

    return ReactDOM.createPortal(ModalContainer, modalRoot);
};
