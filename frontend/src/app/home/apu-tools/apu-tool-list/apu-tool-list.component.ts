import { Component, OnInit } from '@angular/core';
import { ApuToolService } from '../services/apu-tools.service';
import { ApuTool } from '../interfaces/apu-tool.interface';

@Component({
  selector: 'app-apu-tool-list',
  templateUrl: './apu-tool-list.component.html',
  styleUrls: ['./apu-tool-list.component.scss']
})
export class ApuToolListComponent implements OnInit {
  apuTools: ApuTool[];
  loadingIndicator: boolean = true;

  constructor(private apuToolService: ApuToolService) { }

  ngOnInit() {
    this.getApuTools();
  }

  getApuTools() {
    this.apuToolService.getApuTools().subscribe((data: ApuTool[]) => {
      this.apuTools = data;
      this.loadingIndicator = false;
    });
  }

  deleteApuTool(id: number) {
    if (confirm('¿Estás seguro de eliminar esta herramienta APU?')) {
      this.apuToolService.deleteApuTool(id).subscribe(() => {
        this.getApuTools();
      });
    }
  }
}
