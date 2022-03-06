import React, { useEffect, useState } from 'react'
import { AlertWrapper, AlertInstance, CloseAlertButton, IndicationIcon } from './styled/Alert.styled'
import { AnimatePresence, motion } from "framer-motion"
import { BsFillExclamationCircleFill, BsFillCheckCircleFill, BsXLg } from "react-icons/bs"

function Alert({isTitleError, isUrlError, isInvalidUrl, isAdded, setIsAdded }) {

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let titleTimeout;
        if (isTitleError === true) {
            setErrors(prevErrors => [...prevErrors, {title: 'no-title', type: 'error', message: 'Fill in the title'}]);
            titleTimeout = setTimeout(() => {
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-title'));
            }, 5000);
        } else {
            setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-title'));
        }

        return () => {clearTimeout(titleTimeout)}
    }, [isTitleError]);

    useEffect(() => {
        let noUrlTimeout;
        if (isUrlError === true) {
            setErrors(prevErrors => [...prevErrors, {title: 'no-url', type: 'error', message: 'Fill in the URL'}]);
            noUrlTimeout = setTimeout(() => {
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-url'));
            }, 5000);
        } else {
            setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-url'));
        }

        return () => {clearTimeout(noUrlTimeout)}
    }, [isUrlError]);

    useEffect(() => {
        let invalidUrlTimeout;
        if (isInvalidUrl === true) {
            setErrors(prevErrors => [...prevErrors, {title: 'invalid-url', type: 'error', message: 'Invalid URL'}]);
            invalidUrlTimeout = setTimeout(() => {
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'invalid-url'));
            }, 5000);
        } else {
            setErrors(prevErrors => prevErrors.filter(error => error.title != 'invalid-url'));
        }

        return () => {clearTimeout(invalidUrlTimeout)}
    }, [isInvalidUrl]);

    useEffect(() => {
        let addedTimeout;
        if (isAdded === true) {
            setErrors(prevErrors => [...prevErrors, {title: 'image-added', type: 'notification', message: 'Image added'}]);
            addedTimeout = setTimeout(() => {
                setIsAdded(false);
            }, 5000);
        } else {
            setErrors(prevErrors => prevErrors.filter(error => error.title != 'image-added'));
        }

        return () => {clearTimeout(addedTimeout)}
    }, [isAdded]);

    function handleAlertClose(title) {
        switch(title) {
            case 'no-title':
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-title'));
                break;
            case 'no-url':
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'no-url'));
                break;
            case 'invalid-url':
                setErrors(prevErrors => prevErrors.filter(error => error.title != 'invalid-url'));
                break;
            case 'image-added':
                setIsAdded(false);
                break;
        }
    }
    
  return (
    <AlertWrapper>
        <AnimatePresence>
            {errors.map((error) => (
                <motion.div 
                initial={{ 
                    opacity: 0,
                    x: -20 }}
                animate={{ 
                    opacity: 1,
                    x: 0 }}
                exit={{ 
                    opacity: 0,
                    x: 20
                 }}
                key={error.title}>
                    <AlertInstance type={error.type}>
                        <div>
                            <IndicationIcon type={error.type}>
                                {error.type === 'error' ? <BsFillExclamationCircleFill /> : <BsFillCheckCircleFill />}
                            </IndicationIcon>
                            <p>{error.message}</p>
                        </div>
                        <CloseAlertButton onClick={() => handleAlertClose(error.title)}>
                            <BsXLg />
                        </CloseAlertButton>
                    </AlertInstance>
                </motion.div>
            ))}
        </AnimatePresence>
    </AlertWrapper>
  )
}

export default Alert