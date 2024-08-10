import { Component, signal } from '@angular/core';

import { InvestmentService } from '../investment.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {


  constructor(private investmentService:InvestmentService){}

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredReturn = signal('5');
  enteredDuration = signal('3');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enteredInitialInvestment(),
      duration: + this.enteredDuration(),
      annualInvestment: + this.enteredAnnualInvestment(),
      expectedReturn: + this.enteredReturn()
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredReturn.set('5');
    this.enteredDuration.set('3');
  }
}
