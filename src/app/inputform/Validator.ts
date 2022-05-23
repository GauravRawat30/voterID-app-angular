import { FormControl } from '@angular/forms';

export function ageValidator(control: FormControl) {
  const ddate = new Date(control.value);
  const ddata = ddate.getTime();
  console.log(ddata);
  const tdate = new Date();
  console.log(tdate);
  const tdata = tdate.getTime();
  const total = tdata - ddata;
  const ageYear = Math.floor(total / (1000 * 60 * 60 * 24 * 365.25));
  console.log(ageYear);

  if (ageYear < 18) {
    return { ageValid: true };
  }

  return null;
}
