import styled, { keyframes } from "styled-components";
import { useState } from "react";
import AddWalletModal from "../AddWalletModal";

const wallets = [
  { name: "Naira", balance: "₦105,160,076.51", icon: "naira-icon.svg" },
  { name: "Bitcoin", balance: "10.36490987 BTC", icon: "bitcoin-icon.svg" },
  { name: "Ethereum", balance: "10.36490987 ETH", icon: "ethereum-icon.svg" },
  { name: "Litecoin", balance: "10.36490987 LTC", icon: "litecoin-icon.svg" },
];

const Wallet = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container>
      <TitleRow>
        <Title>Wallets</Title>
        <AddNewWallet onClick={() => setIsModalOpen(true)}>+ Add new wallet</AddNewWallet>
      </TitleRow>
      <WalletGrid>
        {wallets.map((wallet, index) => (
          <WalletCard key={wallet.name} delay={index * 0.1}>
            <WalletHeader>
              <WalletIcon src={`/${wallet.icon}`} alt={`${wallet.name} icon`} />
              <WalletName>{wallet.name}</WalletName>
            </WalletHeader>
            <WalletBalance>{wallet.balance}</WalletBalance>
            <ArrowButton>
              <span>→</span>
            </ArrowButton>
          </WalletCard>
        ))}
      </WalletGrid>
      <AddWalletModal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
    </Container>
  );
};

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  margin-top: -30px
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #000000
`;

const AddNewWallet = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: #000;
  border: none;
  background-color: white;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const WalletGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
  border: 1px solid red
`;

const WalletCard = styled.div<{ delay: number }>`
  width: 230px;
  height: 150px;
  padding: 20px;
  background-color: #111111;
  background-image: url('/wallet/card-svg.svg');
  background-size: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 10px 20px 0px #8A8A8A80;
  animation: ${fadeInDown} 0.5s ease forwards;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const WalletHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WalletIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const WalletName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

const WalletBalance = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  align-self: flex-end;
  background-color: #333;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #444;
  }
`;

export default Wallet;
