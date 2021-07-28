import { css } from 'styled-components';

const flex = css`
  display: flex;
  justify-content: ${({ justify }) => `${justify}`};
  align-items: ${({ align }) => `${align}`};
`;

export { flex };
