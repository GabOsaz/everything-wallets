import styled, { keyframes } from "styled-components";
import Modal from "../../../components/shared/Modal";
import { useState } from "react";
import Button from "../../../components/shared/Button";
import RenderIf from "../../../utils/RenderIf";
import ErrorComponent from "../../../components/home/ErrorComponent";

function AddWalletModal({
  isOpen,
  onClose,
  wallets,
  isLoading,
  getWalletsErrorMsg,
  refetch,
  createWallet,
  isFetchingWallets,
}: {
  isOpen: boolean;
  onClose: () => void;
  wallets: any[] | null;
  isLoading: boolean;
  getWalletsErrorMsg: string | null;
  refetch: () => void;
  errorCreatingAccount: string | null;
  createWallet: (body: any) => void;
  isFetchingWallets: boolean;
}) {
  const [selectedWalletValue, setSelectedWalletValue] = useState("");

  return (
    <Modal isOpen={isOpen}>
      {/* <RenderIf condition={true}> */}
      <RenderIf condition={!isFetchingWallets && getWalletsErrorMsg === "Network error"}>
        <ErrorContainer>
          <ErrorComponent onClick={refetch} isLoading={isFetchingWallets} errorText="Network Error" />
        </ErrorContainer>
      </RenderIf>
      <RenderIf condition={!getWalletsErrorMsg && !isFetchingWallets}>
        <ModalContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon src="/wallet/close-icon.svg" alt="Close Icon" />
          </CloseButton>
          <ModalContent>
            <Title>Add new wallet</Title>
            <Description>
              The crypto wallet will be created instantly and be available in your
              list of wallets.
            </Description>
            <Label>Select wallet</Label>
            <Select
              value={selectedWalletValue}
              onChange={(e) => setSelectedWalletValue(e.target.value)}
            >
              {wallets?.map((option: any) => (
                <option key={option.id} value={option.currency}>
                  {option.name}
                </option>
              ))}
            </Select>
            <CreateBtnDiv>
              <Button
                loadingText="Creating Wallet..."
                onClick={() => createWallet({ currency: selectedWalletValue })}
                isLoading={isLoading}
                text="Create Wallet"
              />
            </CreateBtnDiv>
          </ModalContent>
        </ModalContainer>
      </RenderIf>
    </Modal>
  );
}

export default AddWalletModal;

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateX(20px); }
  to { transform: translateX(0); }
`;

const ModalContainer = styled.div`
  padding: 74px 24px;
  position: relative;
  animation: ${slideDown} 0.3s ease-out, ${fadeIn} 0.3s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 74px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
  background-color: transparent;
  padding: 4px 6px;
  transform: scale(0.8);
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1);
    background-color: #9aa5b14d;
  }
`;

const CloseIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: #3e4c59;
`;

const Label = styled.label`
  margin-top: 43px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #3e4c59;
`;

const Select = styled.select`
  margin-top: 14px;
  padding: 16px 24px;
  padding-right: 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #000;
  border: 1px solid #d1d5da;
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  background-image: url("/wallet/chevron-down.png");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 20px;
  cursor: pointer;
`;

const CreateBtnDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;
`;

const ErrorContainer = styled.div`
  margin-top: 50%;
`
