import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css';

export const progressBar = style({
  width: `100%`,
  height: vars.space['2xs'],
  backgroundColor: vars.colors.grey[200],
  borderRadius: vars.radii.sm,
});

export const progressText = style({
  display: `flex`,
  justifyContent: 'flex-end',
  fontSize: vars.fontSize.md,
  fontWeight: vars.fontWeights.bold,
  marginBottom: vars.space['2xs'],
});

export const heading = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.heading,
  marginLeft: vars.space.xs,
  marginBottom: vars.space.lg,
});

export const caption = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeights.regular,
  color: vars.colors.primary.main,
  marginLeft: vars.space.xs,
});

export const cardWrapper = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `left`,
  padding: vars.space.sm,
  marginTop: vars.space.md,
  borderRadius: vars.radii.lg,
  boxShadow: vars.boxShadow.md,
});

export const card = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `left`,
  padding: vars.space.md,
  borderRadius: vars.radii.lg,
  border: `1px solid ${vars.colors.primary.main}`,
  marginBottom: vars.space.sm,
});

export const cardTitle = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeights.bold,
  color: vars.colors.primary.main,
});

export const cardText = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeights.regular,
  color: vars.colors.body,
});
