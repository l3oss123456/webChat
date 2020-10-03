import styled from "styled-components";
import * as Theme from "../../../cores/theme/index";

export const StyledBackgroundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: ${Theme.colors.midnightEx};
`;

export const ScrollContainer = styled.div`
  background: ${Theme.colors.gray};
  height: ${(props) => (props.height ? props.height : "")};
  overflow-y: ${(props) => (props.overflowy ? "scroll" : "")};
  width: ${(props) => (props.width ? props.width : "")};
  overflow-x: ${(props) => (props.overflowx ? "scroll" : "")};
  color: ${(props) => (props.color ? props.color : "white")};
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledUl = styled.ul`
  list-style-type: none;
  list-style-position: outside;
  padding: 0;
  margin-left: 10px;
  margin-top: 5px;
`;
