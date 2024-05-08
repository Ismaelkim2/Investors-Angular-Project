import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  makeMpesaPayment(): void {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer + axsYStkAcOGiwdxZ8sMcRhSIB5ON'); 

    const mpesaRequest = {
      BusinessShortCode: 174379,
      Password: "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjQwNTA3MTQ1MjUz",
      Timestamp: "20240507145253",
      TransactionType: "CustomerPayBillOnline",
      Amount: 1,
      PartyA: 254722612266,
      PartyB: 174379,
      PhoneNumber: 254722612266,
      CallBackURL: "https://mydomain.com/path",
      AccountReference: "CompanyXLTD",
      TransactionDesc: "Payment of X"
    };

    this.http.post<any>('http://localhost:8080/api/mpesa/stkpush', mpesaRequest, { headers }).subscribe(
      (response) => {
        console.log('M-Pesa payment response:', response);
        // Handle response as needed, e.g., show success message to the user
        this.router.navigate(['/mpesa-interface']);
      },
      (error) => {
        console.error('Error making M-Pesa payment:', error);
        // Handle error, e.g., show error message to the user
      }
    );
  }
}
