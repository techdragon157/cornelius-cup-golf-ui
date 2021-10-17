import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'gss-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form = new FormGroup({});
  model = { 
    players: [{}]
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'players',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another player',
      },
      fieldArray: {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            className: 'col-8',
            templateOptions: {
              label: 'Name',
              placeholder: 'Enter player name',
              required: true,
            }
          },
          {
            key: 'handicap',
            type: 'input',
            className: 'col-4',
            templateOptions: {
              type: 'number',
              label: 'Handicap',
              placeholder: 'Handicap',
              required: true,
              max: 54
            }
          }
        ]
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
