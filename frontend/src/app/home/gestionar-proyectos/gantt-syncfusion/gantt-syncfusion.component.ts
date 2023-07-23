import { Component, Input, OnInit } from '@angular/core';
import { projectNewData } from './data';
import { GestionarProyectosService } from '../gestionar-proyectos.service';

@Component({
  selector: 'app-gantt-syncfusion',
  templateUrl: './gantt-syncfusion.component.html',
  styleUrls: ['./gantt-syncfusion.component.scss'],
})
export class GanttSyncfusionComponent implements OnInit {


  @Input() commercial_offer_id: string | null;

  public data: object[];
  public taskSettings: object;
  public columns: object[];
  public labelSettings: object;
  public projectStartDate: Date;
  public projectEndDate: Date;
  public toolbar: string[];
  public editSettings: object;

  constructor(
    private gestionarProyectosService: GestionarProyectosService
  ) { }

  public ngOnInit(): void {
      console.log(this.commercial_offer_id)
      this.gestionarProyectosService.getProjectManagementByCommercialOfferId(this.commercial_offer_id).subscribe((res: any) => {
       this.data = res['data'];
      }, err => {
        alert("error al obtener los datos del gantt")
      })
      this.data = []
      this.taskSettings = {
          id: 'TaskID',
          name: 'TaskName',
          startDate: 'StartDate',
          endDate: 'EndDate',
          duration: 'Duration',
          progress: 'Progress',
          dependency: 'Predecessor',
          child: 'subtasks'
      };
      this.columns =  [
          { field: 'TaskID', width:80 },
          { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' },
          { field: 'StartDate' },
          { field: 'Duration' },
          { field: 'Progress' },
          { field: 'Predecessor' }
      ];
      this.projectStartDate = new Date('01/01/2023');
      this.projectEndDate = new Date('12/31/2023');
      this.labelSettings = {
          leftLabel: 'TaskName',
      };

      this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'];

      this.editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
    };
  }

  created(): void {
    console.log("created");
  }

  saveChanges() {
    console.log(this.data);

    let data2 = {
      gantt_schema: this.data,
      commercial_offer_id: this.commercial_offer_id
    }
    this.gestionarProyectosService.saveProjectManagement(data2).subscribe((res:any) => {
      alert("Información del gantt guardada exitosamente")
    },er => {
      alert("error al guardar la información del gantt")
    })
  }
  

}
