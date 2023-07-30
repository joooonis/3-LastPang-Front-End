import { theme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const input = style({
  width: '100%',
  height: '38px',
  padding: '0 10px',
  border: 'none',
  backgroundColor: theme.colors.grey[100],
  borderRadius: theme.radii.sm,
  fontSize: '16px',
  '::placeholder': {
    color: theme.colors.blueGrey[100],
    fontWeight: theme.fontWeights.regular,
  },
  selectors: {
    '&:focus': {
      outline: `1px solid ${theme.colors.primary.main}`,
      color: theme.colors.black,
    },
  },
});
