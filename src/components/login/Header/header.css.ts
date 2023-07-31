import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { breakpoints } from '@/styles/theme.css';

export const header = style({
  display: `flex`,
  alignItems: `center`,
  gap: `1rem`,
  height: `55px`,
});

export const titleWrapper = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
  width: `100%`,
});

export const title = style({
  color: theme.colors.body,
  fontSize: theme.fontSize.md,
});

export const preview = style({
  color: theme.colors.body,
  fontSize: theme.fontSize.xs,
});

export const wrapper = style({
  backgroundColor: theme.colors.background,
  color: theme.colors.body,
  height: `100vh`,
  width: `100%`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  fontSize: theme.fontSize.md,
});

export const innerWrapper = style({
  maxWidth: breakpoints.mobile,
  width: `100%`,
  minHeight: `100%`,
  padding: theme.space.md,
  paddingTop: theme.space.lg,
  border: `1px solid ${theme.colors.purple[500]}`,
});
