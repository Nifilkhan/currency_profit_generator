import { Component, inject} from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {


  private InvestmentService = inject(InvestmentService);

  get results(){
    return this.InvestmentService.resultData;
  }
}
