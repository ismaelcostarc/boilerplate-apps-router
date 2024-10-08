/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string | ReturnType<typeof css>;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}

export interface StyledComponentsSerializerOptions { 
  addStyles?: boolean, 
  classNameFormatter?: (index: number) => string 
} 

export declare const styleSheetSerializer: NewPlugin & {
  setStyleSheetSerializerOptions: (options?: StyledComponentsSerializerOptions) => void 
};