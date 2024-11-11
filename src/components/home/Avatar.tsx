import styled from "styled-components";

function Avatar({ name }: { name: string }) {
  const nameInital = name.charAt(0);
  
  return <AvataDiv>{nameInital}</AvataDiv>;
}

export default Avatar;

const AvataDiv = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9AA5B14D;
  font-weight: 500;
  font-size: 18px;
  border-radius: 100%;
  color: #3e4c59;
`;
