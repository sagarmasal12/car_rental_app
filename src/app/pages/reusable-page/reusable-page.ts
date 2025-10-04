import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-page',
  imports: [NgStyle],
  templateUrl: './reusable-page.html',
  styleUrl: './reusable-page.css'
})
export class ReusablePage {

  @Input() progressValue :string ="75"
}
