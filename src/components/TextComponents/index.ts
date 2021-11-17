import styled from 'styled-components/native';

type TextProps = {
  size?: number;
  family?: 'regular' | 'medium' | 'semibold';
  color?: string;
  margin?: string;

  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
};

export const Text = styled.Text<TextProps>`
  font-size: ${({ theme, size }) => size || theme.fontSizes[14]}px;
  font-family: ${({ theme, family }) => theme.fonts[family || 'regular']};
  color: ${({ theme, color }) => color || theme.colors.gray};

  margin: ${({ margin }) => (!!margin ? margin : 0)};
  margin-top: ${({ marginTop }) => (!!marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (!!marginBottom ? marginBottom : 0)}px;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)}px;
  margin-right: ${({ marginRight }) => (!!marginRight ? marginRight : 0)}px;
`;

export const Title = styled.Text<TextProps>`
  font-size: ${({ theme, size }) => size || theme.fontSizes['18']}px;
  font-family: ${({ theme, family }) => theme.fonts[family || 'semibold']};
  color: ${({ theme, color }) => color || theme.colors.secondary};

  margin: ${({ margin }) => (!!margin ? margin : 0)};
  margin-top: ${({ marginTop }) => (!!marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (!!marginBottom ? marginBottom : 0)}px;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)}px;
  margin-right: ${({ marginRight }) => (!!marginRight ? marginRight : 0)}px;
`;

export const Heading = styled.Text<TextProps>`
  font-size: ${({ theme, size }) => size || theme.fontSizes['24']}px;
  font-family: ${({ theme, family }) => theme.fonts[family || 'semibold']};
  color: ${({ theme, color }) => color || theme.colors.secondary};

  margin: ${({ margin }) => (!!margin ? margin : 0)};
  margin-top: ${({ marginTop }) => (!!marginTop ? marginTop : 0)}px;
  margin-bottom: ${({ marginBottom }) => (!!marginBottom ? marginBottom : 0)}px;
  margin-left: ${({ marginLeft }) => (!!marginLeft ? marginLeft : 0)}px;
  margin-right: ${({ marginRight }) => (!!marginRight ? marginRight : 0)}px;
`;
