import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GeneratedString = new InjectionToken<string>('generatedString');

export function GeneratorFactory(stringLenght: number): (generator: GeneratorService) => string {
  return (generator: GeneratorService): string =>
    generator.generate(stringLenght);
}
// linter
