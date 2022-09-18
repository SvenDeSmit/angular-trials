console.log('Hello world');
console.log('Apples');

let myFunc = function (nameFunction) {
  return('Hello '+nameFunction()+'.');
}

let printName = function (nameFunction, printFunction) {
  printFunction(myFunc(nameFunction));
}

printName(function () { return 'Sven' }, console.log);

console.log(myFunc(function () {
  return 'Adam';
}));

function myFunc2(par1, par2='def') {
  console.log(par1);
  console.log(par2);
}

myFunc2('hi', 'there');
myFunc2('pi');

function myFunc3(par1, par2, ...pars) {
  console.log(par1);
  console.log(par2);
  for (let i = 0; i < pars.length; i++) {
    console.log(pars[i]);
  }
}

myFunc3('hi', 'there','aeen','atwee','adrei');

let myLambdaFunc = (inputFunc) => ("Hello " + inputFunc());
let printNameLambda = (nameFunction, printFunction) => printFunction(myLambdaFunc(nameFunction));

printNameLambda(() => 'Sven', console.log);

let myArr = [true, "hi", 78];

for (let i = 0; myArr.length>i; i++) {
  console.log(myArr[i]);
}

myArr.forEach((value, index) => console.log(value));

/*
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
*/
