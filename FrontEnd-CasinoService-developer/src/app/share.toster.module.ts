import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from './toast.service';
import { ToastsContainerComponent } from './toasts-container.component';

@NgModule({
  declarations: [ToastsContainerComponent],
  imports: [NgbModule,CommonModule],
  exports: [ToastsContainerComponent],
  providers: [ToastService],
})
export class SharedToastModule {}
