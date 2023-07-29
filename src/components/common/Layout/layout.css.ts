import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';
import { breakpoints } from '@/styles/theme.css';

export const wrapper = style({
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.background,
  color: vars.colors.body,
  height: `100vh`,
  width: `100%`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  fontSize: vars.fontSize.md,
});

export const innerWrapper = style({
  maxWidth: breakpoints.mobile,
  width: `100%`,
  minHeight: `100%`,
  padding: vars.space.lg,
  border: `1px solid ${vars.colors.purple[500]}`,
});
