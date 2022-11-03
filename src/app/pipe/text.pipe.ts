import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text',
  pure: true,
})
export class TextPipe implements PipeTransform {

  transform(value: string, prefix: string, operator: 'uppercase' | 'lowercase' = 'uppercase'): string {

    console.log('TextPipe', value)

    value = !value ? prefix : prefix + ' ' + value

    switch (operator) {
      case "uppercase":
        return value.toUpperCase()
      default:
        return value.toLowerCase()
    }


  }

}
