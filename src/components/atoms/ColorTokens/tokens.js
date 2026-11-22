/**
 * The colour tokens defined in src/styles/tokens.css, as data, so the
 * design-system page can document them. Keep the two files in sync.
 */
export const COLOR_TOKENS = [
  { name: 'Gulf', variable: '--color-gulf', value: '#0E3A53', use: 'Headings, primary buttons, links, focus ring', contrast: '12.0 : 1 on white' },
  { name: 'Gulf soft', variable: '--color-gulf-soft', value: '#1F5573', use: 'Tag text, placeholder backgrounds', contrast: '8.1 : 1 on white' },
  { name: 'Ink', variable: '--color-ink', value: '#13222C', use: 'Body text', contrast: '16.2 : 1 on white' },
  { name: 'Muted', variable: '--color-muted', value: '#52616B', use: 'Secondary text, captions', contrast: '5.9 : 1 on salt' },
  { name: 'Salt', variable: '--color-salt', value: '#F3F6F7', use: 'Page background', contrast: 'Background' },
  { name: 'Paper', variable: '--color-paper', value: '#FFFFFF', use: 'Cards, inputs, header', contrast: 'Background' },
  { name: 'Line', variable: '--color-line', value: '#D6DEE3', use: 'Borders, dividers', contrast: 'Decorative' },
  { name: 'Sunset', variable: '--color-sunset', value: '#F07F2D', use: 'Decorative accent: icons, rules, stamps (not for text)', contrast: '2.7 : 1, decorative only' },
  { name: 'Sunset text', variable: '--color-sunset-text', value: '#A6470B', use: 'Accent text such as the "Greetings" line', contrast: '6.0 : 1 on white' },
  { name: 'Sunset soft', variable: '--color-sunset-soft', value: '#FDE6D3', use: 'Active navigation background', contrast: 'Background' },
];
