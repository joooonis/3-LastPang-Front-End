import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const heading = style({
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.heading,
  marginLeft: theme.space.xs,
  marginBottom: theme.space.lg,
});

export const caption = style({
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeights.regular,
  color: theme.colors.primary.main,
  marginLeft: theme.space.xs,
});

export const cardWrapper = style({
  display: `flex`,
  minHeight: 528,
  flexDirection: `column`,
  alignItems: `left`,
  padding: theme.space.sm,
  marginTop: theme.space.md,
  borderRadius: theme.radii.lg,
  boxShadow: theme.boxShadow.md,
});

export const card = style({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  alignItems: `left`,
  padding: theme.space.md,
  borderRadius: theme.radii.lg,
  border: `1px solid ${theme.colors.primary.main}`,
  marginBottom: theme.space.sm,
  transition: `all 0.1s ease-in-out`,
  ':hover': {
    backgroundColor: theme.colors.primary.main,
    cursor: `pointer`,
  },
});

globalStyle(`${card}:last-child`, {
  marginBottom: theme.space.lg,
});

globalStyle(`${card} h2`, {
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.primary.main,
});

globalStyle(`${card}:hover h2`, {
  color: theme.colors.white,
});

globalStyle(`${card} p`, {
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeights.regular,
  color: theme.colors.body,
});

globalStyle(`${card}:hover p`, {
  color: theme.colors.grey[300],
});

export const avatarContainer = style({
  margin: `0 auto`,
  display: `flex`,
  justifyContent: `center`,
  alignItems: `center`,
  width: 162,
  height: 162,
  borderRadius: theme.radii.full,
  backgroundColor: theme.colors.grey[200],
  border: `1px dashed ${theme.colors.grey[800]}`,
  ':hover': {
    border: `1px dashed ${theme.colors.primary.main}`,
    cursor: `pointer`,
  },
});

export const avatarImage = style({});
