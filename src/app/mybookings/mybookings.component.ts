import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit{
  bookings: any[] | any;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }
  deleteBooking(index: number) {
    this.bookings.splice(index, 1);
    alert("your booking was cancelled");
  }
  
}




