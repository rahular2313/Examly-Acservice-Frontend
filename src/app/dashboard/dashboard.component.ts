import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,private bookingService: BookingService) { }

  ngOnInit() {
    this.dashboardForm = this.formBuilder.group({
      deviceType:['', Validators.required],
      deviceName: ['', Validators.required],
      deviceModel: ['', Validators.required],
      problem: ['', Validators.required],
      date: ['', Validators.required],
      timeSlot: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.dashboardForm.controls; }

  onSubmit() {
    if (this.dashboardForm.invalid) {
      // Form is invalid, do not proceed
      alert('Please fill all the fields.');
      return;
    }

    // Form is valid, proceed with submitting the data
    this.bookingService.addBooking(this.dashboardForm.value);
    console.log(this.dashboardForm.value);
    this.dashboardForm.reset();
    alert('Successfully booked!');
    // You can perform further actions like API calls here
  }
}
