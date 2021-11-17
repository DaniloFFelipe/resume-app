import styled from 'styled-components/native';

export type ContainerProps = {
  color?: string;
};

type TitleColor = {
  color?: string;
  size?: number;
  family?: 'regular' | 'medium' | 'semibold';
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  padding: ${({ theme }) => theme.space[8]}px
    ${({ theme }) => theme.space[16]}px;
  background: ${({ theme, color }) => color || theme.colors.button};
  border-radius: ${({ theme }) => theme.radius.base}px;

  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Icon = styled.View`
  position: absolute;

  right: 0;
  margin-right: ${({ theme }) => theme.space[8]}px;
`;

export const Title = styled.Text<TitleColor>`
  font-size: ${({ theme, size }) => size || theme.fontSizes['24']}px;
  font-family: ${({ theme, family }) => theme.fonts[family || 'medium']};
  color: ${({ theme, color }) => color || theme.colors.secondary};
`;
