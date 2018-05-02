import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Http } from '@angular/http';
import { ReadDataService } from '../read-data.service';

declare var dhtmlXGridObject: any;

@Component({
  selector: 'app-dhtmlx-grid',
  templateUrl: './dhtmlx-grid.component.html',
  styleUrls: [
    '../../assets/ext/dhtmlxGrid/codebase/dhtmlxgrid.css',
    '../../assets/ext/dhtmlxToolbar/codebase/skins/dhtmlxtoolbar_dhx_skyblue.css'
  ]
})
export class DhtmlxGridComponent implements OnInit, AfterContentInit {
  private myGrid: any;
  private numRows: number;
  private numColumns: number;
  private numTables: number;
  private rowsPerPage: number;
  private data: any[];
  private colDef: any[];
  private colWidth: any[];
  private colAlign: any[];
  private colTypes: any[];
  private colNames: any[];
  private eXcell_details: any;
  private showStyle = true;

  constructor() {
        this.numRows = 20;
        this.numTables = 1;
        this.rowsPerPage = 10;
        this.colNames = [
            'NAME,CEC ID,CITY'
        ];
        this.data = [];
        this.colDef = [];
        this.colWidth = ['100,200,*'];
        this.colAlign = [];
        this.colTypes = [];
        this.numColumns = this.colNames.length;
        this.createColumnDef();
        this.createData();
        // this.eXcell_details = new eXcell_details();
        console.log('Constructor done');
  }

  ngOnInit() {
  }


  ngAfterContentInit() {
    console.log('Init : Init');
    const mygrid = new dhtmlXGridObject('gridbox');

    let zdata = [
      ['<a href="#">Test Promo 1</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 2</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'GREATER CHINA', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 3</a>', 'PP-Test-180430-04583', 'PROMOTION', 'INPROGRESS', 'EMEAR', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 3</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Contractual 5</a>', 'CD-Test-180430-04583', 'CONTRACTUAL', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 6</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 7</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 8</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'APJ', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 9</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 10</a>', 'BR-Test-180430-04583', 'REWARD', 'REJECTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 11</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 12</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Contractual 13</a>', 'CD-Test-180430-04583', 'CONTRACTUAL', 'INPROGRESS', 'APJ', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 14</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 15</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'EMEAR', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 16</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 17</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Reward 18</a>', 'BR-Test-180430-04583', 'REWARD', 'ACTIVE', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--'],
      ['<a href="#">Test Promo 19</a>', 'PP-Test-180430-04583', 'PROMOTION', 'SUBMITTED', 'AMERICAS', '27-Apr-2018', '31-Apr-2022', '--']
    ];

    mygrid.setImagePath('../../assets/ext/dhtmlxGrid/codebase/imgs/');
    mygrid.setHeader('Name,Code,Entity Type,Status,Geo,Start Date,End Date,Role Name');
    mygrid.setInitWidths('125,100,100,150,100,100,100,*');
    mygrid.setColAlign('left,left,left,left,left,left,left,left');
    mygrid.setColTypes('ro,ro,ro,ro,ro,ro,ro,ro');
    mygrid.setColSorting('na,na,str,str,na,na,na,na');
    mygrid.setSkin('dhx_skyblue');
    mygrid.enablePaging(true, 10, 5, 'pocToolbar');
    mygrid.setPagingSkin('toolbar', 'dhx_skyblue');

    mygrid.init();

    // mygrid.parse(this.dataService.getData());
    mygrid.parse(zdata, 'jsarray');
    //
    // mygrid.parse(`../../assets/xml/data.xml`);

  }

  getStyle() {
    if (this.showStyle) {
        return 'yellow';
    } else {
        return '';
    }
  }

  private createData() {
    for (let j = 0; j < this.numRows; j++) {
        const time = new Date(new Date().getTime() + (j * (24 * 60 * 60 * 1000)));
        const valObj: any[] = [];
        for (let i = 0; i < this.numColumns; i++) {
            const val = Math.floor(Math.random() * (7710000 - 1710000) + 1710000) +',A,B,C';
            valObj.push(`${val}`);
        }
       // console.log(valObj);
        this.data.push(valObj);
    }
  }

  private createColumnDef() {
      for (let i = 0; i < this.colNames.length; i++) {
          this.colDef.push('int');
          this.colWidth.push(100);
          this.colAlign.push('left');
          this.colTypes.push('edn');
      }
      this.colTypes[this.colTypes.length - 1] = 'details';
  }
}
