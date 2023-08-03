import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const cardWrapper = style({
  display: `flex`,
  minHeight: 528,
  flexDirection: `column`,
  alignItems: `left`,
  padding: 24,
  marginTop: theme.space.xs,
  borderRadius: theme.radii.lg,
  boxShadow: theme.boxShadow.md,
});
