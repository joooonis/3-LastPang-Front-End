import { theme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const solid = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 46,
  color: theme.colors.white,
  backgroundColor: theme.colors.purple[500],
  borderRadius: theme.radii.sm,
  border: 'none',
  transition: 'opacity 0.2s ease-in-out',
  ':hover': {
    opacity: 0.9,
    cursor: 'pointer',
  },
  ':disabled': {
    backgroundColor: theme.colors.grey[400],
  },
});

export const outline = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 46,
  color: theme.colors.purple[500],
  borderRadius: theme.radii.sm,
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.purple[500]}`,
  transition: 'opacity 0.2s ease-in-out',

  ':hover': {
    opacity: 0.9,
    cursor: 'pointer',
  },
  ':disabled': {
    backgroundColor: 'transparent',
    color: theme.colors.grey[400],
    border: `1px solid ${theme.colors.grey[400]}`,
  },
});
