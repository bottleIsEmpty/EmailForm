import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {

    //Возраст не менее 18 лет
    static min18Years(control: AbstractControl) : ValidationErrors | null {
        let currentDate = +new Date();

        let val = (control.value as string).replace(/-/g, '/');
        let inputDate = +new Date(val);

        //очень костыльное нахождение возраста
        let age = (currentDate - inputDate) / 1000 / 60 / 60 / 24 / 365.4;
        
        return (age < 18) ? { tooYoung: true } : null;
    }
}