import 'styled-components';
import { ColorsType } from 'styles/theme';
import { VariablesType } from 'styles/variable';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    variables: VariablesType;
  }
}
