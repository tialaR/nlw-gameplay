import React, { ReactNode } from 'react';
import { ModalProps, Modal, View, TouchableWithoutFeedback } from 'react-native';

import { BackGround } from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export const ModalView = ({ children, closeModal, ...rest }: Props) => {
  return (
      <Modal 
        {...rest} 
        transparent
        animationType="slide"
        statusBarTranslucent
    >
        <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <BackGround>
                        <View style={styles.bar} />
                        { children }
                    </BackGround>
                </View>
            </View>
        </TouchableWithoutFeedback>
      </Modal>
  );
}
