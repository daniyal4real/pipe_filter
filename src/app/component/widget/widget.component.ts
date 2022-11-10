import { Component, OnInit } from '@angular/core';
import {JsonExporterService} from "../../service/json-exporter.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(
    public jsonExport: JsonExporterService
  ) { }

  ngOnInit(): void {
  }

  onExportJson() {
    this.jsonExport.export()
  }

}
