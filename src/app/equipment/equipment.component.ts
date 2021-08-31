import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {


  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];

  constructor() { }

  ngOnInit() {
  }



  equipmentObjectBeingEdited: object = null;

  add(equipmentName: string, ) {
    this.equipment.push({name: equipmentName});
  }

  remove(equipmentObject: object) {
    let index = this.equipment.indexOf(equipmentObject);
    this.equipment.splice(index,1);
  }

  edit(equipmentObject: object) {
    this.equipmentObjectBeingEdited = equipmentObject;
  }

  save(name: string, equipmentObject: object) {
    equipmentObject['name'] = name;
    this.equipmentObjectBeingEdited = null;
  }
}
