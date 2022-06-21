import React, { useEffect, useRef } from 'react';
import styles from "./style.module.css";

const VerificationModal = ({ children, show, onClose }) => {
    const modalRef = useRef(null);
    useEffect(
        () => {
            if (show) {
                modalRef.current.classList.add(styles.visible);
            }
            else {
                modalRef.current.classList.remove(styles.visible);
            }
        },
        [
            show
        ]
    );
    return (
        <>
            <div ref={modalRef} className={`${styles.modal__wrap}`} onClick={onClose}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default VerificationModal;