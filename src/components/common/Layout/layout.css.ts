import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { breakpoints } from '@/styles/theme.css';

export const wrapper = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.body,
  height: `100vh`,
  width: `100%`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  fontSize: theme.fontSize.md,
  maxWidth: breakpoints.mobile,
  minHeight: `100%`,
  margin: `0 auto`,
});

export const innerWrapper = style({
  width: `100%`,
  height: `100%`,
  padding: theme.space.md,
  paddingTop: theme.space.lg,
});
