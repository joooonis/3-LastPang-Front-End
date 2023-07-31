import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const profileContainer = style({
  height: `100px`,
  width: `100%`,
  display: `flex`,
  alignItems: `center`,
  gap: `0.5rem`,
  borderTop: `1px solid ${theme.colors.line}`,
  borderBottom: `1px solid ${theme.colors.line}`,
});

export const profileWrapper = style({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  gap: `0.1rem`,
});

export const avatar = style({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `62px`,
  height: `62px`,
  flexShrink: `0`,
  borderRadius: `50%`,
  // TODO: 활성화 여부 추가
  border: `3px solid ${theme.colors.primary.main}`,
});

export const profileName = style({
  // TODO: 활성화 여부 추가
  color: theme.colors.primary.main,
  fontSize: theme.fontSize.xs,
});
