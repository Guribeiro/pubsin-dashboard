/* eslint-disable @typescript-eslint/no-empty-interface */
// import type { ThemeType } from '../src/styles/global';

// declare module 'styled-components' {
//   export interface DefaultTheme extends ThemeType {}
// }

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
    };
  }
}
