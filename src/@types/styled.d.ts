import {MainTheme} from 'theme/theme';
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends MainTheme {}
}
