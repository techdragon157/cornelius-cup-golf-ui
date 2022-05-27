import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Player } from 'src/app/models/player';
import { addPlayerSuccess } from 'src/app/state/players/players.actions';
import { selectAllPlayers } from 'src/app/state/players/players.selectors';

@Component({
  selector: 'gss-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'id',
          type: 'input',
          templateOptions: {
            label: 'Id',
            required: true,
            disabled: true
          },
          hideExpression: 'true'
        },
        {
          key: 'name',
          type: 'input',
          className: 'col-6',
          templateOptions: {
            label: 'Name',
            required: true,
          }
        },
        {
          key: 'email',
          type: 'input',
          className: 'col-6',
          templateOptions: {
            label: 'Email Address',
            required: true,
          },
          validators: {
            validation: ['email'],
          },
        }
      ]
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'handicap',
          type: 'input',
          className: 'col-6',
          templateOptions: {
            type: 'number',
            label: 'Handicap',
            required: true,
            max: 54
          }
        },
        {
          key: 'phone',
          type: 'input',
          className: 'col-6',
          templateOptions: {
            label: 'Phone (optional)',
            required: false
          }
        }
      ]
    }
  ];

  players$ = this.store.select(selectAllPlayers);

  constructor(private store: Store) { }

  ngOnInit(): void {
    // this.store.
  }

  onSubmit() {
    if (this.form.valid) {
      const newPlayer = {...this.model as Player}
      this.store.dispatch(addPlayerSuccess({player: newPlayer}))
    }
  }

}
