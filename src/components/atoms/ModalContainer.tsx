import {
  Modal,
  ModalBodyProps,
  ModalHeaderProps,
  ModalProps,
  ModalFooterProps,
} from "@nextui-org/react";

export interface ModalContrinerProps extends ModalProps {
  headerContent?: React.ReactNode;
  headerProps?: ModalHeaderProps;
  bodyContent?: React.ReactNode;
  bodyProps?: ModalBodyProps;
  footerContent?: React.ReactNode;
  footerProps?: ModalFooterProps;
}

const ModalContainer = ({
  headerContent,
  headerProps,
  bodyContent,
  bodyProps,
  footerContent,
  footerProps,
  ...rest
}: ModalContrinerProps) => {
  return (
    <Modal {...rest}>
      <Modal.Header {...headerProps}>{headerContent}</Modal.Header>
      <Modal.Body {...bodyProps}>{bodyContent}</Modal.Body>
      <Modal.Footer {...footerProps}>{footerContent}</Modal.Footer>
    </Modal>
  );
};
export default ModalContainer;
