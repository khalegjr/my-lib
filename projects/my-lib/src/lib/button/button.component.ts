import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "my-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() text: string = "Button";
  @Output() click: EventEmitter<void> = new EventEmitter();

  onclick() {
    this.click.emit();
  }
}
