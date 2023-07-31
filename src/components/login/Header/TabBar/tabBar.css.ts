import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const tabBarContainer = style({
  width: `100%`,
  height: `60px`,
  display: `flex`,
  alignItems: `center`,
  boxShadow: `0px 4px 8px 0px rgba(73, 85, 101, 0.10)`,
});

export const tabMenu = style({
  width: `20%`,
  height: `100%`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontSize: theme.fontSize.sm,
  color: theme.colors.body,
  marginBottom: `4px`,
  textDecorationLine: 'none',
});

export const featuredTab = style({
  borderBottom: `4px solid ${theme.colors.primary.main}`,
  marginBottom: `0`,
});
