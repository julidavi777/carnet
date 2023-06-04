import { Component, OnInit } from '@angular/core';
import { projectNewData } from './data';

@Component({
  selector: 'app-gantt-syncfusion',
  templateUrl: './gantt-syncfusion.component.html',
  styleUrls: ['./gantt-syncfusion.component.scss'],
})
export class GanttSyncfusionComponent implements OnInit {


  
  constructor() { }
  public data: object[];
  public taskSettings: object;
  public columns: object[];
  public labelSettings: object;
  public projectStartDate: Date;
  public projectEndDate: Date;
  public toolbar: string[];
  public editSettings: object;

  public ngOnInit(): void {
      this.data = projectNewData;
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
      this.projectStartDate = new Date('03/24/2019');
      this.projectEndDate = new Date('07/06/2019');
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

}
