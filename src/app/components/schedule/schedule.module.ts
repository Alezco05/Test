import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddContactComponent } from "./add-contact/add-contact.component";
import { ListContactComponent } from "./list-contact/list-contact.component";
import { ScheduleComponent } from "./schedule.component";

@NgModule({
  declarations: [ScheduleComponent, AddContactComponent, ListContactComponent],
  imports: [CommonModule],
  exports: [ScheduleComponent, AddContactComponent, ListContactComponent]
})
export class ScheduleModule {}
