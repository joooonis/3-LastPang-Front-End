import { theme } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const modalWrapper = style({
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});

export const modalOveray = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
});

export const modalContent = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: '20px 20px 0px 0px',
  padding: '2rem',
  overflow: 'hidden',
  zIndex: 101,
});

export const heading = style({
  fontSize: 32,
  fontWeight: theme.fontWeights.medium,
  marginTop: 8,
  marginBottom: theme.space.md,
});

export const marginTop = style({
  marginTop: theme.space.xs,
});
