import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Output() closed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    this.closed.emit;
  }

}
