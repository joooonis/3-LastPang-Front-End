import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const titleContainer = style({
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
