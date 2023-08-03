import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const cardsWrapper = style({
  display: `flex`,
  minHeight: 528,
  flexDirection: `column`,
  alignItems: `left`,
  padding: 24,
  marginTop: theme.space.xs,
  borderRadius: theme.radii.lg,
  boxShadow: theme.boxShadow.md,
});

export const flex = style({
  display: `flex`,
  justifyContent: `space-between`,
  alignItems: `center`,
});

export const label = style({
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  width: 38,
  height: 38,
  marginRight: theme.space.xs,
  backgroundColor: theme.colors.grey[100],
  borderRadius: theme.radii.sm,
});
