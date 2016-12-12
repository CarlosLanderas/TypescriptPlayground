export interface Module1Interface{};
export class Module1Class{};

export enum Module1Enum {
    Yes,
    No    
}
export function logModule<T>(value : T) :Boolean {
  console.log(value);
  return true;
} 